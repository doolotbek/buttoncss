
import {PropTypes} from 'react';



var React = require('react')


class Button extends React.Component {
  render() {
    return (
      <div className="buttons">

      <button className="login">ログイン  </button>
      <button className="login2">ログイン</button>    
      <button className="login3">ログイン </button> 
      <button className="post">投稿する</button> 
      <button className="cancel">キャンセル</button>
      <button className="cancel1">キャンセル</button> 
      <button className="login4">ログイン</button>
      </div>


    );
  }
}

export default {prop1: PropTypes.string}. connect(Button);