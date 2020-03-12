import React from 'react';
import Customer from './components/Customer';
import Header from './Includes/Header';
import Footer from './Includes/Footer';

const customers =[{
  'id' : 1,
  'image': 'http://newsimg.hankookilbo.com/2019/10/18/201910181782714263_1.jpg',
  'name' : 'Joo',
  'gender' : '남자',
  'age' : '33',
  'job' : '직장인',
  'birthday' : '880329',
},
{
  'id' : 2,
  'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQtcGfhG4b0yCIMRhrmEk5heqUmohrk85Jpsom5JSLyftltH6_w',
  'name' : 'Yoon',
  'gender' : '여자',
  'age' : '33',
  'job' : '직장인',
  'birthday' : '900608',
}]

const title ={
  'header' : 'Header',
  'footer' : 'Footer'
}


class App extends React.Component {

  render(){
      return  (
        <div>
          <Header header = {title.header}/>

          {customers.map(c => {
            return <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} age={c.age} />
          })}
      
          <Footer footer= {title.footer} />
        </div>

      );
  }
}


export default App;