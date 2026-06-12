import useFetch from "../hooks/useFetch";

function Page({username,page}){
    return(
        <>
        <p>{username}</p>
        <p>{page}</p>
        </>
    )
}

export default Page;