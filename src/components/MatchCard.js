import React from 'react';
import whoWon from './Match'

class MatchCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hteam: '',
            ateam: '',
            team1: '',
            team2: '',
            hscore: 0,
            ascore: 0,
            winner: '',
            needConfirm: false,
        }
    }

    onOptionChange = (event) => {
        this.setState({ [event.target.id]: event.target.value });
        this.setState({ needConfirm: false});
    }

    onSubmitResult = () => {
        const { hteam, ateam, team1, team2, hscore, ascore, winner } = this.state; 
        if (!hteam || !ateam || !team1 || !team2 || !winner) alert('Missing data');
        else {
        fetch('http://localhost:3001/matchload', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                hteam: hteam,
                ateam: ateam,
                team1: team1,
                team2: team2,
                hscore: hscore,
                ascore: ascore,
                winner: winner,
            })
        })
        .catch(err => console.log('oops'));
        this.state = {
            hteam: '',
            ateam: '',
            team1: '',
            team2: '',
            hscore: 0,
            ascore: 0,
            winner: '',
            needConfirm: false,
        }
        alert('Match loaded to database');
        }    
    }

    onScoreVerification = () => {
        this.setState({winner: whoWon(this.state)});
        this.setState({needConfirm: true});
    }

    render() {
    return (
        <article className='br3 white pa3 ma2 bw1 ba shadow-5 dt dt--fixed w-auto fl'>
            <h1>Load Match</h1>
            <main className='b flex pa2'>
                <div>
                    <p>Player Name</p>
                    <input  
                        type='text' id='hteam' 
                        onChange={this.onOptionChange}>
                        </input>
                    <p>Team</p>
                        <input 
                        type='text' 
                        id='team1' 
                        onChange={this.onOptionChange}>   
                        </input>
                    <p>Score</p>
                    <input 
                        type='number' 
                        id='hscore' 
                        onChange={this.onOptionChange}>
                    </input>
                </div>
                <h2 className='pa3'>VS</h2>
                <div>
                    <p>Player Name</p>
                    <input 
                        type='text' 
                        id='ateam' 
                        onChange={this.onOptionChange}>                           
                        </input>
                    <p>Team</p>
                    <input 
                        type='text' 
                        id='team2' 
                        onChange={this.onOptionChange}>                            
                    </input>
                    <p>Score</p>
                    <input 
                        type='number' 
                        id='ascore' 
                        onChange={this.onOptionChange}>     
                    </input>
                </div>
            </main>
            <h2>Winner: {this.state.winner}</h2>
            { !this.state.needConfirm ?
            <input 
               className="b br3 ph3 pv2 input-reset ba b--white white bg-transparent grow pointer f6 dib" 
               type="submit" 
               value="Submit"
               onClick={this.onScoreVerification} />
            : 
            <input 
                className="b br3 ph3 pv2 input-reset ba b--white white bg-green grow pointer f6 dib" 
                type="submit" 
                value="Confirm"
                onClick={this.onSubmitResult} />}
        </article>
        )
    }
}

export default MatchCard;