import React, { useState, useEffect } from 'react'
import axios from 'axios';

function DataFetching() {

    const [ posts, setPost ] = useState([]);

    useEffect(() => {
        axios.get('https://pixabay.com/api/?key=12034596-f9b2e3a9afefafe03ace5f310&q=yellow+flowers&image_type=photo')
        .then(res => {
            console.log(res);
            setPost(res.data.hits);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    return (
        <div>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <img alt={post.likes} src={post.previewURL}/>
                    </li>
                    
                ))}
            </ul>
        </div>
    )
}

export default DataFetching;