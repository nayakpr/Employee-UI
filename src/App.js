// import logo from './logo.svg';
import "./App.css";
import EmployeeListComponent from "./components/EmployeeListComponent";
import CreateEmployee from "./components/CreateEmployee";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import ViewEmployee from "./components/ViewEmployee";

function App() {
  return (
    <div>
      <Router>
       
          <Header />
          <div className="container">
            <Switch>
              <Route path="/" exact component={EmployeeListComponent}></Route>
              <Route path="/employees" component={EmployeeListComponent}></Route>
              <Route path="/addEmployee/:id" component={CreateEmployee}></Route>
              <Route path="/viewEmployee/:id" component={ViewEmployee}></Route>
            </Switch>
          </div>
          <Footer />
       
      </Router>
    </div>
  );
}

export default App;
