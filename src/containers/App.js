import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import  { members }  from '../components/members';
import './App.css';

class App extends Component {
    constructor() {
        super(0)
        this.state = {
            members: members,
            searchfield:''
        }
    }

    Searching = (event) => {
        this.setState({ searchfield: event.target.value })
    }
    
    render() {
        const filteredMembers = this.state.members.filter(member => {
            return member.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className='tc'>
                <h1 className='f1'>Members</h1>
                <SearchBox Search={this.Searching}/>
                <Scroll>
                    <CardList members = { filteredMembers }/>
                </Scroll>
            </div>
        );
    }
}

export default App;