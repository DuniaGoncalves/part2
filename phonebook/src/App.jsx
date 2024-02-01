import { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [people, setPeople] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState()


  const addName = (e) => {
    e.preventDefault()
    const personObj = {
      name: newName,
      number: newNumber,
      id: people.length + 1,
    }

    setPeople(people.concat(personObj))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  //TODO alert if duplicate name and create a search imput that filters
  // const handleDuplicateName = (e) => {
  //   console.log(e.target.value);
  // }



  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          Full name: {''}
          <input 
            type="text" 
            value={newName} 
            onChange={handleNameChange} 
          />
        </div>
        <div>
          Phone number: {''}
          <input 
            type="tel" 
            value={newNumber} 
            onChange={handleNumberChange} 
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {people.map(person => 
          <Person key={person.name} person={person} />
        )}
      </div>
    </div>
  )
}

export default App