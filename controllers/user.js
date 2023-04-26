const { getUserById, getAllUsers, addSingleUser } = require("../dto/user")

const getUsers = async () => {
    const dao = await getDao();
    const users = await dao.getAllUsers();
    return users;
};

const addUser = async (user) => {
    if (user.name && user.lastname && user.dni) {
        const addedUser = await addSingleUser(user);
        return addedUser;
    }
    throw new Error('invalid user');
};

const getUser = async (id) => {
    const user = await getUserById(id);
    return user;
};

module.exports = { getUsers, addUser, getUser }

