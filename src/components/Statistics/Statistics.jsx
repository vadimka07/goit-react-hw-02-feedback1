import { StatisticsList } from './Statistics.styled';
import PropTypes from 'prop-types';
const Statistics = ({ stats }) => {
  return (
    <StatisticsList>
      {stats.map((stat) => (
        <li key={stat[0]}>
          {stat[0]}: {stat[1]}
        </li>
      ))}
    </StatisticsList>
  );
};
export default Statistics;
Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  positivePercentage: PropTypes.string,
  total: PropTypes.number,
};
