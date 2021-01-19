import React, {Component} from 'react';
//import axios from 'axios';
import Students from './components/students';
    class App extends Component {
      //creating a state
      state = {
        students: []
      }
      //calling the api
      
      componentDidMount() {
        fetch('http://localhost:44338/api/Api')
        .then(res => res.json())
        .then((data) => {
          this.setState({ students: data })
        })
        .catch(console.log)
      }   
   
      render () {
        return (
          <Students students={this.state.students} />
        );
      }
    }
    

    export default App;