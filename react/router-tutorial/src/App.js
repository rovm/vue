import React from 'react';
import {Route} from 'react-router-dom';
import About from './About';
import Home from './Home';

const App = () => {
  return(
    // <div>
    //   <ul>
    //     <li>
    //       <Link to='/'>홈</Link>
    //     </li>
    //     <li>
    //     <Link to='/about'>소개</Link>
    //     </li>
    //   </ul>
    //   <Route path='/' component={Home} exact={true}/>
    //   <Route path='/About' component={About}/>
    // </div>
    <div>
      <Route path='/' component={Home} exact={true}/>
      <Route path={['/About', '/info']} component={About}/>
    </div>
  );
}
export default App;
