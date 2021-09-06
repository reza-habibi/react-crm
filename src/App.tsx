import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { AddTicketPage } from "./pages/AddTicketPage";
import { DashboardPage } from "./pages/Dashboard/DashboardPage";
import { Entry } from "./pages/Entry";
import { TicketListPage } from "./pages/TicketList/TicketListPage";
import { TicketPage } from "./pages/TicketPage";

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
          <Entry />
        <Switch>
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
