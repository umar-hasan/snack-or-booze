### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
  - Setting paths to different parts of a web application.

- What is a single page application?
  - Web application that only operates on a single page, and doesn't refresh whenever a user performs any action like submitting a form or clicking links to other routes.

- What are some differences between client side and server side routing?
  - Pages need to rerender when making requests to a server for server side routing, but client side routing does not need to refresh the page and routes are handled internally.

- What are two ways of handling redirects with React Router? When would you use each?
  - `Redirect` component - setting a default path when an invalid URL is reached
  - `history.push` - redirecting a user to a previous or different page after a particular action such as logging into a form

- What are two different ways to handle page-not-found user experiences using React Router? 
  - `Redirect` component can redirect a user to a 404 page if the URL is invalid
  - Using a `Route` that doesn't have a specified path

- How do you grab URL parameters from within a component using React Router?
  - `<Route path="/:parameter">...</Route>`

- What is context in React? When would you use it?
  - Data that can be used across multiple components, used when you don't want to pass props down components in a single direction.

- Describe some differences between class-based components and function
  components in React.
  - Classes use a single state object, functional components use multiple state objects.
  - Functions have to be binded in classes.
  - Classes have different methods such as `componentWillMount`, functional components have the `useEffect` hook to handle component mounting/unmounting.

- What are some of the problems that hooks were designed to solve?
  - Code can be reused across multiple components instead of in a single direction to child components.
  - Functional components can be used more often since they can access lifecycle methods and states.
