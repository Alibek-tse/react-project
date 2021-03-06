import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Profile } from "./pages/Profile";
import { Alert } from "./components/Alert";
import { AlertState } from "./context/alert/alertState";
import { GithubState } from "./context/github/githubState";

function App() {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <Navbar></Navbar>
          <div className="container pt-4">
            <Alert
              alert={{
                text: "test alert",
              }}
            ></Alert>
            <Switch>
              <Route path="/" exact component={Home}></Route>
              <Route path="/about" component={About}></Route>
              <Route path="/profile/:name" component={Profile}></Route>
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  );
}

export default App;
