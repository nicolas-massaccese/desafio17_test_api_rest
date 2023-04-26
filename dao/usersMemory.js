const users = [];

class MemoryClient {
    async connect() {
        // connect to the database
console.log('no connection needed for memory client');
}

    
    
    getAllUsers = async () => {
        return users
    };
    
    addSingleUser = async (user) => {
        users.push(user);
        return user;
    };
    
    getUserById = async (id) => {
        const user = users.find((user) => user.id === id)
        return user;
    };
}

module.exports = MemoryClient;
