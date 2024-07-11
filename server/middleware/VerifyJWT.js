import jwt from "jsonwebtoken";
import { User } from "../models/User.model.js";

export const VerifyJWT = async (req, res, next) => {
  try {
    const token = req.cookies?.access_token;

    if (!token) {
      res.status(401).send("Unauthorized Request");
    }
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);

    const user = await User.findOne(decodedToken._id).select("-password");

    if (!user) {
      res.status(400).send("Invalid Access Token");
    }

    req.user = user;
    next();
  } catch (error) {
    res
      .status(error?.status || 500)
      .send(
        error?.message || "Something went Wrong while verifying Access Token"
      );
  }
};
