import { Request, Response } from "express";
import todoModel from "../model/crudModel";

export const getAllTodo = async (req: Request, res: Response) => {
  try {
    const result = await todoModel.find();
    res.status(200).json({ count: result.length, result });
  } catch (error) {
    console.log(error);
  }
};
export const getATodo = async (req: Request, res: Response) => {
  try {
    const result = await todoModel.findOne({ _id: req.params.id });
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};
export const createATodo = async (req: Request, res: Response) => {
  const { title, body, isCompleted } = req.body;
  try {
    const newtodo = new todoModel({
      title: title,
      body: body,
      isCompleted: isCompleted,
    });
    const result = await newtodo.save();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      message: "error.message",
      error,
    });
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    await todoModel.deleteOne({ _id: id });
    res.status(200).json({
      message: "delete successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "error.message",
      error,
    });
  }
};

export const updateTodo = async (req: Request, res: Response) => {
  const id = req.params.id;
  const { title, body, isCompleted } = req.body;

  try {
    const newdata = await todoModel.updateOne(
      { _id: id },
      {
        $set: {
          title,
          body,
          isCompleted,
        },
      },
      { new: true }
    );
    res.status(200).json({
      message: "update successfully",
      newdata,
    });
  } catch (error) {
    res.status(500).json({
      message: "error.message",
      error,
    });
  }
};
