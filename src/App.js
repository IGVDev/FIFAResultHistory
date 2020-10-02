import React, { Component } from 'react';
import CardList from './components/CardList';
import MatchCard from './components/MatchCard';
import Navigation from './components/Navigation';
import Profile from './components/Profile';
import Register from './components/Register'
import SignIn from './components/SignIn';
import Standings from './components/Standings';
import './App.css';
import 'tachyons';

const initState = {
  matches: [],
  route: 'home',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      matches: [],
      isSignedIn: true,
      route: 'home',
      user: {
        id: '4',
        name: 'guido',
        email: 'joaco@gmail.com',
    }
  }
}

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
    }})
  }

  componentDidMount() { 
    this.setState({ 
     })
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initState)
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  render() {
    const { route } = this.state;
    return (
      <div className='App white'>
        <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
        <div className='flex justify-around'>
          {
            {
              'home':
              <div>
                <h1>Hello, {this.state.user.name}</h1>
                <CardList matches={this.state.matches} />
                <Standings />
              </div>,
            'load': <MatchCard />,
            'signin': <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>,
            'register': <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>,
            'profile': <Profile user={this.state.user}/>
            }[route]
          }
          </div>
      </div> 
    )
  };
}

export default App;