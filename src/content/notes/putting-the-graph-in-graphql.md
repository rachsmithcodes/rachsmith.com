---
title: Putting the graph in GraphQL
slug: putting-the-graph-in-graphql
added: 2022-09-01 19:44
updated: 2022-09-01 19:44
tags: [development]
excerpt: It took me a while to understand how to design for the Graph in a GraphQL API.
note: publish
---

It took me a while to understand how to design for the Graph in a [GraphQL](https://graphql.org/) API. Coming from [REST](https://www.redhat.com/en/topics/api/what-is-a-rest-api), I first added a lot of queries to the [Query type](https://graphql.org/learn/schema/#the-query-and-mutation-types).

For example, to get the comments on a [Pen](https://blog.codepen.io/documentation/pen-editor/), I added a `comments` query to the query type, and I passed in `item_id` and `item_type` as arguments.

##### Schema

```graphql
type Query {
  "List of Item Comments"
  comments(input: CommentsInput!): CommentsPaginated
}

input CommentsInput {
  pagination: PaginationInput = {}
  filters: CommentsFiltersInput!
}

input CommentsFiltersInput {
  itemId: ID!
  itemType: ItemEnum!
}
```

##### Query

```graphql
query Comments($input: CommentsInput!) {
  comments {
    id
    owner {
      id
      username
    }
    text
  }
}
```

##### Variables

```json
"variables": {
  "input": {
    "filters": {
	  "itemID": "hwvmeXVR"
	  "itemType": "Pen"
	}
  }
}
```

This worked just fine, but there wasn't a good reason to put comments on the `Query` type in the API. There wasn't ever a time where we wanted to query for comments belonging to multiple Items, we only got the comments specific to an `Item` (aka a Pen, Project or Collection).

After some time, I realised I don't have to put all my queries on the `Query` type, I can put the queries on _any object in the schema_. So I moved the comments query to the `Item` interface. Now the comments are available on the `Pen`, `Project` and `Collection` objects.

##### Schema

```graphql
"A CodePen Item - Pen, Collection, Post or Project"
interface Item {
  "List of Item Comments"
  comments(input: PaginationInput = {}): CommentsPaginated
}
```

##### Query

```graphql
query CommentsQuery(
  $id: ID!
  $itemType: ItemEnum!
  $commentsPaginationInput: PaginationInput
) {
  item(id: $id, itemType: $itemType, token: $token) {
    id
    comments(input: $commentsPaginationInput) {
      records {
        id
        ...CommentDetails
      }
    }
  }
}
```

This is the whole point of the _graph_ in GraphQL. Rather than just thinking about what data models you can ask the server for, you instead think about how the nodes in your business logic connect and relate to eachother.

An upside of this new design choice is that it simplified the resolver for comments. Previously, we had to select the Item from the DB, check that that logged-in User had permission to access that item, then go and retrieve the comments. The new resolver is handed the Item record with the confidence that permission-checking has been completed further up the graph, meaning the `comments` resolver needs to do less work.
