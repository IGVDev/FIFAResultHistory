import React, { Component } from 'react';
import CardList from './CardList';
import axios from 'axios';
const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

class Profile extends Component {
   constructor() {
      super();

      this.state = {
         matches: [],
         stats: []
      };
   }

   componentDidMount() {
         let standingsCall = axios.get('http://localhost:3001/standings');
         let matchesCall = axios.get('http://localhost:3001/profile/'+this.props.user.name);

         Promise.all([standingsCall, matchesCall])
            .then(values => Promise.all(values.map(value => value.data)))
            .then(finalValues => {
               let standingsRes = finalValues[0];
               let matchesRes = finalValues[1];
               console.log(this.props.user.name, matchesRes, standingsRes);
               this.setState({ matches: matchesRes.filter(x => (x.hteam === this.props.user.name) || (x.ateam === this.props.user.name))});
               this.setState({ stats: standingsRes.find(x => x.name === capitalize(this.props.user.name)) });
            })
   }

   render() {
      const { name } = this.props.user;
      const { matches } = this.state;
      return(
         <div>
            <h1>Hi, {name}. {<br/>} 
            These are your stats: {<br/>} 
            These are your last 5 matches:</h1>
            <CardList matches={matches}/>
         </div>
      )
   }
}

export default Profile;