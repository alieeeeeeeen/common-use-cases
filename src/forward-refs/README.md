# Forwarding Refs

Forwarding Refs literally means forward refs from aparent to child components. It is a rare case when we are using React, since js is a [OOP](https://en.wikipedia.org/wiki/Object-oriented_programming) language, we incline toward encapsulating components rather than involving in the details of the component. However, there are some scenarios unavoidably. For example, when we want to autofocus the input element, or we want to animate the element conditionally. Either of the scnarios force us to get the dom node, and trigger the native dom node events. Instead of manually using document.getElementById, we can assign the tedious task to forwarding refs.

- React.createRef in the parent component

- Pass the ref to the child component.
  *Note that child component don't receive the ref argument, and ref is not available in props either.*

- Create the child component by React.forwardRef, thus the child component can obtain the ref argument in return method.


I basically implment drag and drop with Forwarding Refs and React.Context. Note that both methods can be interoperable. Because `this` in an anonymous function that wrapped by a specific function can obtain the arguments of the outer function.

