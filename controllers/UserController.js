import user from "../data/User.js";

const login = (req,res)=>{
    res.status(200).json({"message":"Login"});
};

export default {login};