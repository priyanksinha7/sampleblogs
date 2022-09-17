import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import Search from "./pages/search/search";
import About from "./pages/about/about";
import Contact from "./pages/Contact/Contact";
import Results from "./pages/searchResults/results";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/write">{user ? <Write /> : <Register />}</Route>
        <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
        <Route path="/search">{ <Search/>}</Route>
        <Route path="/about">{ <About/>}</Route>
        <Route path="/contact">{ <Contact/>}</Route>
        <Route path="/post/:postId">
        <Route path="/results"> {<Results/>}</Route>
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
