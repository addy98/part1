const Button = ({ name, feedback, feedbackSetter}) => {
    
    const incrementFeedback = (feedback) => {
        return () => {
            feedbackSetter(feedback+1)
        }
    } 

    return (
        <button onClick={incrementFeedback(feedback)}>{name}</button>
    )
}

export default Button