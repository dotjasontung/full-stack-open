const Total = (props) => {
    const part1Exercises = props.parts[0].exercises
    const part2Exercises = props.parts[1].exercises
    const part3Exercises = props.parts[2].exercises

    const sum = part1Exercises + part2Exercises + part3Exercises

    return (
        <footer>Number of exercises {sum}</footer>
    ) 
}


export default Total