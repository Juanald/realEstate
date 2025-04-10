import { trusted } from "mongoose";
import User, { IUser } from "../models/User";
import { Request, Response } from "express";
import { generateToken } from "../utils/generateTokens";

export const createUser = async (req: Request, res: Response) => {
  try {
    const user: IUser = await User.create(req.body); // req.body refers to the body of the HTTP request
    res
      .status(201)
      .json({ user: user, token: generateToken(user._id as string) });
  } catch (err: any) {
    res.status(400).json({ errr: err.message });
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const user: IUser | null = await User.findById(id);
    if (!user) {
      res.status(401).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const user: IUser | null = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!user) {
      res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const user: IUser | null = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully", user });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const loginUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const { username, password } = req.body;
    const user: IUser | null = await User.findOne({
      username: username,
      password: password, // Right now stored in plaintext, eventually start encrypting.
    });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({
      message: "Login successful",
      user: user,
      token: generateToken(user._id as string),
    });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};
