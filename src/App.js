import React from 'react';
import Header from './Includes/Header';
import Content from './Contents/Content';
import StateExapmple from './Contents/StateExapmple';
import RandomNumber from './Contents/RandomNumber';
import Footer from './Includes/Footer';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
        value: Math.round(Math.random()*100)
    };

    this.updateValue = this.updateValue.bind(this);
  }

  updateValue(randomValue){
      this.setState({
          value: randomValue
      });
  }



  render(){
      return  (
          <div>
              <Header headerTitle={this.props.headerTitleText}/>
              <Content contentTitle={this.props.contentTitleText} contentBody={this.props.contentBodyText}/>
              <StateExapmple />
              <RandomNumber number={this.state.value} onUpdate={this.updateValue}/>
              <Footer footerTitle={this.props.footerTitleText}/>              
          </div>
      );
  }
}

App.defaultProps = {
  headerTitle: 'Default header',
  contentTitle: 'Default contentTitle',
  contentBody: 'Default contentBody'
};

export default App;