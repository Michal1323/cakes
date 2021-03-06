import React    from 'react';
import {Router} from "@reach/router";
import Basketballs   from './Basketballs';
import Basketball    from './Basketball';
import AddBasketball from './AddBasketball';
import Allstars   from './Allstars';
import Allstar    from './Allstar';
import AddAllstar from './AddAllstar';
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
        <Router>

          <Allstars   path='/' />
          <Allstar    path='/allstar/:allstarID' />
          <AddAllstar path='/add-allstar/' />
          
        </Router>
        <Footere/>
      </div>
    );
  }

}

export default App;
