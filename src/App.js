import './App.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {addUser , deleteUser, updateUsername} from './features/Users';


function App() {

  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value)
  
  const [ name , setName] = useState("");
  const [ username , setUsername] = useState("");
  const [ newUsername , setNewUsername] = useState("");

  
  return (
    <div className='App'>
    {""}
    <div className='addUser'>
      <input 
        type="text" 
        placeholder='name' 
        onChange={(event) => {setName(event.target.value)} } 
      />
      <input 
        type="text" 
        placeholder='username' 
        onChange={(event) => {setUsername(event.target.value)} } 
      />

      <button 
        onClick={() => {dispatch(addUser({id: userList[userList.length - 1].id + 1, name, username}))}} >
          Add User
      </button>
    </div>
    <div className='displayUsers'>
      {userList.map((user) => {
        return(
          <div className='users-box'>
            <h3>{user.name}</h3>  
            <h3>{user.username}</h3>
            <input 
              type="text" 
              placeholder='new username' 
              onChange={(event) => {
                setNewUsername(event.target.value);
              }} 
            />
            <button onClick={() => {dispatch(updateUsername({id: user.id ,username: newUsername}))}}>Updete username</button>
            <button 
              onClick={(e) => {
                dispatch(deleteUser({id: user.id}));
              }}
            >
              Delete user
            </button>
          </div>  
        ) 
      })}
    </div>
    </div>
  );
}

export default App;
