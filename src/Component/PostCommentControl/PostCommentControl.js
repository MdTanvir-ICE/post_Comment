import React, { useState, useEffect } from 'react';
import PostDetail from '../postDetail/PostDetail';
import Comment from '../Comment/Comment'
import { useParams } from 'react-router-dom';

const PostCommentControl = () => {

    let { id } = useParams();
    const [showComment, setShowComment] = useState(1);
    const handleShow = () => {
        if (showComment) setShowComment(0);
        else setShowComment(1);
    }
    const [allComments, setallComments] = useState([]);

    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/comments';
        fetch(url)
            .then(response => response.json())
            .then(data => setallComments(data))
    }, []);
    const targetComments = allComments.filter(pd => id == pd.postId);

    if (showComment) {
        return (
            <div>
                <PostDetail handleShow={handleShow}></PostDetail>
                {
                    targetComments.map(pd => <Comment name={pd.name} body={pd.body}></Comment>)
                }
            </div>
        );
    }
    else {
        return <PostDetail handleShow={handleShow}></PostDetail>
    }
};

export default PostCommentControl;