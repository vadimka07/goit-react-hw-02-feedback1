import { Btn } from "./FeedbackOptions.styled";
import PropTypes from "prop-types";
const FeedbackOptions = ( { options, onLeaveFeedback } ) => {
    return (
        <>
            {
                Object.keys( options ).map( ( item ) => {
                    return (
                        <Btn key={ item } onClick={ onLeaveFeedback }>{ item }</Btn>
                    )
                } )
            }
        </>
    );
};


export default FeedbackOptions;

FeedbackOptions.propTypes = {
    options: PropTypes.object,
    onLeaveFeedback: PropTypes.func
}