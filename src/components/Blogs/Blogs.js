import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='content'>
            <div className='qus1 bg-primary fst-italic'>
                <h2>What is context-api?</h2>
                <p>The React framework provides the Context API as a component structure. It allows us to communicate specific types of data among all application layers. Its goal is to find a solution to the prop drilling problem. The Context API can be used in any case where a prop must be sent through a component before entering another component further down the tree. The Context API makes it simpler and more relevant for all components to access our world and app-wide data.
                </p>
            </div>
            <div className='qus2 bg-primary fst-italic'>
                <h2>What is semantic-tag?</h2>
                <p>Semantic elements contain detailed identifiers that indicate the content type. For example, main, section, table, footer, and so on. The backbone of any HTML document is made up of three semantic elements: html, head, and body. Search engines and other user devices can utilize semantic HTML tags to determine the relative importance and significance of web sites. It's much easier to read pages containing meaningful elements. It gives a better experience for users.</p>
            </div>
        </div>
    );
};

export default Blogs;