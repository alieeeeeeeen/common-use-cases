# Render props

Render props is a technological method which tells the component where to render.

There are some scenarios that can be considered when we want to use render-props

* tooltip
  Tooltip must show below or above a specific position, which seems perfectly consistent with the render-props functionality.
  The common use case is that when we click a button there will be a tooltip shows below or above. Note that the position of the
  button is unsure. Therefore, we should initially get the position then attach the position properties to the tooltip component.
  
  Typically, we can implement by the following three steps:
  - Create a child component that should be rendered according to the position. Basically, I wrap a function as the child component.
  - Create a parent component, which passes the position arguments. In the render method, return {it.props.render}
  - Create a intermediate component, which wraps the parent component and pass the arguments down toward the child component via parent component render method.

* mousemove
* drag and drop