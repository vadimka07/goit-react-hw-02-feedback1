import { Component } from "react";
import FeedbackOptions from "../FeedbackOptions";
import Statistics from "../Statistics";
import Notification from "../Notification";

class Feedback extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            good: 0,
            neutral: 0,
            bad: 0
        }
    }

    countTotalFeedback = () => {
        return Object.values( this.state ).reduce( ( total, value ) => {
            return total + value;
        }, 0 );
    }

    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        return ( good * 100 / this.countTotalFeedback() ).toFixed( 0 ) + '%';
    }

    handleClick = ( e ) => {
        const event = e.target.textContent;
        this.setState( prevState => ( {
            [event]: prevState[event] + 1
        } ) )

    }

    render() {
        const { good, neutral, bad } = this.state;
        return (
            <>
                <FeedbackOptions options={ this.state } onLeaveFeedback={ this.handleClick }/>
                {
                    this.countTotalFeedback() ?
                        <Statistics good={ good } neutral={ neutral } bad={ bad } total={ this.countTotalFeedback() }
                                    positivePercentage={ this.countPositiveFeedbackPercentage() }/> :
                        <Notification message="There is no feedback"/>
                }

            </>
        )
    }

}

export default Feedback;

