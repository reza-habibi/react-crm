import React from "react";
import { BrowserRouter as Router, Switch ,Route} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { AddTicketPage } from "./pages/AddTicket/AddTicketPage";
import { DashboardPage } from "./pages/Dashboard/DashboardPage";
import { Entry } from "./pages/Entry";
import { TicketListPage } from "./pages/TicketList/TicketListPage";
import { TicketPage } from "./pages/Ticket/TicketPage";
import { RegisterFormComponent } from "./components/RegisterForm/RegisterFormComponent";

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
          <Entry />
        <Switch>
          <Route path="/register" component={RegisterFormComponent} />
          <PrivateRoute path="/dashboard" exact>
            <DashboardPage />
          </PrivateRoute>
          <PrivateRoute exact path="/add-ticket">
            <AddTicketPage />
          </PrivateRoute>
          <PrivateRoute exact path="/tickets">
            <TicketListPage />
          </PrivateRoute>
          <PrivateRoute exact path="/ticket/:tid">
            <TicketPage />
          </PrivateRoute>
        </Switch>
      </Router>
    </>
  );
}

export default App;
