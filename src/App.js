import React, { Component } from 'react';
import Person from './Perosn/Person';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './App.css';
import { tsThisType } from '@babel/types';
import { doesNotReject } from 'assert';

class App extends Component {
  state={
    desire: [
        {name:'叙々苑の焼肉', hosisa:'かなり'},
        {name:'千疋屋のメロン', hosisa:'とても'},
        {name:'天丼てんや', hosisa:'いつも'},
    ],
    otherState: 'Hatarakitakunai',
    showDesire: false
} 
   desireHandler = (newName) =>{
     console.log('yakiniku tabetai');
     this.setState({  
       desire: [
                 {name: newName, hosisa:'すごく'},
                 {name:'回らない寿司', hosisa:'ずっと'},
                 {name:'五兆円', hosisa:'いつも'},
               ]
                  });
   };
  
   desireChangeHandler = (event) =>{
         this.setState({
          desire: [
            {name: event.target.value, hosisa:'かなり'},
            {name: event.target.value, hosisa:'とても'},
            {name: event.target.value, hosisa:'いつも'},
        ]
         })
   };

   toggleDesireHandler =() =>{
       const doesShow = this.state.showDesire;
       this.setState({showDesire: !doesShow});

   }

  render() {
    
    let desires = null;
    if(this.state.showDesire){
        desires =(
          <div>
        　　　　{this.state.desire.map(desire =>{
                 return <Person 
                          desire={desire.name}
                          hosisa={desire.hosisa}
                          changed = {this.desireChangeHandler}
                       />
        })}
        </div>
        )
    
    }

    return (
      <div className="App">
          <h1>Yakiniku Tabetai</h1>
           <p>This is really working!</p>
           <p>In contrast, I won't work.</p>
            <Container>
              <Col className="justify-content-md-center">
              <Button 
                    onClick={this.toggleDesireHandler}>desire</Button>
                   {desires}
              </Col>
          </Container>
      </div>
    );
  }
}

export default App;
