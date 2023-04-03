import auth from "../utils/auth";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Loading from "../components/Loading";

export default function validate() {
  const router = useRouter();
  useEffect(() => {
    console.log(router.query)
    auth().setToken(router.query.token);
  });

  return <Loading></Loading>; //TODO Loading screen maybe
}
