import './App.css';
import RegistryPage from './pages/RegistryPage';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import LoginPage from './pages/LoginPage';
import HomePage from './pages/service_provider/HomePage';

function App() {
  return (    
    <BrowserRouter>
      <Switch>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/registry">
        <RegistryPage />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
