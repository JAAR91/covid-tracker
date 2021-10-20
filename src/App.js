import {
  Route, Switch,
} from 'react-router-dom';
import Details from './components/CountryDetailsPage';
import Home from './components/HomePage';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Switch>
          <Route path="/country/:id">
            <Details />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
