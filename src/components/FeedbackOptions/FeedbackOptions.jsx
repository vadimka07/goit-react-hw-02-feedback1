import { Btn } from "./FeedbackOptions.styled";
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