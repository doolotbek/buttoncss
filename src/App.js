import React, { Component } from 'react';
import './App.css';
import Button from './Button';
import { BottomNavigation } from '@material-ui/core';


class App extends Component {

	render() {
		return (
            
			<div className="container">
            
		
              <div><Button  rootStyle="login1" text="ログイン" color="blue"/></div>
              <div className="btn"><Button rootStyle="login2" text="ログイン"  color="blue" >
                    <div class="wrapper5">
                      <i class="fa fa-heart"></i>
                      </div>
                     </Button>
              </div>
              <div><Button rootStyle="login3" text="ログイン" color="blue"/></div>
              <div><Button rootStyle="post" text="投稿する" color="blue"/></div>
              <div><Button rootStyle="cancel" text="キャンセル" color="blue"/></div>
              <div><Button rootStyle="cancel1" text="キャンセル" color="blue"/></div>
              <div><Button rootStyle="login4" text="ログイン" color="blue"/></div>
          
              <div><Button rootStyle="change" text="変更する" color="blue"/></div>
					
			</div>
		);
	}
}	

export default App;


// <div class="wrapper5">
//       <i class="fa fa-heart"></i>
//     </div>