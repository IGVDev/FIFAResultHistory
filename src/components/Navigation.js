import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
      if (isSignedIn) {
         return (
         <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p onClick={() => onRouteChange('home')}className='f3 link dim white underline pa3 pointer'>Home</p>
            <p onClick={() => onRouteChange('profile')}className='f3 link dim white underline pa3 pointer'>Profile</p>
            <p onClick={() => onRouteChange('load')}className='f3 link dim white underline pa3 pointer'>Load Match</p>
            <p onClick={() => onRouteChange('signout')}className='f3 link dim white underline pa3 pointer'>Sign Out</p>
         </nav>
         );
      } else {
         return (
         <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p onClick={() => onRouteChange('home')}className='f3 link dim white underline pa3 pointer'>Home</p>
            <p onClick={() => onRouteChange('signin')}className='f3 link dim white underline pa3 pointer'>Sign In</p>
            <p onClick={() => onRouteChange('register')}className='f3 link dim white underline pa3 pointer'>Register</p>
         </nav>
      );
   }
}

export default Navigation;