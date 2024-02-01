import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Error from "./Error";
import Ciudad from "./Ciudad";
import { useState } from "react";
const url = "https://api.openweathermap.org/data/2.5/weather";
const key = "8d2d139ef1069e55605d643b69323a4a";

const validar = (info) => {
    const e = {};

    if (!info.name) {
        e.name = "introduzca una CIUDAD";
    }
    if (!info.country) {
        e.country = "introduzca un PAIS";
    }
    return e;
};

function Formulario() {
    const initial = {
        name: "",
        country: "",
    };
    const [ciudad, setCiudad] = useState(initial);
    const [clima, setClima] = useState({});
    const [error, setError] = useState("");
    const [errors, setErrors] = useState(initial);

    async function getData() {
        try {
            const response = await fetch(
                `${url}?q=${ciudad.name},${ciudad.country}&units=metric&appid=${key}`
            );
            const data = await response.json();
            if (data.cod === 200) {
                setClima(data);
                console.log(data);
            } else {
                setError(`La ciudad ${ciudad.name} no fue encontrada`);
            }
        } catch (error) {
            console.error(error);
        }
    }

    function handleSearched(e) {
        e.preventDefault();
        if (!Object.keys(errors).length) {
            getData();
            setCiudad(initial);
            setError("");
        } else {
            alert(`complete los datos: ${errors.name || errors.country}`);
        }
    }

    return (
        <>
            <Form
                onSubmit={handleSearched}
                className="d-flex flex-column py-4 flex-md-row maxForm"
            >
                <Form.Control
                    type="text"
                    placeholder="Ingrese una ciudad..."
                    value={ciudad.name}
                    className="rounded-0 shadowUnset"
                    name="name"
                    onChange={(e) => {
                        setErrors(
                            validar({
                                ...ciudad,
                                [e.target.name]: e.target.value,
                            })
                        );
                        setCiudad({
                            ...ciudad,
                            [e.target.name]: e.target.value,
                        });
                    }}
                ></Form.Control>
                <Form.Control
                    type="text"
                    placeholder="Ingrese un pais..."
                    className="rounded-0 shadowUnset"
                    name="country"
                    value={ciudad.country}
                    onChange={(e) => {
                        setErrors(
                            validar({
                                ...ciudad,
                                [e.target.name]: e.target.value,
                            })
                        );
                        setCiudad({
                            ...ciudad,
                            [e.target.name]: e.target.value,
                        });
                    }}
                ></Form.Control>
                <Button
                    type="submit"
                    className="rounded-0"
                    disabled={!ciudad.name}
                >
                    Buscar
                </Button>
            </Form>
            <Ciudad clima={clima} errorMsg={error} />
        </>
    );
}

export default Formulario;
