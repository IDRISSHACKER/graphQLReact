import { toast } from 'react-toastify';
import Button from "./Button"
import "./User.scss"

export default function User(infos: any){
    const showNotify = ()=>toast.success(`Started followed ${infos.infos.lastName} ${infos.infos.firstName}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    async function notifyPromise(){
         await toast.promise(new Promise((resolve, reject)=>{
             const timer = setTimeout(() => {
                 clearTimeout(timer)
                 if(infos.infos.firstName === "Wynn"){
                     reject(false)
                 }
                 resolve(true)
             }, 3000);
         }), {pending: "Execution de votre requête en cour...", error:`Abonnement à  ${infos.infos.lastName} refusé`, success: `Abonnement à  ${infos.infos.lastName} reusis`})
    }

    const notify = (e:any)=>{
        e.preventDefault()
        notifyPromise()
            
    }
    return (
        <div className="user">
            <ul>
                <li>{infos.infos.firstName}</li>
                <li>{infos.infos.email}</li>
            </ul>
            <Button content="follow his" onclick={notify} />
        </div>
    )
}