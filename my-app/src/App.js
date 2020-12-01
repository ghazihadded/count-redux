
import './App.css';
import {Provider} from 'react-redux'
import MyStore from './MyStore'
import Count from './Count'





function App() {
  return (
    
    <div className="App">
      <Provider store={MyStore}>
     <Count />
     </Provider>
    </div>
    
  );
}

export default App;
