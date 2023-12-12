import {useContext} from 'react'
import UserContext from "../context/UserContext.js"; 
import Data from "../Data.js";
import Post from "./Post.jsx";

function Home(){
    const user = useContext(UserContext); 
    return(
        <>
          <header>
            <h1>Forum instantané</h1>
          </header>  
          <main>
            <h2>Bienvenue, {user.pseudo}</h2>
            {
                Data.mapp((e) => <Post post={e} />)
            }
          </main>
        </>
    ); 
}

export default Home