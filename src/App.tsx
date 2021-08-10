import './App.css';
import RegistryPage from './pages/RegistryPage';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import LoginPage from './pages/LoginPage';
import HomePage from './pages/service_provider/HomePage';
import MainTabLayout from './components/Layout/MainTabLayout';
import ServicesPage from './pages/service_provider/ServicesPage';
import StatisticsPage from './pages/service_provider/StatisticsPage';
import ChatsOverviewPage from './pages/service_provider/ChatsOverviewPage';

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
      <Route exact path="/home">
        <MainTabLayout>
          <HomePage />
        </MainTabLayout>
      </Route>
      <Route exact path="/services">
        <MainTabLayout>
          <ServicesPage />
        </MainTabLayout>
      </Route>
      <Route exact path="/statistics">
        <MainTabLayout>
          <StatisticsPage />
        </MainTabLayout>
      </Route>
      <Route exact path="/chats">
        <MainTabLayout>
          <ChatsOverviewPage />
        </MainTabLayout>
      </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
