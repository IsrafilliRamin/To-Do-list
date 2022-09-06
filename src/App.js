import Header from './components/Header'
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer/>
     <Header/>
    </div>
  );
}

export default App;
