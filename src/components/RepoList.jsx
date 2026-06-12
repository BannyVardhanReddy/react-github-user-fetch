import RepoCard from "./RepoCard"

export default function RepoList({repos}){
    return(
        <div className="repo-list">
            {repos?.map((repo)=>{
                return(
                    <RepoCard key={repo.id} repo={repo}/>
                )
            })}
        </div>
    )
}