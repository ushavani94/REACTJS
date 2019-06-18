import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { UserList } from './userlist';

 const data=[
 
    {
         id: 1,
         name:'ravi',
         imgurl: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500'
 
   },
   {
        id: 2,
        name:'vani',
        imgurl: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500'

    },

    {
        id: 3,
        name:'bhavya',
        imgurl: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500'
    },
    {
        id: 4,
        name:'raj',
        imgurl: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500'
    }
    
]; 
 

ReactDOM.render(
        <div className="alert alert-danger ">
            <UserList users={data}/> 
        </div> ,
        document.getElementById('root')
        );