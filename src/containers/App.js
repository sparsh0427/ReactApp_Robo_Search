import React from 'react';
import CardList from '../components/CardList.js';
// import {robots} from './robots.js'; We will not be using robots.json to get robots
import SearchBox from '../components/SearchBox.js';
import './App.css';
import Scroll from '../components/Scroll.js';

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: "",
        }
    }

    componentDidMount(){    //Life Cycle //No need for arrow function here since it is built in in react
        fetch('https://jsonplaceholder.typicode.com/users').then((response) =>{
            return response.json();
        }).then((users) =>{
            this.setState({robots:users})
        })

    }

    onSearchChange = (event) => {           //Arrow function neede
        this.setState({ searchfield: event.target.value})
        // console.log(event.target.value)
        // const filteredRobots = this.state.robots.filter((robots) =>{
        //     return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        // })
    }

    render(){
        const filteredRobots = this.state.robots.filter((robots) =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if(this.state.robots.length === 0){
            return <h1>Loading</h1>
        }
        else{
            return(
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchchange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots = {filteredRobots}/>
                    </Scroll>
                </div>
            );
        }
    }
    
}

export default App;