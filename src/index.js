import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import './index.css';
import TopScreen from './screens/TopScreen';
import ArticleScreen from './screens/ArticleScreen';
import DetailScreen from './screens/DetailScreen';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
      <Switch>
        <Route path="/" exact component={ TopScreen } />
        <Route path="/article" component={ ArticleScreen } />
        <Route path="/detail" component={ DetailScreen } />
        <Route>
          <h1>Page Not Found!</h1>
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
