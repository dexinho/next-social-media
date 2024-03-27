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
];

export const GET = async () => {
  return Response.json(todos, { status: 200 });
};
