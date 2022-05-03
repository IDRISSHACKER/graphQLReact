import {
    ApolloClient, 
    InMemoryCache, 
    ApolloProvider, 
    HttpLink, from
} from "@apollo/client"
import {onError} from "@apollo/client/link/error"
import GetUsers from './layouts/GetUsers';
import SetUser from "./SetUser";


/*const errorLink = onError(({ graphqlErrors, networkError }) => {
    if(graphqlErrors){
        graphqlErrors.map(({message, location, path})=> {
            alert(`Graphql eror ${message}`)
        })
    }
})*/

const link = from([
    new HttpLink({uri: "http://localhost:7000/graph"})
])

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link
})

export default function Graphi(){
    return (
        <ApolloProvider client={client}>
            <SetUser />
            <GetUsers />
        </ApolloProvider>
    )
}