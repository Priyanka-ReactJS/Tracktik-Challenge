import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import store from './Redux/data/store';
import DataContainer from './Container/dataContainer';
import Home from './Container/HomeContainer/home';

function App() {
  return (
    <div className="App">
    <Provider store={store}>
    <div className="App">
     <DataContainer/>
     <Home/>
    </div>
    </Provider>
      
    </div>
  );
}

export default App;
