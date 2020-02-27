import React from 'react';
import '../css/heart.css';
class Content extends React.Component {
    render(){
        return (
            <div>
                <h2>{this.props.contentTitle}</h2>
                <p>{this.props.contentBody}</p>
                <div with="50%">
                <div class="back"></div>
                <div class="heart"></div>
                </div>

            </div>
        );
    }
  }



export default Content;