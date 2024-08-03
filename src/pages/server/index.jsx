


const Server = (props) =>{


console.log(props)
    return(
        <div>
            <h1>User(SSR)</h1>
           {
            props.data.map((ele) => <li key={ele.id}>{ele.name}</li>)
           }
        </div>
    )

}



export const  getServerSideProps = async() =>{
    console.log(" server is ruuing");

    const data = await( await fetch("https://jsonplaceholder.typicode.com/users")).json();
    // console.log("data : " , data);
        return{
        props : {
           data
        }
    }
}

export default Server;