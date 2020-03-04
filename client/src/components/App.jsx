import React    from 'react';
import {Router} from "@reach/router";
import Basketballs   from './Basketballs';
import Basketball    from './Basketball';
import AddBasketball from './AddBasketball';
import Headere       from './Header';
import Footere       from './Footer';
import Navrbar from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  render() {
    return (
      <div>
       <Navrbar/>
       <Headere/>
        <Router>

          <Basketballs   path='/' />
          <Basketball    path='/basketball/:basketballID' />
          <AddBasketball path='/add-basketball/' />
          
        </Router>
        <Footere/>
      </div>
    );
  }

}

export default App;
