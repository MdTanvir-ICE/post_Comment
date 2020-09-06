import React, { useState, useEffect } from 'react';
import AllPost from '../AllPost/AllPost';
import './postComment.css';
import Grid from '@material-ui/core/Grid';


const PostComment = () => {
    console.log('tanvir');
    const [post, setPost] = useState([]);
    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        fetch(url)
            .then(response => response.json())
            .then(data => setPost(data))

    }, []);

    return (
        <div className="allPost">
            <h1>All post is here</h1>
            <Grid container
                direction="row"
                justify="center"
                alignItems="center" >

                {
                    post.map(pd => <AllPost post={pd}></AllPost>)
                }

            </Grid>
        </div>
    );
};

export default PostComment;