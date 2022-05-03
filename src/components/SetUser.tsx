import { toast } from 'react-toastify';
import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { CREATE_USER_MUTATION } from './../GraphQL/Mutation';
export default function SetUser(props: any){
    const [createUser, {error}] = useMutation(CREATE_USER_MUTATION)

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [adding, setAdding] = useState(false)

    const handleSubmit = (e:any)=>{
        e.preventDefault()
        
        if(firstName.length > 2 && lastName.length > 2 && email.length > 2 && password.length > 3){
            setAdding(true)
            createUser({
                variables: {
                    firstName,
                    lastName,
                    email,
                    password
                }
            })
            
        }else{
           notifyPromiseErr() 
        }

        if(error){
            notifyPromiseErr()
        }else{
            notifyPromise()
        }
    }

    async function notifyPromise(){
        await toast.promise(new Promise((resolve, reject)=>{
            const timer = setTimeout(() => {
                clearTimeout(timer)
                if(error){
                    reject(error)
                }
                setFirstName("")
                setLastName("")
                setEmail("")
                setPassword("")
                setAdding(false)
                resolve(true)
            }, 3000);
        }), {pending: "Ajour de l'utilisateur en cour...", error:`Une erreur est suvenue lors de l'ajout`, success: `utilisateur ajouté avec success`})
    }

    async function notifyPromiseErr(){
        await toast.promise(new Promise((resolve, reject)=>{
            const timer = setTimeout(() => {
                clearTimeout(timer)
                    reject(false)
            }, 3000);
        }), {pending: "Ajour de l'utilisateur en cour...", error:`Verifiez si tout les champs sont corrects ou votre connexion internet`, success: `utilisateur ajouté avec success`})
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>
                    <input type="text" name="" id="" placeholder="name" value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
                </p>
                <p>
                    <input type="text" name="" id="" placeholder="surname" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
                </p>
                 <p>
                    <input type="text" name="" id="" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </p>
                 <p>
                    <input type="text" name="" id="" placeholder="passwort" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </p>
                <p>
                   {!adding ? <input type="submit" name="" id="" value="ajouter l'utlisateur"/> : "ajout en cours..." }
                </p>
            </form>
        </div>
    )
}