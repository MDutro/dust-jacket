import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import SearchResults from "./views/SearchResults";
import Book from "./views/Book";
import UserBooks from "./views/UserBooks";
import NewBook from "./views/NewBook/NewBook";
import API from "./api/api";
import "./sass/App.scss";

const App = () => {
  const [serverMessage, setServerMessage] = useState("");

  useEffect(() => {
    API.get()
      .then((response) => setServerMessage(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <div className="nav-bar-placeholder"></div>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Home {...props} serverMessage={serverMessage} />}
        />
        <Route
          path="/results"
          render={(props) => <SearchResults {...props} />}
        />
        <Route path="/book" render={(props) => <Book {...props} />} />
        <Route path="/my-books" render={(props) => <UserBooks {...props} />} />
        <Route path="/new-book" render={(props) => <NewBook {...props} />} />
      </Switch>
    </div>
  );
};

export default App;
