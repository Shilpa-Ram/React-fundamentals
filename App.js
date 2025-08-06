{/* <div id='parent'>
    <div id="child">
        <h1> "I'm an h1 tag!</h1>
        <h2> "I'm an h2 tag!</h2>
    </div>
     <div id="child2">
        <h1> "I'm an h1 tag!</h1>
        <h2> "I'm an h2 tag!</h2>
    </div>
</div> */}

const parent = React.createElement(
    'div',
    { id: 'parent' },
    [React.createElement(
        'div',
        { id: 'child1' },[
        React.createElement('h1', {}, "i'm an h1 tag!"),
        React.createElement('h2', {}, "i'm an h2 tag!")
    ]), React.createElement(
        'div',
        { id: 'child2' },[
        React.createElement('h1', {}, "i'm an h1 tag!"),
        React.createElement('h2', {}, "i'm an h2 tag!")
    ])]
);

// const heading = React.createElement(            // Contains 3 props
//     'h1',                                       // Tag name like div, h1, p, span
//     { id: 'heading' },                          // Attributes
//     'Hello World from React!'                   // Children
// );

// console.log(heading);   // object

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);
// root.render(heading);