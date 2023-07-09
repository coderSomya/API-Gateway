const CrudRepository = require("./crud-repository")
const {User} = require("../models")

class UserRepository extends CrudRepository{
    constructor(){
    super(user);
    }
}

module.exports = CrudRepository;