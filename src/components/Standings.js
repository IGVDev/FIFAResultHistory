import React, { Component } from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';

class Standings extends Component {
   constructor() {
      super();

      this.state = {
        data: []
      }
   }
  
   componentDidMount() { 
      axios.get('http://localhost:3001/standings')
         .then(matches => this.setState({ data: matches.data })
      )
   }

   render() {
      const columns = [
         {
            name: 'Name',
            selector: 'name',
            sortable: true,
         },
         {
            name: 'Points',
            selector: 'points',
            sortable: true,
            right: true,
         },
         {
            name: 'P',
            selector: 'gamesPlayed',
            sortable: true,
            right: true,
         },
         {
            name: 'W',
            selector: 'gamesWon',  
            sortable: true,  
            right: true,
         },
         {
            name: 'D',
            selector: 'gamesTied',   
            sortable: true, 
            right: true,
         },
         {
            name: 'L',
            selector: 'gamesLost',   
            sortable: true, 
            right: true,
         },
         {
            name:'%',
            selector: 'winpercent',
            sortable: true,
            right: true,
         },
         {
            name: 'GF',
            selector: 'goalsFor',    
            sortable: true,
            right: true,
         },
         {
            name: 'GA',
            selector: 'goalsAgainst',    
            sortable: true,
            right: true,
         },
         {
            name: 'GD',
            selector: 'goalDif',    
            sortable: true,
            right: true,
         }
      ];
      const data = this.state.data;
      return (
         <DataTable 
            title="Standings"
            columns={columns}
            data={data}
            theme='dark'
         />
      );
   };
}
   
   
export default Standings;
