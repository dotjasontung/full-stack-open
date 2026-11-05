const PersonForm = ({addPerson, newName, setNewName, newNumber, setNewNumber}) => {

    const handleInputText = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }

    const handleInputNumber = (event) => {
        console.log(event.target.value)
        setNewNumber(event.target.value)
    }
    
    return (
        <form onSubmit={addPerson}>
            <div>
                name: <input value={newName} onChange={handleInputText}/>
            </div>
            <div>
                number: <input value={newNumber} onChange={handleInputNumber}/>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>    
    )
}

export default PersonForm