import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const headerTitleText = "Header";
const contentTitleText = "contentTitleText";
const contentBodyText = "contentBodyText";
const footerTitleText = "Footer";


 ReactDOM.render(
                    <App 
                        headerTitleText = {headerTitleText}
                        contentTitleText = {contentTitleText}
                        contentBodyText = {contentBodyText}
                        footerTitleText = {footerTitleText}
                    />, 
                    document.getElementById("root")
 );
  
  
//serviceWorker.unregister();
