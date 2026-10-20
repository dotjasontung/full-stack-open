const Content = (props) => {
    const part1Name = props.parts[0].name
    const part2Name = props.parts[1].name 
    const part3Name = props.parts[2].name

    const part1Exercises = props.parts[0].exercises
    const part2Exercises = props.parts[1].exercises
    const part3Exercises = props.parts[2].exercises

    return (
        <main>
            <p>part1:{part1Name}, {part1Exercises}</p>
            <p>part1:{part2Name}, {part2Exercises}</p>
            <p>part1:{part3Name}, {part3Exercises}</p>
        </main>
    )
}

export default Content