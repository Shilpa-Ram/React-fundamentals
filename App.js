import React from 'react';
import ReactDOM from 'react-dom/client';

const elem = <span tabIndex="0">This is a span</span>;

const Title = () => ( <h1 className="title" tabIndex="5">
    {elem}
    Hello from JSX</h1>
);

const HeadingComponent =  () => (
    <div id="container">
        <Title/>
        {Title()}
     <h1 className='heading'>This is a functional component</h1>
    </div>
)
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingComponent/>);
