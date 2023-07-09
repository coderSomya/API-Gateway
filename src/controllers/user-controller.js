const { response } = require('express')
const { UserService} = require('../services')
const {StatusCodes} = require('http-status-codes')
const {ErrorResponse, SuccessResponse}= require("../utils/common")
const AppError = require('../utils/errors/app-error')
const { Sequelize } = require('../models')

async function  createUser(req, res){

    try{
        const user = await UserService.createUser({
           email: req.body.email,
           password: req.body.passwword
        })
        SuccessResponse.message= "successfully created the user";
        SuccessResponse.data= user;
        return res.status(StatusCodes.CREATED).json(
          SuccessResponse
        )
    }
    catch(error){

        if(error.statusCode==StatusCodes.BAD_REQUEST){
            ErrorResponse.error= error
            return res.status(StatusCodes.BAD_REQUEST).json(
                ErrorResponse
            )
        };
       
       
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(
           ErrorResponse
        )
    } 
}


module.exports ={
    createCity
}