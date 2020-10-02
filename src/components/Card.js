import React from 'react';

const Card = ({ hteam, ateam, id, team1, team2, hscore, ascore, winner }) => {
    return (
        <div className='bg-gray br3 pa3 ma2 grow bw2 shadow-5 dt dt--fixed w-auto fl'>
            <h1>Winner: <br/> {winner}</h1>
            <div className='flex items-center'>
                <img alt='team1' src={`https://robohash.org/${id}?size=50x50`} />
                <div>
                    <h2>{hscore}</h2>
                    <p>{team1}</p>
                    <p>{hteam}</p>
                </div>
                <div>
                    <h2>{ascore}</h2>
                    <p>{team2}</p>
                    <p>{ateam}</p>
                    </div>
                <img alt='team1' src={`https://robohash.org/${id+2}?size=50x50`} />
            </div>
        </div>
    )
}

export default Card;