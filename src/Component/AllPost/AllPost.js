import React, { useState, useEffect } from 'react';
import './Allpost.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';


const AllPost = (props) => {

    const { userId, id, title, body } = props.post;
    const name = ['Nazmul', 'Dulal', 'Kabir Singh', 'Shuvo', 'Tanvir', 'Arif', 'Jubayer', 'Eftey', 'Shihab', 'Arnob', 'Rakib'];

    return (

        <Grid className='body' item md={4} >
            <Paper className='paper' >
                <Card className='card-body'>
                    <CardContent>
                        <Typography className='title' color="textSecondary" gutterBottom>
                            Post No:{id}
                        </Typography>
                        <Typography variant="h5" component="h2">
                            Title : {title}
                        </Typography>
                        <Typography className='pos' variant="h5" component="h3" color="textSecondary">
                            posted by:{name[userId]}
                        </Typography>
                    </CardContent>
                    <CardActions>

                        <Link to={"/postDetail/" + id}>
                            <Button size="small" variant="contained" color="primary">Read More</Button>
                        </Link>

                    </CardActions>
                </Card>
            </Paper>
        </Grid>
    );
};

export default AllPost;