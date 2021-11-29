const articles = [
    {
        name:"Learn-React",
        title:"Tyler McGinnis’ article on his collection of “Aha” moments with React",
        content:[`
            OneOne of my main goals, whenever I’m teaching or writing technical content, is to maximize “aha” moments. An “aha” moment is a moment of sudden insight or clarity; when the subject matter suddenly makes sense. We’ve all experienced them, and the best teachers I know can understand their audience and adapt the lesson to maximize these moments.

            ThroughoutThroughout the last few years, I’ve taught React in just about every medium. Throughout that time I’ve been taking notes on what triggers these “aha” moments, specifically for learning React. About two weeks ago I came across this Reddit thread which had the same idea. So what I want to do in this post is to share my collection of these moments while also adding my thoughts on some of the moments shared in that Reddit thread. Hopefully, it will help React “click” for you if it hasn’t yet.
            
            fn(d)fn(d) = V. Your UI is a function of your state and props are to components what arguments are to functions.
            
            One of the best parts of React is that you can use the same intuition that you have about JavaScript functions for when and where you should create React components. However, instead of your function taking in some arguments and returning a value, your function is going to take in some arguments and return an object representation of your UI. This idea can be summed up in the following formula, fn(d) = V. A Function takes in some Data and returns a View. This is a beautiful way to think about developing user interfaces because now your UI is just composed of different function invocations. This is how you’re already used to building applications and now you can take advantage of all of the benefits of function composition when building UIs.
            
            InIn React, your entire application’s UI is built using function composition and JSX is an abstraction over those functions.
            
            The most common reaction I see from first timers using React is “React seems cool, but I really don’t like JSX. It breaks my separation of concerns”. JSX isn’t trying to be HTML, and it’s definitely more than just a templating language. There are two important things to realize with JSX. First, JSX is an abstraction over React.createElement which is a function that returns an object representation of the DOM. I know that was wordy but the tl;dr is that whenever you write JSX, once it’s compiled, you’ll have a JavaScript object which represents the actual DOM (or whatever View is representative of the platform you’re on, iOS, Android, etc). Then React is able to analyze that object, diff it against the previous object representation of the DOM it created, then update the DOM only where a change occurred. This has some performance upsides to it but more importantly, shows that JSX really is “just JavaScript”. Second, because JSX is just JavaScript, you get all the benefits that JavaScript provides (composition, linting, debugging) but still with the declarativeness (and familiarity) of HTML.
            
            “Components“Components don’t necessarily have to correspond to DOM nodes.”
            
            When we first learn React, we’re taught that “Components are the building blocks of React. They take in input and return some UI (descriptor)“. Does that mean that every component needs to directly return UI descriptors as we’re typically taught? What if we wanted to have a component render another component (Higher Order Component pattern)? What if we wanted a component to manage some slice of state and then instead of returning a UI descriptor, it returns a function invocation passing in the state (Render Props pattern)? What if we had a component that was in charge of managing sound rather than a visual UI, what would it return? What’s great about React is you don’t have to return typical “views” from your components. As long as what eventually gets returned is a React element, null, or false, you’re good.
            
            You can return other components,
            
            render () {
              return <MyOtherComponent />
            }
            
            you can return function invocations,
            
            render () {
              return this.props.children(this.someImportantState)
            }
            
            or, you can return nothing.
            
            render () {
              return null
            }
            
            “When“When two components need to share state, I need to lift that state up instead of trying to keep their states in sync.”
            
            A component-based architecture naturally makes sharing state more difficult. If two components rely on the same state, where should that state live? This was such a popular question that it spurred an entire ecosystem of solutions which eventually ended with Redux. Redux’s solution is to put that shared state in another location called a “store”. Components can then subscribe to any portions of the store they need and can also dispatch “actions” to update the store. React’s solution is to find the nearest parent of both of those components and have that parent manage the shared state, passing it down to the child components as needed. There are pros and cons to both approaches, but it’s important to be aware that both solutions exist.
            
            “Inheritance“Inheritance is unnecessary in React, and both containment and specialization can be achieved with composition.”
            
            React has always been, for good reason, very liberal in adopting functional programming principles. A precedent move away from inheritance and towards composition was when the release of React 0.13 made it clear React wasn’t adding support for Mixins with ES6 classes. The reason for this is because most everything that can be accomplished with Mixins (or inheritance) can also be accomplished through composition, but with less downsides. If you’re coming to React from an inheritance heavy mindset, this new way of thinking may be difficult and probably won’t feel too natural. If you’d like to read more, check out JavaScript Inheritance vs Composition
            
            “The“The separation of container and presentational components.”
            
            If you think about the anatomy of a React component, it usually involves some state, potentially some lifecycle hooks, and markup via JSX. What if, instead of having all of that in one component, we separate the state and the lifecycle hooks from the markup. This leaves us with two components. The first has state, life cycle methods, and is responsible for how the component works. The second receives data via props and is responsible for how the component looks. This approach allows us to have better reusability of our presentational components since they’re no longer coupled to the data they receive. I’ve also found that it will enable you (and newcomers to your project) to better understand the structure of your application. You’re able to swap out the implementation of a component without seeing or caring about the UI and vice versa - designers can tweak the UI without ever having to worry about how those presentational components are receiving data.
            
            “If“If you try to keep most of your components pure, stateless things become a lot simpler to maintain.”
            
            This is another benefit of separating your presentational components from your container components. State is the sidekick of inconsistency. By drawing the right lines of separation, you’re able to drastically improve the predictability of your application by encapsulating the complexity of it.
            
            `
        ]
    },
    {
        name:"9 things every React.js beginner should know",
        title:"Cam Jackson’s guide for beginners",
        content:[
           `I've been using React.js for about 6 months now. In the grand scheme of things that's not very long at all, but in the ever-churning world of JavaScript frameworks, that just about qualifies you as a bearded elder! I've helped out a few people lately with React starter tips, so I thought it would be a good idea to write some of them up here to share more broadly. These are all either things that I wish I'd known when I started out, or things that really helped me 'get' React.

           I'm going to assume that you know the absolute basics; if the words component, props, or state are unfamiliar to you, then you might want to read the official Getting started or Tutorial pages. I'm also going to use JSX, because it's a much more succinct and expressive syntax for writing components.
           
           Update, April 2018:
           It's been more than two years since I originally published this blog post. That of course a very long time in software development, and an even longer time in JavaScript. I still agree with a lot of what's written on this page, but definitely not all of it. Partly because the landscape itself has changed in the last couple of years, and partly because I've just changed my mind as I've learned more. I plan to publish a more comprehensive follow-up to this article, but in the short-term I'd like to issue a couple of corrections.
           
           Firstly, my blanket recommendation of Redux in point #5 is far too heavy-handed. Redux is a great library which solves genuine problems with state management in complex React applications, but it's important that you only use it if you actually have those problems. If you can't articulate why Redux is a good idea for your app, then you should put off using it, otherwise you risk making your application more complex rather than less. In addition, if you're a React beginner, trying to learn both React and Redux at the same time is just too hard. You should learn how to manage state properly with React first, and then learn Redux once you actually need it.
           
           Secondly, while I still agree with the general approach to testing that I outlined in point #7, Enzyme has since emerged as one of, if not the leading way to test your React applications. This is a topic that deserves its own dedicated blog post, but for now, my general recommendation would be to use Enzyme to write the kinds of component unit tests I describe in this post.
           
           Those are the two main things I want to add, other than to say that you should always take advice from random internet strangers with an active and sceptical mind, especially when the subject matter has changed a lot since the date of publication. I'm glad that so many people have read this post and found it valuable, but remember that no one's advice is a substitute for thinking through things yourself. And with that, we return to your regularly scheduled blog post :)`
        ]
    },
    {
        name:"Timeline-for-Learning-React",
        title:"Dave Ceddia’s recommended timeline for learning React and the React ecosystem",
        content:[
                `
                Is React hard to learn? Is React easy to learn? Well, it depends on your approach.

This here is your timeline for learning React. Think of these steps as layers in a foundation.

If you were building a house, would you skip some steps to get it done faster? Maybe jump right to pouring the concrete before laying some rocks down? Start building the walls on bare earth?

Or how about making a wedding cake: the top part looks the most fun to decorate, so why not start there! Just figure out the bottom part later.

No?

Of course not. You know those things would lead to failure.

So why does the standard approach to learning React involve trying to learn ES6 + Webpack + Babel + Redux + Routing + AJAX + React all at once? Sounds like a surefire path to overwhelm (and giving up)!

So I’ve laid out a timeline. Take these one step at a time. Do not skip steps. Do not learn 2 steps at the same time.

So How Long Does it Take To Learn React?
The thing is, everyone starts from a different place. You’ll have a different set of knowledge coming in than I did, or than the people on Twitter do, or than your coworkers did. So it’s really hard to give specific timelines.

My own path was something like: programming as a kid, did programming in high school, got a CS degree with bachelors and masters, worked 4-5 years doing low-level C/C++ development, then worked 2 years with JS & jQuery & Java, then a year or so with AngularJS (1.x), and then learning the basics of React took a few days.

If your background is different, it’ll take you a different amount of time. If you’re starting to learn programming at the same time you’re learning React, it will take longer, and that’s fine. That’s normal and expected.

The theme of the strategy I’ll lay out below is to avoid getting overwhelmed. Slow and steady, uh, learns the React ;)

I’m a big believer in giving yourself tiny wins along the way. It makes the process more fun, and makes the learning go faster, too. So whichever step you’re on, try to break the project or exercise or tutorial into small pieces that you can complete to get yourself a little win. Celebrate it.

Always keep in mind that you can minimize or simplify a problem from the stated one. Choose your own difficulty setting. And if you run out of ideas, copy stuff that exists. It’s a great way to learn.

Step 0: JavaScript
Do you need to know JavaScript before you learn React? And how much JavaScript should you know?

Well, JS is Step 0 for a reason. It’ll be hard to learn React without knowing a decent amount of JavaScript, because a lot of React’s syntax is in fact regular JavaScript.

You’ll want to have a good handle on things like…

how this works (particularly how the current scope affects the value of this)
function scope vs block scope
control structures like if and switch
how to write and call functions
how to create and access objects and arrays
functional features, especially Array.map
That’s not an exhaustive list but I think if you can do those things, you can start playing with React in small experimental apps. I’d highly recommend against trying to build a complicated piece of software (like that SaaS app you’ve been dreaming of) as your first outing. Big apps are bad learning projects. Get a few tiny apps (e.g. a few hours, a day, a weekend) under your belt first.

With prior programming experience, JS probably won’t take you too long to pick up. It has some quirks – scoping of this is particularly quirky – but it’s a C-like language so if you’re used to one of those you should be all set.

Here is a good series of books called You Don’t Know JS. They’re free to read online.

The latest versions of React have phased out their usage of ES5 and the old createClass way of making components – it’s all ES6 classes now. But outside of those, there isn’t too much ES6-specific syntax that’s absolutely required. Learn it as you go.

Step 0.5: NPM (or Yarn)
In order to use React and friends, you’ll need a package manager.

NPM and Yarn are the big two package managers of the JavaScript world. There isn’t too much to learn here. When you install Node.js it comes bundled with NPM. Afer that, all you really need to know is how to install packages (npm install <package name>).

Yarn is a more recent package manager and gives some nice improvements over NPM, chief of which is speed of installation. I use Yarn almost exclusively for that reason.

Every package is available through NPM or with Yarn – there are no exclusivity contracts here ;) So try both and pick your favorite.

Step 1: React
Start with Hello World. Use either a plain HTML file with some script tags ala the official tutorial or use a tool like React Heatpack to get you up and running quickly.

Try out the Hello World in 3 minutes tutorial!

Step 2: Build a Few Things, and Throw Them Away
This is the awkward middle step that a lot of people skip.

Don’t make that mistake. Moving forward without having a firm grasp of React’s concepts will lead straight back to overwhelmsville.

But this step isn’t very well-defined: what should you build? A prototype for work? Maybe a fancy Facebook clone, something meaty to really get used to the whole stack?

Well, no, not those things. They’re either loaded with baggage or too large for a learning project.

“Prototypes” for work are especially terrible, because you absolutely know in your heart that a “prototype” will be nothing of the sort. It will live long beyond the prototype phase, morph into shipping software, and never be thrown away or rewritten.

Using a work “prototype” as a learning project is problematic because you’re likely to get all worked up about the future. Because you know it’ll be more than just a prototype, you start to worry – shouldn’t it have tests? I should make sure the architecture will scale… Am I going to have to refactor this mess later? And shouldn’t it have tests?

This specific problem is what I cover in Pure React: once you get past “Hello World,” how do you learn to “think in React?”

Here’s the gist: the ideal projects are somewhere between “Hello World” and “All of Twitter.”

Build some lists of things (TODOs, beers, movies). Learn how the data flow works. For some ideas try this list of React practice projects or if you’re into music try building a little metronome.

Take some existing large UIs (Twitter, Reddit, Hacker News, etc) and break off a small chunk to build – carve it up into components, build the pieces, and render it with static data. “Copywork” is the practice of recreating existing apps as a way of improving your skills and copywork is a great way to learn React.

You get the idea: small, throwaway apps. They must be throwaways otherwise you’ll get hung up on maintainability and architecture and other crap that just doesn’t matter yet.

I created Pure React to teach this way because there’s not much else out there that takes the bite-size approach.

React is Hard
Before you go too much further I just want to be straight with you. Learning React is gonna be tough. You will struggle at first, and that is TOTALLY NORMAL. The only way out is through: keep building tiny things until the concepts sink in.

Practice is super important. Building apps, even (especially) tiny ones is super important. Don’t just read tutorials and watch videos. Learning React (or anything, really) is not a linear process. It does not go like this:

read/watch tutorials until it makes sense
build a great app
The fastest path is (counterintuitively) more like this:

read/watch just one tutorial
try out what you just learned
make some mistakes, re-read, fix them, try again
try it on your own again
success! tiny win! back to step 1.
So keep that in mind as you’re working through this stuff. It’s hard. It will get easier, but it will suck for a while, and you’re not stupid or foolish for struggling. Everybody struggles! “Programming is suffering.” At least I think that was the quote.

Step 3: Webpack
Build tools are a major stumbling block. Setting up Webpack feels like stumbling through a dark cave the first few times, and it’s a whole different mindset from writing UI code. This is why Webpack is down at Step 3, instead of Step 0.

I recommend Webpack – The Confusing Parts as an introduction to Webpack and its way of thinking.

Once you understand what it does (bundles every kind of file, not just JS) – and how it works (loaders for each file type), the Webpack part of your life will be much happier.

On the other hand, you can just avoid it by sticking with Create React App. It’s an awesome tool for development, and it’s even well-suited to build and deploy your React app to production.

Step 4: ES6
Now that you’re in Step 4, you have all those steps above as context. The bits of ES6 you learn now will help you write cleaner, better code – and faster. If you tried to memorize it all in the beginning, it wouldn’t have stuck – but now, you know how it all fits in.

Learn the parts you’ll use most: arrow functions, let/const, classes, destructuring, and import.

Step 5: Routing
Some people conflate React Router and Redux in their head – they’re not related or dependent on each other. You can (and should!) learn to use React Router before diving into Redux.

By this point you’ll have a solid foundation in “thinking in React,” and React Router’s component-based approach will make more sense than if you’d tackled it on Day 1.

Step 6: Redux
Dan Abramov, the creator of Redux, will tell you not to add Redux too early, and for good reason – it’s a dose of complexity that can be disastrous early on.

The concepts behind Redux are simple in isolation. But there is a mental leap from understanding the pieces to knowing how to use them in an app.

So, repeat what you did in Step 2: build disposable apps. Build a bunch of little Redux experiements to really internalize how it works.

Non-steps
There are a few bits of “common wisdom” that will torpedo your progress pretty quickly. Boilerplate projects, for one.

Diving into React by picking one of the bajillion boilerplate projects out there will only confuse you. They include every possible library, and force a directory structure upon you – and neither of these are required for smaller apps, or when you’re getting started.

It seems logical to start with a solid foundation in the form of a boilerplate that enforces best practices – but it’s a ton of complexity right up front that will make React & the related libraries harder to learn than if you tackled them one-by-one.

And if you’re thinking “But Dave I’m not building a small app, I’m building a complex app that will serve millions of users!”… go re-read that bit about prototypes ;)

How to tackle this
This is a lot to take in. It’s a lot to learn – but there’s a logical progression. One foot in front of the other.

Remember: it’ll be tough at first. Everybody struggles with this. Frontend development is complicated. But you can work through it! Tiny apps. Tiny wins. Lots of practice. It will all add up to understanding the entire stack and being able to build whatever you can imagine.
                `
        ]
    }
]
export default articles;