export default function RepoCard({ repo }) {
    return (
        <div className="repo-card">
            <p className="name">{repo.name}</p>
            <p className="description">{repo.description ? repo.description.slice(0, 70) + "..." : 'No description provided'}</p>
            <div className="repo-card-bottom">
                <p className="">{repo.language}</p>
                <button><a href={repo.html_url}>Visit Repo</a></button>
            </div>
        </div>
    )
}