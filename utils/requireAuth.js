import Router from "next/router";
import auth from "./auth";

export default async function requireAuth(redirectUrl = "/login") {
    let data= auth();

    if (data.isAuth === false) {
        return await Router.push(redirectUrl);
    } else {
        let {user, isAuth} = await auth().fetchUser();

        if (!isAuth) {
            return await Router.push(redirectUrl);
        }

        return {user, isAuth};
    }
}