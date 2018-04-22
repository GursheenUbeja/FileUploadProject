import React from 'react';
import UserList from './container/user-list.jsx'
import UserDetails from './container/user-details.jsx';

class UserApp extends React.Component {
   render() {
      return (
         <div>
             <h2>UserList</h2>
                <UserList></UserList>
             <h2>User Details</h2>
                <UserDetails></UserDetails>
         </div>
        
      );
   }
}
export default UserApp;