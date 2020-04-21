import React from 'react';
import { Switch, Route } from "react-router-dom";
import HomePage from './Pages/HomePage';
import SearchPage from './Pages/SearchPage';
import TasksPage from './Pages/TasksPage';
import RushPage from './Pages/RushPage';
import PlanPage from './Pages/PlanPage';
import SupplierPage from './Pages/SupplierPage';
import AnalyticsPage from './Pages/AnalyticsPage';
import IncomingPage from './Pages/IncomingPage';

function Main() {
    return(
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/SearchPage">
            <SearchPage />
          </Route>
          <Route path="/TasksPage">
            <TasksPage />
          </Route>
          <Route path="/RushPage">
            <RushPage />
          </Route>
          <Route path="/PlanPage">
            <PlanPage />
          </Route>
          <Route path="/SupplierPage">
            <SupplierPage />
          </Route>
          <Route path="/AnalyticsPage">
            <AnalyticsPage />
          </Route>
          <Route path="/IncomingPage">
            <IncomingPage />
          </Route>
        </Switch>
    );
    //return(<IncomingPage />);
}

export default Main;