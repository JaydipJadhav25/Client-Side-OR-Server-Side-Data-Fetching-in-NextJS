import { useEffect , useState } from "react";

const IndexPage = () =>{
    const[users , setUser]= useState(null);

    useEffect(()=>{
       async function data(){
        const users = await fetch("https://jsonplaceholder.typicode.com/users")
        const result = await users.json();
           setUser(result);
           console.log("users : " , result)
       }
       data();
    },[])

    if(!users) return <h1>Loading........</h1>
    console.log(users.user)
    return(
        <div>
     
            {
                users && users.map((ele) => <li key={ele.id}>{JSON.stringify(ele)}</li>)
            }
     
        </div>
    )
}

export default IndexPage;