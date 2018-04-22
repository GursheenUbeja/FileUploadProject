import React from 'react';

class Movie extends React.Component {
   render() {
      return (
         <div>
           <h1>{this.props.title}</h1>
           <h2>{this.props.genre}</h2>
         </div>
        
      );
   }
}
export default Movie;