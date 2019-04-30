import React from 'react';
import Button from 'react-bootstrap/Button';

const person = (props) => {

  
 return( 
     <div className="card">
         <p>{props.desire}、{props.hosisa}食べたい</p>
         <p>{props.children}</p>
         <input type="text" onChange={props.changed} value={props.desire}/>
        
     </div>
 );
};

export default person;