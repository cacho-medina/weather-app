import "./App.css";
import Container from "react-bootstrap/Container";
import Formulario from "./components/Formulario";
import { TiWeatherPartlySunny } from "react-icons/ti";

function App() {
    return (
        <Container
            fluid
            className="bg-dark text-light min-vh-100 px-md-5 central"
        >
            <h1 className="text-center display-2">
                <TiWeatherPartlySunny />
                Web de clima
            </h1>
            <Formulario />
        </Container>
    );
}

export default App;
