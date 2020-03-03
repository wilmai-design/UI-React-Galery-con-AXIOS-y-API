import React, { useState, useEffect } from 'react'
import axios from 'axios';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function DataFetching() {

    const [ posts, setPost ] = useState([]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };

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

            <h2>Dynamic slides</h2>

            <Slider {...settings}>
                {posts.map(post => (
                    <div key={post.id}>
                        {/*<img alt={post.likes} src={post.previewURL}/>*/}

                        <div className="card">
                            <img src={post.previewURL} alt={post.tags} className="card-img-top" />
                        </div>

                        <div className="card-body">
                            <p className="card-text">{post.likes} Me Gusta</p>
                            <p className="card-text">{post.views} Vistas</p>
                        </div>

                        <div className="card-footer">
                            <a
                                href={post.largeImageURL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary btn-block"
                            >Ver Imagen
                            </a>
                        </div>

                    </div>
                    
                ))}
            </Slider>

        </div>
    )
}

export default DataFetching;