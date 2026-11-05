import { useState } from "react";
import Filter from "./components/Filter";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";


const App = () => {

  const [persons, setPersons] = useState([
    {name: 'Arto Hellas', number: '040-123456', id: 1}
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchName] = useState('')


  // 表单事件处理函数，添加联系人, 如果有同名不同号码依然视为可添加
  const addPerson = (event) => {
    event.preventDefault()
  
    const updatePersons = {
      name: newName,
      number: newNumber,
      id: Math.max(...persons.map(person => person.id)) + 1
    }

    // bool
    const nameExists = persons.some(person => 
      person.name === newName
    )

    const numberExists = persons.some(person => 
      person.number === newNumber
    )

    if (nameExists && numberExists) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    setPersons(persons.concat(updatePersons))
    setNewName('')
    setNewNumber('')
    console.log(event.target)
  }
  
 
  // Filter方法
  const personToShow = persons.filter(person => person.name.toLowerCase().includes(searchName.toLowerCase())) 
 

  return (
    <div>
      <h2>Phonebook:</h2>
      <Filter searchName={searchName} setSearchName={setSearchName} />
  
      <h2>Add New:</h2>
      <PersonForm addPerson={addPerson} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber}/>
      
      <h2>Numbers:</h2>
      <Persons person={personToShow}/>
    </div>
  )
}

export default App  

