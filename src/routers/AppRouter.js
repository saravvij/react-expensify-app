import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateExpense from '../components/CreateExpense';
import EditExpense  from '../components/EditExpense';
import Help from '../components/Help';
import NotFound from '../components/NotFound'
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';

const AppRouter = () => (
    <Router>
        <div>
            <Header></Header>
            <Switch>
                <Route exact path="/" component={Dashboard}></Route>
                <Route path="/create" component={CreateExpense}></Route>
                <Route path="/edit/:id" component={EditExpense}></Route>
                <Route path="/help" component={Help}></Route>
                <Route component={NotFound}></Route>
            </Switch>
        </div>
    </Router>
);

export default AppRouter;