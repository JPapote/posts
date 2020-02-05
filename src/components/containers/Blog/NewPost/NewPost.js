import React, { Component } from 'react';
import axios from 'axios';
import classes from './NewPost.module.css';
import {Redirect}  from 'react-router-dom';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max',
        submit: false
    }

    uploadData = () => {
        const data = {
            title: this.state.title,
            content: this.state.content,
            author: this.state.author
        };
        axios.post('/posts', data)
        .then(response => {
            console.log(response);
           // this.props.history.replace('/posts');
           //this.props.history.push('/posts/');
             this.setState({submit: true})
        })
    }

    render () {
        let redideccionar = null;
        if(this.state.submit){
            redideccionar = <Redirect to='/posts/'/>
        }
        return (
            <div className={classes.NewPost}>
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button onClick={this.uploadData}>Add Post</button>
                {redideccionar}
            </div>
        );
    }
}

export default NewPost;