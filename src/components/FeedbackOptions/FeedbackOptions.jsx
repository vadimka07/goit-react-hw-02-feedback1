import { Btn } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map((item) => {
        return (
          <Btn key={item} onClick={onLeaveFeedback}>
            {item}
          </Btn>
        );
      })}
    </>
  );
};
export default FeedbackOptions;
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};
