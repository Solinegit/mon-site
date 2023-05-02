const message: string = 'Hello, World!';
// create a new heading 1 element
const heading: HTMLHeadingElement = document.createElement('h1');
heading.textContent = message;
// add the heading the document
document.body.appendChild(heading);