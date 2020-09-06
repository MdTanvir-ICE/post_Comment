import React from 'react';
import './Comment.css';
import { Grid } from '@material-ui/core';

const Comment = (props) => {
    const faker = require('faker');
    var image = faker.image.avatar();
    const { name, body } = props;

    return (
        <Grid container justify="center">
            <Grid item md={4}>
                <div className="container">
                    <div className="comment">
                        <div className="comImage">
                            <img src={image} alt="" />
                        </div>
                        <div className="comDetai">
                            <h4 style={{ color: 'black' }}>{name}</h4>
                            <p>{body}</p>
                        </div>
                    </div>
                </div>
            </Grid>
        </Grid>
    );
};

export default Comment;