const placeHolder = (req, res) => {
    res.status(200).json({
        "message": "placeholder"
    });
}

module.exports = {
    placeHolder
}