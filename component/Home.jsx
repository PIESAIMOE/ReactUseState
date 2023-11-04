import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import './style.css';

const getLocalItems = () => {
  const storedTodos = localStorage.getItem('lists');
  console.log(storedTodos);

   if(storedTodos) {
    return JSON.parse(localStorage.getItem("lists"));
   }else{
    return [];
   }
}

const Home = () => {

    const [todos, setTodos] = useState(getLocalItems());
    const [input, setInput] = useState('');
    const [search, setSearch] = useState('');


    useEffect(() => {
      localStorage.setItem('lists', JSON.stringify(todos));
    }, [todos]);
  

    const addTodo = () => {

      if (input.trim() !== '') {
        setTodos([...todos, input]);
        setInput('');
      }
    };
  
    const deleteTodo = (index) => {
      const newTodos = todos.filter((_, i) => i !== index);
      setTodos(newTodos);
    };
  
    const searchTodo = (query) => {
      setSearch(query);
    };
  
    const filteredTodos = todos.filter((todo) =>
      todo.toLowerCase().includes(search.toLowerCase())
    );
  
    return (
        <div className='todo-container'>
            <div className='form_container'>
                
                <h3>Todo List</h3>

                <div className="box">
                <input
                    type="text"
                    placeholder="Search Todo"
                    value={search}
                    onChange={(e) => searchTodo(e.target.value)}
                />
                </div>

                <div className="box">
                <input
                    type="text"
                    placeholder="Add a new Todo"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button onClick={addTodo} id ="add">Add</button>
                </div>
              
                <div className="box">
                    <ul className='list'>
                        {filteredTodos.map((todo, index) => (
                        <li key={index}>
                            <p className='text'> {todo}</p>
                            <FontAwesomeIcon 
                                id="dele"
                                icon={faTrash}
                                onClick={() => deleteTodo(index)}
                            />
                        </li>
                        ))}
                </ul>
                </div>
                
            </div>
        </div>
    );
  }
export default Home;
