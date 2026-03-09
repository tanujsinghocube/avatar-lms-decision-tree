import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Import your components for the different routes
import Dashboard from './Dashboard';
import TrainingModules from './TrainingModules';
import DecisionTree from './DecisionTree';
import Assessments from './Assessments';
import AdminPanel from './AdminPanel';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Dashboard} />
        <Route path='/training-modules' component={TrainingModules} />
        <Route path='/decision-tree' component={DecisionTree} />
        <Route path='/assessments' component={Assessments} />
        <Route path='/admin-panel' component={AdminPanel} />
      </Switch>
    </Router>
  );
};

export default App;