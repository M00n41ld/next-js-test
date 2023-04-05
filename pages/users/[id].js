import { useRouter } from "next/router"
import styles from '../../styles/user.module.scss'
import Head from "next/head";
import MainContainer from "../components/MainContainer";

export default function ({user}) {
    const {query} = useRouter();

    return (
        <MainContainer keywords={user.name}> 
        <div className={styles.user}>
            <h1>Пользователь c id {query.id}</h1>
            <div>Имя пользователя - {user.name}</div>
        </div>
        </MainContainer>
    )
}

export async function getServerSideProps({params}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await response.json()
    console.log(params)
    return {
        props: {user},
    }
}