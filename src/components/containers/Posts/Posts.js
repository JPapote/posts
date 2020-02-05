import React, { Component } from 'react';
import Axios from '../../../Axios';
import Post from '../../Post/Post';
import classes from './Posts.module.css';
import {Route} from 'react-router-dom';
import FullPost from '../Blog/FullPost/FullPost';
//import {Link} from 'react-router-dom';

class Posts extends Component{

    state = {
        posts : [],
        
   };

   componentDidMount () {
       console.log(this.state.posts);
    Axios.get('/posts')
    .then(response => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
            return{
                ...post,
                author : 'Max'
         }
        });
        this.setState({posts: updatedPosts});
        //console.log(response);
    }).catch(error => {
        this.setState({error: true});
    });
}

   postSelectedHandler = (id) => {
    this.props.history.push("/posts/" + id);
   } 

 render() { 
    let posts = <p style={{textAlign:"center"}}>Something went wrong!</p>
    if(!this.state.error){
        console.log(this.state.error);
      posts = this.state.posts.map(value => {
       return (//Link: obtener el id
        // <Link to={'/' + value.id}  key = {value.id}>  
        <Post
        key = {value.id}
        title = {value.title} 
       author={value.author}
       clicked = {() => this.postSelectedHandler(value.id)}
       />
     //  </Link>);
      )});
}

return(
    <section className={classes.Posts}>
        {posts}
        {/*Para obtener el id*/}
        <Route path="/posts/:id" exact component={FullPost} />
    </section>

);
     
}
}

export default Posts;