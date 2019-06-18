import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import {Sidebar} from './Sidebar';

export class Main extends React.Component{
    render(){
        return (
            <div id="container">
                <Header/>
                    <Sidebar/>
                    <Footer/>
                </div>
        );
    }
}