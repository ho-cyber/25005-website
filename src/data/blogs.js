import { parseBlogs } from '../utils/parseBlogs';

const blogs = parseBlogs(`
# Blog 1: Introduction to React
This is a blog about getting started with React. It covers the basics of components, state, and props.

![React Logo](/images/my-image.jpg)

## Blog 2: Advanced React Patterns
This blog dives into advanced React patterns like higher-order components and render props.

## Blog 3: State Management in React
Learn about state management in React using Context API and Redux.
`);

export { blogs };
