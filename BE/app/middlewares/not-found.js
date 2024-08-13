const notFoundHandler = (req, res) => {
    res.status(404).send({
        message: 'Router does not exist',

    })
}

export default notFoundHandler;