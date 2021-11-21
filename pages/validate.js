import auth from "../utils/auth";
import {useRouter} from "next/router";
import {useEffect} from "react";


export default function validate() {
    const router = useRouter()
    useEffect(() => {
        auth().setToken(router.query.token)
    })

    return <>Validating.....</> //TODO Loading screen maybe
}