import {useState} from 'react'; 
import  './App.css'
import Login from "/Users/giovannihuram/Desktop/forum-kadea/src/components/Login.jsx";
import Home from "/Users/giovannihuram/Desktop/forum-kadea/src/components/Home.jsx";
import UserContext from "/Users/giovannihuram/Desktop/forum-kadea/src/context/UserContext.js"; 

function App() {
  const [pseudo, setPseudo] = useState(null);
  const handleLoginSubmit = (username) =>{
    setPseudo(username); 
  }
  return (
     pseudo ?
      <UserContext.Provider value={{isLogged: true, pseudo: pseudo}}>
        <Home /> 
      </UserContext.Provider>
      : 
      <Login onLoginSubmit={handleLoginSubmit} />
  )
}

export default App
