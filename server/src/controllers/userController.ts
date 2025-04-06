import User, { IUser } from "../models/User";
import { Request, Response } from "express";

export const createUser = async (req: Request, res: Response) => {
  try {
    const user: IUser = await User.create(req.body); // req.body refers to the body of the HTTP request
    res.status(201).json(user);
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
      req.body
    );
    if (!user) {
      res.status(404).json({ message: "User not found" });
    }
    res.status(204).json({ message: "User updated successfully" });
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
    res.status(200).json({ message: "User deleted successfully" });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};
