# Introductory Preface

## Higher-Order Function
A function that return a function called [Higher-Order Function](https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function)

## Cross-Cutting Concerns
Cross-Cutting Concerns can be simply interpreted as a concern that is linked with other concerns. Therefore, address this concern can be intricate. For example, inserting a data into User database, would be Cross-Cutting Concern since this concern is interacted with other parts of the system.

## Higher-Order Components
HOC are common in third-part React libraries, like `Redux`'s [connect](https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options)
Here is a scenario, a productList and a goodList, which has fairly identical functionality, to fetch data from the server and to render the component according to the data. Instead of writing two components with virtually similar structure, we would wrap a function. This function is called `Higher-Order Component`, which receive a component and function as arguments, then return a component.