import { useState  , useEffect} from "react";
import { useRouter } from "next/router";

const UserPage = ()=>{
    const[user , setUser] = useState();

const router = useRouter();
console.log("query: ", router)

  useEffect(() =>{
    const id = router.query.id;
    async function userData(id){
        const user = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const result = await user.json();
        console.log("user data: " , result)
        setUser(result);
    }
    userData(id);
  },[router.query.id]);

  console.log("users : " , user);

  if(!user) return <h1>Loading............</h1>
  
    return(
        <div>
        <h1>{user &&  JSON.stringify(user)}</h1>
         
         <button onClick={e => router.replace("/") }>Home</button>
     
        </div>
    )

}
export default UserPage;