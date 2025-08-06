import { useState } from "react"

const ListTask = () => {
    const [ task, setTask   ] = useState([]);
    const [ input, setInput ] = useState('');

    const addTask = () => {
        setTask([...task, input])
        setInput('');
    };

    return (
        <>
            <input value={input} onChange={e => 
                setInput(e.target.value)} />
            <button onClick={addTask}> Add </button>
            <ul>
                {task.map((task, index) => 
                <li key={index}>
                    {task}
                </li>)}    
            </ul> 
        </>
    );
}

export default ListTask;