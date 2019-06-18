import React from 'react';
import { User } from './users';


// export class UserList extends React.component{
//     render(){
//       return (
//         <div>
//         <h1> Users Length : {this.props.users.length}/>
//         { this.props.users.map(user=> {
//             return <User key={user.id} data={user}/>
//         })}
//         </h1>
//         </div>  
//       )
//            }
// }

let printFunc = function(){
  console.log('called from the print function inside UserList component');
}

export function UserList(props){
              let userList = (
              <div className="row">
                  <h1>Users Length : {props.users.length}</h1>
                  {props.users.map(user => {
                  return <User  key={user.id} data={user} print = {printFunc}/>
                  })}
              </div>
          );
          
          return userList;
}