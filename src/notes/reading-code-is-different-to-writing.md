---
title: Reading code is a different experience to writing code
slug: reading-code-is-different-to-writing
added: 2023-01-30 07:18
updated: 2023-01-30 07:18
tags: [development]
excerpt: "Once I reach the point where I know what the code is doing, I kind of wish it would get out of the way. Enter: abstraction."
note: publish
---

When writing code, the first thing I focus on is making it do the thing I want it to do. After that is achieved, I might end up with a large file or method. Once I reach the point where I know what the code is doing, I kind of wish it would get out of the way.

Enter: abstraction. If I could take out all these lines of code and abstract them into neat little functions, I could make the main method read like a book!

The CodePen Rails codebase went through an era of organising code this way, so we have many methods that look like this. 

```ruby
  def new
    @new_user = User.new
    @init_data['__pageType'] = 'signup'

    set_owner
    set_pay_ownable_tier
    set_current_interval

    @team_user_pending_invite = find_team_user_pending_invite

    store_request_session_return_to

    respond_to do |format|
      format.html do
        render(layout: 'signup-and-login')
      end
    end
  end
```

When you're the person authoring this sort of code, it is satisfying to look at. Look how neat this is; all the implementation details are tucked away in places that are not right here. I don't need to see those details because I'm confident they are doing what they should. I wrote it.

When you're the person reading this code three months, nine months, or three years down the track, you can't be confident that everything is doing what it should. You can't be sure that the function names tell you everything you need to know about this code. You have to jump to their definition and see what's inside them.

And when you're in a codebase that has been abstracted to high-heaven, having to "Go To Definition" up to six times before you arrive at the actual logic in a program is maddening. 

We've been moving our CodePen backend from Rails to Go. When I first started using Go, I found it to be ["disgustingly verbose"](https://www.reddit.com/r/golang/comments/9te39s/does_anyone_else_feel_like_go_is_disgustingly/). It seemed the "Go way" to write code was to err on the side of leaving logic "in-line" rather than abstract it to another location. ["A little copying is better than a little dependency."](https://www.youtube.com/watch?v=PAAkCSZUG1c&t=9m28s)

When working with Go, my gut reaction was to dislike having to look at all that code. I also missed all the helper functions available in JavaScript and Ruby, for doing things like finding items in arrays. 

However, when I returned to reading the old Rails code, I found myself *missing* the simplicity and verbosity of the Go code. When I switched from **code writer** to **code reader**, clever abstractions were far less appealing, no matter how well they were named.

As my experience as a developer grows, I realise that if my goal is to write clear code, I should put myself in the perspective of the person who has to come back and read the code later, whether that is a team member or myself in 6 months.

### Related
- [Just a big brain developer trying to be a grug brain](/just-a-big-brain-dev/)
- [Clever Code Considered Harmful](https://www.joshwcomeau.com/career/clever-code-considered-harmful/) by Josh Comeau