import { ToastContainer } from 'react-toastify';
import {useQuery, gql} from "@apollo/client"
import { useEffect, useState } from "react";
import { LOAD_USERS } from './../../GraphQL/Queries';
import User from "./User";

export default function GetUsers(){
    const {error, loading, data} = useQuery(LOAD_USERS)
    const [users, setUsers] = useState([])

    useEffect(()=>{
        if(data){
            setUsers(data.getAllUsers)
        }
    },[data])

    return (
        <div>
            {!loading && data && users.map((user: any, key: number)=>(
                <User infos={user} key={key} />
            ))}
            {loading && <p>loading...</p>}
            {error && <p>Une ereur est survenue lors de la recuperation des utilisateurs</p>}
            <ToastContainer
              position="top-left"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              />
        </div>
    )
}