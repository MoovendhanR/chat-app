import User from "../models/user.model.js";


export const getUsersForSidebar=async(req,res)=>{
    try {
        const loggedInUserId = req.user._id
        const fillteredUsers = await User.find({_id:{$ne:loggedInUserId}}).select("-password")//we don't want to see ourself 
        res.status(200).json(fillteredUsers)
    } catch (error) {
        console.log("error on getUserSidebar controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}