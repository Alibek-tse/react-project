import React, { Fragment, useContext } from "react";
import { Card } from "../components/Card";
import { Search } from "../components/Search";
import { GithubContext } from "../context/github/githubContext";

export const Home = () => {
  const {loading, users} = useContext(GithubContext)
  
  return (
    <Fragment>
      <Search></Search>

      <div className="row">

        {loading
          ? <p className="text-center">Загрузка...</p>
          : users.map(user => {
            return (
              <div className="col-sm-4 mb-4" key={user.id}>
              <Card user={user}></Card>
            </div>
            )
          })
        }


        {/* <div className="col-sm-4 mb-4">
          <Card></Card>
        </div>

        <div className="col-sm-4 mb-4">
          <Card></Card>
        </div>

        <div className="col-sm-4 mb-4">
          <Card></Card>
        </div>  */}
      </div>
    </Fragment>
  );
};
