# React.createContext

It is a common use case that we want to change the theme in an app.
The simplest way to implement is creating multiple classNames.
Fortuately, React provides React.createContext method that can advancely implement that.

I decompose the implementation into four steps:
- create Context 
- create provider, which provides the theme context
- create consumer, which receives the theme content, and wrap a stateless component into the consumer
- create the stateless component, just blindly receives withouut caring who gives it.