import React from 'react';
import { Switch, Route } from "react-router-dom";
import HomePage from './Pages/HomePage';
import SearchPage from './Pages/SearchPage';
import TasksPage from './Pages/TasksPage';
import RushPage from './Pages/RushPage';
import PlanPage from './Pages/PlanPage';
import SupplierPage from './Pages/SupplierPage';
import AnalyticsPage from './Pages/AnalyticsPage';

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
        </Switch>
    );
}

export default Main;