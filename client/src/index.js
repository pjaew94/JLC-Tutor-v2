import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";

import "./index.scss";

import PrivateRoute from './PrivateRoute.jsx';

// Redux
import { Provider} from "react-redux";
import store from "./redux/store";
import { loadUser } from "./redux/actions/auth";

// Pages
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Courses from "./pages/Courses/Courses";

import { useMediaQuery } from "react-responsive";
import PomodoroPage from "./pages/Pomodoro/PomodoroPage";
import Posts from "./components/Posts/Posts";

const App = () => {



  useEffect(() => {
    // Checks if localStorage has user authenticated. Adjust redux state as required.
    store.dispatch(loadUser());
  });

  const isMobile = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  const isPhone = useMediaQuery({
    query: "(max-width: 768px)"
  })




  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <PrivateRoute exact={isPhone ? true : false} path ='/courses' component={Courses} />
          {isPhone && <PrivateRoute exact path ='/courses/:id' component={Posts} />}
          
          {isMobile && <Route exact path='/pomodoro' component={PomodoroPage} />}
        </Switch>
      </Router>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
