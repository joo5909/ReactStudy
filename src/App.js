import React from 'react';
import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
  width: "100%",
  marginTop: theme.spacing.unit * 3,
  overflowX: "auto"
  },
  table: {
  minWidth: 1080
  }
  });
  
  

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

class App extends React.Component {

  render(){
    const { classes } = this.props;

      return  (
        <div>      
          <Paper className={classes.root}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>번호</TableCell>
                  <TableCell>이미지</TableCell>
                  <TableCell>이름</TableCell>
                  <TableCell>생년월일</TableCell>
                  <TableCell>성별</TableCell>
                  <TableCell>나이</TableCell>
                  <TableCell>직업</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {customers.map(c => {
                  return <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} age={c.age} />
                })}
              </TableBody>
            </Table>                
          </Paper>         
        </div>

      );
  }
}


export default withStyles(styles)(App);