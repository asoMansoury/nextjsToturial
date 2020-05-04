import './index.css'
import './main.css';
import Card from './Card';
import React from 'react';
import data from '../data/data.json';
import {bindActionCreators} from 'redux';
import {initStore,initialCard,addItem} from '../store';
import withRedux from  'next-redux-wrapper';


export default class index extends React.Component{
    static async getInitialProps({store}){
        store.dispatch(initialCard());
    }

render(){
    return(
    <div className="App">
    <header className="App-header">
        <img src="/static/logo.png"
            className="static-logo" alt="logo"
        ></img>
        </header>
        <div className="Grid">
            {
                this.props.cards.map((card)=>(
                    <Card key={card.id}></Card>
                ))
            }
        </div>
    </div>
    )
    }
}


