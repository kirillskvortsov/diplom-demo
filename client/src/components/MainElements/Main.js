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
import CarParkPage from './Pages/Analytics/CarParkPage';
import ClientCatalogPage from './Pages/Analytics/ClientCatalogPage';
import DemandPrognosisPage from './Pages/Analytics/DemandPrognosisPage';
import OrderPointPage from './Pages/Analytics/OrderPointPage';
import SeasonPage from './Pages/Analytics/SeasonPage';
import SpareCatalogPage from './Pages/Analytics/SpareCatalogPage';
import SupplierCatalogPage from './Pages/Analytics/SupplierCatalogPage';
import WarehousePage from './Pages/Analytics/WarehousePage';

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
          <Route path="/CarParkPage">
            <CarParkPage />
          </Route>
          <Route path="/ClientCatalogPage">
            <ClientCatalogPage />
          </Route>
          <Route path="/DemandPrognosisPage">
            <DemandPrognosisPage />
          </Route>
          <Route path="/OrderPointPage">
            <OrderPointPage />
          </Route>
          <Route path="/SeasonPage">
            <SeasonPage />
          </Route>
          <Route path="/SpareCatalogPage">
            <SpareCatalogPage />
          </Route>
          <Route path="/SupplierCatalogPage">
            <SupplierCatalogPage />
          </Route>
          <Route path="/WarehousePage">
            <WarehousePage />
          </Route>
        </Switch>
    );
    //return(<AnalyticsPage />);
}

export default Main;