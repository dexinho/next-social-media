import { NextApiRequest, NextApiResponse } from "next";
import type { ToDo } from "../../../../types";

const todos: ToDo[] = [
  {
    id: "1",
    title: "study",
    isCompleted: false,
  },
  {
    id: "2",
    title: "exercise",
    isCompleted: false,
  },
  {
    id: "3",
    title: "wash dishes",
    isCompleted: false,
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      return getTodos(req, res);
    default:
      res.status(405).end();
      break;
  }
}

async function getTodos(req: NextApiRequest, res: NextApiResponse) {
  try {
    res.status(200).send(todos);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}
