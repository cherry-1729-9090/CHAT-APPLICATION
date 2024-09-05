import User from '../models/User.js';

export const addUser = async (req, res) => {
    console.log("Request reached to the server to create a new User");
    console.log("Request body:", req.body);
    try {
        const user = await User.findOne({ sub: req.body.sub });
        if (user) {
            res.status(200).json({ message: "User already exists", user });
            return;
        } else {
            const newUser = new User(req.body);
            await newUser.save();
            return res.status(201).json(newUser);
        }
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong", error });
    }
};

export const getAllUsers = async (req,res) =>{
    console.log("Request reached to the server to get all the users");
    try{
        const Users = await User.find();
        console.log("Fetched all the users successfully");
        return res.status(200).json(Users);
    }
    catch(error){
        return res.status(500).json({message : "Something went wrong", error});
    }
}


