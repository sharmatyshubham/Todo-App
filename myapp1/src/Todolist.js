import React, { useState } from 'react';

const Todolist = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Wake up at 6 am', isEditing: false },
    { id: 2, text: 'Go running and exercise at 6:30 am', isEditing: false },
    { id: 3, text: 'Start ready for office at 7:30 am', isEditing: false },
    { id: 4, text: 'Arrive office at 9 am', isEditing: false },
    { id: 5, text: 'Relieve from office at 6 pm', isEditing: false },
    { id: 6, text: 'Arrive home at 6:45 pm', isEditing: false },
    { id: 7, text: 'Start the pending work of office at 8 pm', isEditing: false },
    { id: 8, text: 'Talk with family at 10:30 pm', isEditing: false },
    { id: 9, text: 'Complete my dinner at 11 pm', isEditing: false },
    { id: 10, text: 'Go to bed at 11:45 pm', isEditing: false },
  ]);

  const [newTask, setNewTask] = useState('');

  const handleAdd = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: tasks.length + 1, text: newTask, isEditing: false }]);
      setNewTask('');
    }
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleEditChange = (id, newText) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, text: newText } : task)));
  };

  const handleToggleEdit = (id) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, isEditing: !task.isEditing } : task)));
  };

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      flexDirection: 'column' 
    }}>
      <div style={{ 
        background: 'linear-gradient(145deg, #398235, #306d2b)',
        padding: '20px', 
        borderRadius: '10px', 
        boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.5), -10px -10px 20px rgba(255, 255, 255, 0.5)', 
        border: '2px solid rgba(255, 255, 255, 0.1)',
        color: 'white',
        width: '530px',
        height: '530px',
        overflowY: 'auto', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', 
        position: 'relative'
      }}>
        <h1>Todo List</h1>
        <ul style={{ 
          listStyleType: 'none', 
          padding: '0', 
          textAlign: 'center', 
          width: '100%', 
          marginBottom: '80px'
        }}>
          {tasks.map(task => (
            <li key={task.id} style={{ 
              margin: '10px 0', 
              padding: '10px', 
              borderRadius: '10px', 
              background: 'white',
              color: '#333',
              boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.3), -5px -5px 10px rgba(255, 255, 255, 0.5)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              width: '80%'
            }}>
              {task.isEditing ? (
                <input 
                  type="text"
                  value={task.text}
                  onChange={(e) => handleEditChange(task.id, e.target.value)}
                  style={{ 
                    padding: '5px', 
                    marginRight: '10px', 
                    borderRadius: '5px', 
                    border: '1px solid #ccc',
                    boxShadow: 'inset 2px 2px 5px rgba(0, 0, 0, 0.3)',
                    fontSize: '1em' 
                  }}
                />
              ) : (
                task.text
              )}
              <button onClick={() => handleToggleEdit(task.id)} style={{ 
                marginLeft: '10px', 
                padding: '10px 20px', 
                borderRadius: '5px', 
                border: 'none', 
                background: '#0073e6', 
                color: 'white', 
                cursor: 'pointer', 
                boxShadow: '3px 3px 8px rgba(0, 0, 0, 0.3)',
                fontSize: '1em' 
              }}>
                {task.isEditing ? 'Save' : 'Edit'}
              </button>
              <button onClick={() => handleDelete(task.id)} style={{ 
                marginLeft: '10px', 
                padding: '10px 20px', 
                borderRadius: '5px', 
                border: 'none', 
                background: '#b30000', 
                color: 'white', 
                cursor: 'pointer', 
                boxShadow: '3px 3px 8px rgba(0, 0, 0, 0.3)',
                fontSize: '1em' 
              }}>
                Delete
              </button>
            </li>
          ))}
        </ul>
        <div style={{ 
          position: 'fixed', 
          bottom: '20px', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          width: '100%'
        }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            width: '500px', 
            fontSize: '1em' 
          }}>
            <input 
              type="text" 
              value={newTask} 
              onChange={(e) => setNewTask(e.target.value)} 
              placeholder="Add new task" 
              style={{ 
                padding: '10px', 
                marginRight: '4px', 
                borderRadius: '5px', 
                border: '1px solid #8B0000',  
                boxShadow: 'inset 2px 2px 5px rgba(0, 0, 0, 0.3)', 
                fontSize: '1em', 
                flex: '3',
                width: '70%' 
              }}
            />
            <button onClick={handleAdd} style={{ 
              padding: '10px', 
              borderRadius: '5px', 
              border: 'none', 
              background: '#333', 
              color: 'white', 
              cursor: 'pointer', 
              boxShadow: '3px 3px 8px rgba(0, 0, 0, 0.3)', 
              flex: '1', 
              fontSize: '1em', 
              width: '30%' 
            }}>
              Add Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todolist;