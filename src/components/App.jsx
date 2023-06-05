import React, { Component } from 'react';

import Container from './App.styled';
import Section from './Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = event => {
    const { name } = event.target;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
    // console.log('state:', this.state);
    setTimeout(() => {
      console.log('state 1:', this.state);
    }, 1000);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    // console.log(options);
    return (
      <Container>
        <Section title="Please, leave feedback"></Section>
        <div
          style={{
            display: 'flex',
            gap: '15px',
          }}
        >
          {options.map(option => (
            <button
              key={option}
              type="button"
              name={option}
              onClick={this.onLeaveFeedback}
              style={{
                width: '80px',
                padding: '5px',
                textTransform: 'capitalize',
                cursor: 'pointer',
              }}
            >
              {option}
            </button>
          ))}
        </div>
        <Section title="Statistics"></Section>
        <div>
          <p style={{ marginBottom: '5px', fontSize: '20px' }}>
            Good:
            <span style={{ marginLeft: '10px' }}>{good}</span>
          </p>
          <p style={{ marginBottom: '5px', fontSize: '20px' }}>
            Neutral:
            <span style={{ marginLeft: '10px' }}>{neutral}</span>
          </p>
          <p style={{ marginBottom: '5px', fontSize: '20px' }}>
            Bad:
            <span style={{ marginLeft: '10px' }}>{bad}</span>
          </p>
        </div>
      </Container>
    );
  }
}

export default App;
