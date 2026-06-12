import './Profile.css'

export default function Profile({data}){
    return(
        <div className="profile-container">
            <img src={data.avatar_url} alt="Avatar" width={400} height={400}/>
            <p className="username">Username : {data.login}</p>
            <p className="name">Name: {data.name}</p>
            <p className="location"></p>
            <button className="visit-profile"><a href={data.html_url}>Visit Profile</a></button>
            <p>Followers: {data.followers}</p>
            <p>Following: {data.following}</p>
            <p>Total Repos: {data.public_repos}</p>
        </div>
    )
}