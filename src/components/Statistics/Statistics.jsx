import { StatisticsList } from "./Statistics.styled";
import PropTypes from "prop-types";

const Statistics = ( { good, neutral, bad, positivePercentage, total } ) => {

    return (
        <StatisticsList>
            <li>good: { good }</li>
            <li>neutral: { neutral }</li>
            <li>bad: { bad }</li>
            <li>positivePercentage: { positivePercentage }</li>
            <li>total: { total }</li>
        </StatisticsList>
    );
}
export default Statistics;

Statistics.propTypes = {
    good:PropTypes.number,
    neutral:PropTypes.number,
    bad:PropTypes.number,
    positivePercentage:PropTypes.string,
    total:PropTypes.number
}