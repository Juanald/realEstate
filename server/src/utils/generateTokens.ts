import jwt from "jsonwebtoken";

// We take a string userID and use it to generate a JWT
export const generateToken = (userId: string) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET as string, {
    expiresIn: "30d",
  });
};
