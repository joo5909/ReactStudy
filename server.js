const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    res.send(
        [{
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
         
    );
  
});


app.listen(port, () => console.log(`Listening on port ${port}`));

