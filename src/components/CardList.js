import React from 'react';
import Card from './Card'

const CardList = ({ matches }) => {
    return (
        <div className='flex'>
            {
                matches.map((match) => {
                    return (
                        <div>
                        <Card 
                            key={match.id}
                            hteam={match.hteam}
                            ateam={match.ateam}
                            hscore={match.hscore}
                            ascore={match.ascore}
                            team1={match.team1}
                            team2={match.team2}
                            winner={match.winner}
                            />
                        </div>
                        );
                    })
                }
        </div>
    );
}


export default CardList;