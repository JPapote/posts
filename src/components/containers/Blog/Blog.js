import React, { Component } from 'react';
//import Axios from '../../Axios';
import classes from './Blog.module.css';
import Posts from '../Posts/Posts';
import NewPost from './NewPost/NewPost';
import { Route, NavLink, Switch} from 'react-router-dom';
//import FullPost from './FullPost/FullPost';
class Blog extends Component {
    state = {
        auth : true
    }
    render() {
        
        return (
            <div className={classes.Blog}>
                <header>
                    <nav>
                        <ul>
                            {/** NavLink es para que no se este cargando la pagina cada vez que eel usuario sal
                            salte de una a otra*/}
                            <li><NavLink to="/posts/"
                                exact
                                activeStyle={{
                                    color: "#fa923f",
                                    textDecoration: "underline"

                                }}
                            >Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: "/new-post",
                                hash: "#submit",
                                search: "?quick-submit=true"
                            }}
                                activeStyle={{
                                    color: "#fa923f",
                                    textDecoration: "underline"

                                }}>New Post</NavLink></li>

                        </ul>
                    </nav>
                </header>
                {/*} <Route path="/" exact render={() => <h1>Home</h1>}/>
                <Route path="/" render={() => <h1>Home 2</h1>}/>*/}
                <Switch>
               {this.state.auth ? <Route path="/new-post" component={NewPost}/>:null}
                    <Route path="/posts/" component={Posts} />
                    <Route render={() =><h1>No fount</h1>}/>
            {/*<Redirect from='/' to='/posts/'/>*/}
                    {/* Switch para que solo se cargue una ruta y no las dos a la vez*/}
                </Switch>
            </div>
        );
    }
}

export default Blog;