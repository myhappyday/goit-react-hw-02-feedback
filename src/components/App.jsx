import React, { Component } from 'react';

import Container from './App.styled';
import Section from './Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  render() {
    // const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    console.log(options);
    return (
      <Container>
        <Section title="Please, leave feedback"></Section>
        <div>
          {options.map(option => (
            <button key={option} type="button" name={option}>
              {option}
            </button>
          ))}
        </div>
      </Container>
    );
  }
}

export default App;
