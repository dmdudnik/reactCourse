import React, { Component } from 'react';
import { Posts } from './Components/Posts';

class App extends Component {
    state = {
        posts: [
            { id: 'abc1', name: 'JS Basics' },
            { id: 'abc2', name: 'JS Advanced' },
            { id: 'abc3', name: 'Recat JS' },
        ],
    };

    hanleDelete =(id)=>{
     this.setState({posts: this.state.posts.filter((post)=> post.id !== id)})
    }

    render() {
        const { posts } = this.state;

        return (
            <div className="App">
                <Posts posts={posts} removePost ={this.hanleDelete} />
            </div>
        );
    }
}

export default App;