import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import UserContainer from './components/UserContainer';
import store from './redux/store';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer/>
        {/* <ItemContainer cake/>
        <ItemContainer/>
        <HooksCakeContainer/>
        <CakeContainer/>
        <IceCreamContainer/>
        <NewCakeContainer/>
        <NewIceCreamContainer/> */}
      </div>
    </Provider>
  );
}

export default App;
