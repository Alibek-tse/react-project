import React,{useContext, useEffect, Fragment} from "react";
import { GithubContext } from "../context/github/githubContext";

export const Profile = ({match}) => {
  const github = useContext(GithubContext)
  const name = match.params.name 
  
  useEffect(()=>{
    // github.getUser(name)
    // github.getRepos(name)
    console.log('effect')
  },[])

  if (github.loading) {
    return <p className="text-center">Загрузка...</p>
  }
  return (
    <Fragment>
      <h1>Profile Page</h1>
    </Fragment>
  );
};
