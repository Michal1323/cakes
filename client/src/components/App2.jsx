import React    from 'react';
import {Router2} from "@reach/router";
import Allstars   from './Allstars';
import Allstar    from './Allstar';
import AddAllstar from './AddAllstar';
import Headere       from './Header';
import Footere       from './Footer';
import Navrbar from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

class App2 extends React.Component {

  render() {
    return (
      <div>
       <Navrbar/>
       <Headere/>
        <Router2>

          <Allstars   path='/allstars' />
          <Allstar    path='/allstar/:allstarID' />
          <AddAllstar path='/add-allstar/' />
          
        </Router2>
        <Footere/>
      </div>
    );
  }

}

export default App2;
