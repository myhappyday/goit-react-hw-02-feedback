import React from 'react';
import PropTypes from 'prop-types';
import { WrapperStats, FeedbackStats, DataStats } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total = 0, positivePercentage }) => {
  return (
    <WrapperStats>
      <FeedbackStats>
        Good:
        <DataStats>{good}</DataStats>
      </FeedbackStats>
      <FeedbackStats>
        Neutral:
        <DataStats>{neutral}</DataStats>
      </FeedbackStats>
      <FeedbackStats>
        Bad:
        <DataStats>{bad}</DataStats>
      </FeedbackStats>
      <FeedbackStats>
        Total:
        <DataStats>{total}</DataStats>
      </FeedbackStats>
      <FeedbackStats>
        Positive feedback:
        <DataStats>{positivePercentage}%</DataStats>
      </FeedbackStats>
    </WrapperStats>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

export default Statistics;
