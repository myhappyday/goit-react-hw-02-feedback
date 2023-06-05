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

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, value) => total + value);
  };

  countPositiveFeedbackPercentage = () => {
    return (this.state.good * 100) / this.countTotalFeedback();
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    let percentage = this.countPositiveFeedbackPercentage().toFixed(0);
    // console.log(options);

    if (isNaN(percentage)) {
      percentage = 0;
    }
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
          <p style={{ marginBottom: '5px', fontSize: '20px' }}>
            Total:
            <span style={{ marginLeft: '10px' }}>{total}</span>
          </p>
          <p style={{ marginBottom: '5px', fontSize: '20px' }}>
            Positive feedback:
            <span style={{ marginLeft: '10px' }}>{percentage}%</span>
          </p>
        </div>
      </Container>
    );
  }
}

export default App;
