import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
// import { Counter } from "../components/Counter";
import Categorias from '../components/EjercicioPractico/Categorias';
// import Formulario from '../components/Formulario';

const DivStyle = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  padding: 50px;
`

function App() {
  return (
    <DivStyle className="App">
      {/* <Counter />
      <Formulario /> */}
      <Categorias />
    </DivStyle>
  );
}

export default App;
