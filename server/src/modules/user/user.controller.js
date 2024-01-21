const userService = require("./user.service");

const getUsers = async (req, res) => {
    // 200 = OK
    res.status(200).json(await userService.getUsers(req.query));
}

const addUser = async (req, res) => {
    let user;
    try {
        user = await userService.addUser(req.body);
        // 201 = CREATED
        res.status(201).json({
            "message": "successfully added user",
            "new_user": user
        });
    } catch (error) {
        res.status(400).json({
            "message": "user already exists"
        });
    }
}

module.exports = {
    getUsers,
    addUser
}