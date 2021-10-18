import { useEffect } from 'react';
import {
  Route, Switch, useLocation,
} from 'react-router-dom';
import Details from './components/DetailsPage';
import Home from './components/HomePage';
import NavBar from './components/NavBar';

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
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
