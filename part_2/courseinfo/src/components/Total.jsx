const Total = ({course}) => {
    const sumExercises = course.parts.map(part => part.exercises).reduce((total, num) => total + num, 0)

    return (
        <p>total of {sumExercises} exercises</p>
    )
}

export default Total