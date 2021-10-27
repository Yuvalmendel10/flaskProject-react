import React, {useState} from 'react';
import './App.css';
import 'tachyons';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import OpenPage from './components/OpenPage/OpenPage';
import Navigation from './components/Navigation/Navigation';


const App = () => {

  const [route, setRoute] = useState('OpenPage');
 

  const onRouteChange =(route)=> {
    setRoute(route);
  }


  return (
    <div className="">

        <Navigation onRouteChange={onRouteChange}
                    route={route}/>

     {
        route==='signin' ?
        <SignIn onRouteChange={onRouteChange} />
        : 
        route==='signup' ?
        <SignUp onRouteChange={onRouteChange} />
        : 
        /*route==='OpenPage' ?*/
        <OpenPage onRouteChange={onRouteChange} />

     }

    </div>
  );
}

export default App;
