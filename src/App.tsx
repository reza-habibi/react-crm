import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Footer } from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { PasswordReset } from "./components/Login/PasswordReset";
import { AddTicketPage } from "./pages/AddTicketPage";
import { DashboardPage } from "./pages/DashboardPage";

import { Entry } from "./pages/Entry";
import { TicketListPage } from "./pages/TicketListPage";
import { TicketPage } from "./pages/TicketPage";

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Entry} />
          <Route path="/resetpassword" component={PasswordReset} />
          <Route path="/dashboard" exact component={DashboardPage} />
          <Route path="/add-ticket" component={AddTicketPage} />
          <Route path="/ticket-list" component={TicketListPage} />
          <Route path="/ticket" component={TicketPage} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
