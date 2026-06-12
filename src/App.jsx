import { useState } from "react";
import useFetch from "./hooks/useFetch";
import './App.css'
import Profile from "./components/Profile";
import Repos from "./components/Repos";
function App() {
  const [username, setUsername] = useState('');
  const [input, setInput] = useState('');
  const [page, setPage] = useState(1);
  
  const { data, loading, error } = useFetch(username ? `https://api.github.com/users/${username}` : null);
  const { data: repos } = useFetch(username ? `https://api.github.com/users/${username}/repos?per_page=6&page=${page}&sort=stars` : null);
  const hasMore = page * 6 < (data?.total_repos || 0);

  function handleOnChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit() {
    if (!input.trim()) {
      return;
    }
    setUsername(input);
    setPage(1);
  }

  return (
    <div className="container">
      <h1>GITHUB USER FETCH</h1>
      <div className="input-section">
        <input type="text" name="" id="" onChange={handleOnChange} />
        <button onClick={handleSubmit}>Search</button>
      </div>

      <div className="results-section">
        {loading && <h1>Loading...</h1>}
        {error && <p>{error.message}</p>}
        {data &&<Profile data={data} />}
        {repos && 
          <Repos repos={repos} page={page} setPage={setPage} hasMore={hasMore}/>
        }
      </div>
    </div>
  )
}

export default App;