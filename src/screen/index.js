import React from "react";
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router
} from "react-router-dom";
import Header from '../components/molecule/Header/'
import Researches from "@screen/researches/";
import About from "@screen/about/";
import News from "@screen/news/";
import Registration from "@screen/registration/";
import Feedback from "@screen/feedback";
import Team from "@screen/team";

export default function Screen() {

  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path={"/"} component={Registration} />
          <Route path={"/about"} component={About} />
          <Route path={"/researches"} component={Researches} />
          <Route path={"/feedback"} component={Feedback} />
          <Route path={"/team"} component={Team} />
          <Route path={"/news"} component={News} />
           {/*<Route path={"/about"} component={About} />
          <Route path={"/contact us"} component={ContactUs} /> */}
          <Redirect to={"/"} />
        </Switch>
        
      </div>
    </Router>
  );
}
