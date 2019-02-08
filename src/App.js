import React, { Component } from 'react';
import './App.css';
import Button from './Button';
// import { BottomNavigation } from '@material-ui/core';


class App extends Component {

	render() {
		return (
            
			<div className="container">
            
		
              <div><Button  rootStyle="login1"  text="ログイン"/></div>
              <div ><Button rootStyle="login2" text="ログイン"/></div>          
              <div><Button rootStyle="login3" text="ログイン"/></div>
              <div ><Button rootStyle="post"  text="投稿する"/></div>
              <div><Button rootStyle="cancel" text="キャンセル"/></div>
              <div><Button rootStyle="cancel1" text="キャンセル"/></div>
              <div><Button rootStyle="login4" text="ログイン"/></div>
              <input className="text"  ></input>
              <div><Button rootStyle="change" text="変更する" /></div>
					
			</div>
		);
	}
}	

export default App;

