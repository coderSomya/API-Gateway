const { StatusCodes } = require("http-status-codes");
const {UserRepository} = require("../repositories");
const { AppError } = require("../utils/errors/app-error");

const userRepository= new UserRepository();

async function create(data){
    try {
        const user= await userRepository.create(data);
        return user;
    } catch (error) {
        throw new AppError("cannot create a user", StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

module.exports = {
    create
}