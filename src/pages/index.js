import * as React from 'react';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import NoteListItem from '../components/NoteListItem';

const IndexPage = ({ data }) => (
  <Layout page="home">
    <Seo title="Home" />
    <div className="p-5 border-b">
      <h3 className="font-headings text-xl mb-3">Try these</h3>
      <ul className="list-none mb-5">
        {data.allMdx.nodes.map(({ fields: { slug, title, tags, excerpt } }) => (
          <NoteListItem
            slug={slug}
            title={title}
            tags={tags}
            excerpt={excerpt}
          />
        ))}
      </ul>
    </div>
  </Layout>
);

export const query = graphql`
  {
    allMdx(
      filter: {
        fields: {
          slug: {
            in: [
              "learning-how-you-best-learn-some-questions-to-ask-yourself"
              "we-confuse-visibility-with-competency"
              "avoiding-when-then-thinking-versus-respecting-your-season"
              "matching-pantry-containers"
              "the-reason-caring-for-babies-and-toddlers-can-be-so-maddening"
              "dont-ask-me-im-a-guesser"
              "i-completely-ignored-the-front-end-development-scene-for-6-months"
            ]
          }
        }
      }
    ) {
      nodes {
        fields {
          title
          slug
          excerpt
          tags
        }
      }
    }
  }
`;

export default IndexPage;
