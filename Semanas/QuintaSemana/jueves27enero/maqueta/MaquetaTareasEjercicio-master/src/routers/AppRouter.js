import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import {Container} from '../container/Container';

export const AppRouter = () => {
  return   <div>
  <Router>
      <Navbar />
      <Routes>
          <Route exact path="/" element={<Container/>} />
      </Routes>
  </Router>
</div>;
};
