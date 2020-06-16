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
import Partnership from "@screen/partnership/";
import Registration from "@screen/registration/";
import Feedback from "@screen/feedback";
import Team from "@screen/team";
import IndividualTeam from "@screen/individualteam";
import IndividualResearch from "@screen/individualresearch";
import IndividualNews from "@screen/individualnews";

export default function Screen() {

  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path={"/"} component={Registration} />
          <Route path={"/about"} component={About} />
          <Route path={"/researches/researchtitle"} component={IndividualResearch} />
          <Route path={"/researches"} component={Researches} />
          <Route path={"/feedback"} component={Feedback} />
          <Route path={"/team/juandelacruz"} component={IndividualTeam} />
          <Route path={"/team"} component={Team} />
          <Route path={"/news/newsarticle"} component={IndividualNews} />
          <Route path={"/news"} component={News} />
          <Route path={"/partnership"} component={Partnership} />
          <Redirect to={"/"} />
        </Switch>
        
      </div>
    </Router>
  );
}
