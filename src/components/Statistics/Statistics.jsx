import { StatisticsList } from "./Statistics.styled";

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