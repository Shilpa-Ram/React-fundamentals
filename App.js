import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = React.createElement(
    'div',
    { id: 'parent' },
    [
        React.createElement(
            'div',
            { id: 'child1', key: 'child1' }, [
                React.createElement('h1', { key: 'h1-1' }, "i'm an h1 tag!"),
                React.createElement('h2', { key: 'h2-1' }, "i'm an h2 tag!")
            ]
        ),
        React.createElement(
            'div',
            { id: 'child2', key: 'child2' }, [
                React.createElement('h1', { key: 'h1-2' }, "i'm an h1 tag!"),
                React.createElement('h2', { key: 'h2-2' }, "i'm an h2 tag!")
            ]
        )
    ]
);
console.log(parent);
const jsxHeading = <h1 id="heading" key="h1">Hello from JSX</h1>;
console.log(jsxHeading);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);
