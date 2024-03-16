import User from "../models/user.model.js";

export const signupUser = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "passwords don't match" });
    }
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ error: "user already exist" });
    }

    //hash password here..

    // avatar placeholder
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
    const newUser = new User({
      fullName,
      username,
      password,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
      
    });
    await newUser.save();
        res.status(201).json({
            _id:newUser._id,
            fullName:newUser.fullName,
            username:newUser.username,
            profilePic:newUser.profilePic
        });
        // send({newUser:newUser})
  } catch (error) {
     console.log("error in signup controller",error.message);
     res.status(500).json({error:"Internal Server Error"})
  }
};
export const loginUser = async (req, res) => {
  try {
  } catch (err) {}
};

export const logout = (req, res) => {
  res.send("logout user");
};
