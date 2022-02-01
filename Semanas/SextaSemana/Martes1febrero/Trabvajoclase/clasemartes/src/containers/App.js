import 'bootstrap/dist/css/bootstrap.min.css';
import { Padre } from '../components/ejercicio/Padre';
import CallBackHook from '../components/memorizacion/CallBackHook';
import Memorize from "../components/memorizacion/Memorize";
import MemorizeHook from '../components/memorizacion/MemorizeHook';
import Main from '../components/proyecto/Main';
import { AppRouter } from '../routers/AppRouter';

function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
