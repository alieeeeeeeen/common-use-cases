#Introductory preface: 

## first-class function
When a function is treated like a variable, we said that the function is first-class function.For example,
When we talk about call back -- a function passes as an argument into another function, then be triggered in the outer function, or we assign a function to a variable -- anynomous function. Those all conform to the first-class function.

# React.createPortal
React.createPortal is a first-class way to render a component into a DOM node. The common use case is that we want to show a dialog or modal in the page. Typically, the modal or the dialog is wrapped by a container, which has already inserted into the page.

The following stpes show how to apply the portal method in our code:
- Create a container in the html
- In the modal component, we pass this.props.children as the first argument, and the DOM node as the second argument as the container into the createPortal method, then return the method in the render method. Note that createPortal is synchronize.
