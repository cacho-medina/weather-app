import Badge from "react-bootstrap/Badge";
import Error from "./Error";

function Ciudad({ clima, errorMsg }) {
    return (
        <div className="max bg-secondary border border-0 rounded d-flex flex-column align-items-center gap-3 py-4 px-2">
            {errorMsg ? (
                <Error error={errorMsg} />
            ) : (
                <>
                    <h2>{clima.name}</h2>
                    <p className="m-0">
                        <Badge variant="warning">{clima.sys?.country}</Badge>
                    </p>
                    <p className="fs-3">{clima.main?.temp}°C</p>
                </>
            )}
        </div>
    );
}

export default Ciudad;
