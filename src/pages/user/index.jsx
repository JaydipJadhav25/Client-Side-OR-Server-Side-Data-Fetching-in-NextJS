import { useEffect , useState } from "react";
import Link from "next/link";
import useSWR from "swr"

const fetcher = (...ages) =>fetch(...ages).then(res => res.json());

const IndexPage = () =>{
    // const[users , setUser]= useState(null);

    // useEffect(()=>{
    //    async function data(){
    //     const users = await fetch("https://jsonplaceholder.typicode.com/users")
    //     const result = await users.json();
    //        setUser(result);
    //        console.log("users : " , result)
    //    }
    //    data();
    // },[])

    // case : 2

    const { data , error} = useSWR("https://jsonplaceholder.typicode.com/users" , fetcher);

    if(!data) return <h1>Loading........</h1>
    // console.log(users.user)
    return(
        <div>
        <h1>Users</h1>
            {
                data && data.map((ele) => <Link href={`/user/${ele.id}`} key={ele.id}><li>{ele.name}</li></Link>)
            }
     
        </div>
    )
}

export default IndexPage;