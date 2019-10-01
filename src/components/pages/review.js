import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Review = (props) => {
    const { name, gender, age } = props;
    const [state, setState] = React.useState( {
        name: '',
        gender: '',
        age: '',
      }); 
      
      React.useEffect(() => {
        const { steps } = props;
        const { name, gender, age } = steps;
    
        setState({ name, gender, age });
      })

  return (
    <div style={{ width: '100%' }}>
    <h3>Summary</h3>
    <table>
      <tbody>
        <tr>
          <td>Name</td>
          <td>{state.name.value}</td>
        </tr>
        <tr>
          <td>Gender</td>
          <td>{state.gender.value}</td>
        </tr>
        <tr>
          <td>Age</td>
          <td>{state.age.value}</td>
        </tr>
      </tbody>
    </table>
  </div>
  );
};

export default Review;


