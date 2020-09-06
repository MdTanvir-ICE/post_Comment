import React, { useEffect, useState, createContext } from 'react';
import { useParams } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';

export const singleProduct = createContext();

const PostDetail = (props) => {

    let { id } = useParams();
    const [postDetail, setPostDetail] = useState({});

    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/posts/';
        fetch(`${url}/${id}`)
            .then(response => response.json())
            .then(data => setPostDetail(data))

    }, [id]);

    return (
        <singleProduct.Provider value={postDetail}>
            <Grid container direction="row" justify="center" alignItems="center" >
                <Grid className='body' item md={4} >
                    <Paper className='paper' >
                        <Card className='card-body'>
                            <CardContent>
                                <Typography className='title' color="textSecondary" gutterBottom>
                                    Post No:{id}
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    Title :{postDetail.title}
                                </Typography>  
                                <Typography component="p">
                                  {postDetail.body}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Link to={"/post&comment/"+id}>
                                    <Button size="small" variant="contained" color="primary" onClick={props.handleShow}>Comment</Button>
                                </Link>
                            </CardActions>
                        </Card>
                    </Paper>
                </Grid>
            </Grid>
        </singleProduct.Provider>
    );
};

export default PostDetail;