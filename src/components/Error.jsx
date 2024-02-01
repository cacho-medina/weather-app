function Error({ error }) {
    return (
        <>
            <p className="text-danger fw-medium display-6 text-center">
                {error}
            </p>
        </>
    );
}

export default Error;
