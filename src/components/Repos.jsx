import RepoList from "./RepoList";
import './Repos.css'
export default function Repos({repos,page,setPage,hasMore}){
    console.log(repos);
    function handlePrev(){
        setPage(prev=> prev-1);
    }
    function handleNext(){
        setPage(prev=> prev+1);
    }
    return(
        <div className="repos">
            <h1>Repos</h1>
            <RepoList repos={repos} />
            <div>
                <button onClick={handlePrev} disabled={page === 1}>Prev</button>
                <button>{page}</button>
                <button onClick={handleNext} disabled={hasMore}>Next</button>
            </div>
        </div>
    )
}