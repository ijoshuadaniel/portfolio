import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route , Switch } from 'react-router-dom';
import Mainpage from './pages/mainpage/mainpage';
import Resume from './pages/resume/resume';
import Header from './components/header/header';
import NotFound from './pages/notfound/notfound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route exact path="/" component={Mainpage}/>
        <Route exact path="/resume" component={Resume}/>
        <Route component={NotFound}/>
      </Switch>
      <Header/>
    </BrowserRouter>
  );
}

export default App;
