
import { useEffect, useState } from 'react';
import './App.css';
import { client } from './client'
import Posts from './components/Posts';

function App() {
  const [articles, setArticals] = useState([]); 

  useEffect(()=>{
    client.getEntries()
    .then((response)=>{ 
      setArticals(response.items)
    })
    .catch(console.error)

  },[])

  return (
    <div className="App">
      <div className='container'>
        <header >
          <div className='wrapper'>
            <span>React and contentful</span>
          </div>
        </header>
        <main>
        <div className='wrapper'>
          <Posts articles = { articles }/>
        </div>
        </main>

      </div>
    </div>
  );
}

export default App;
