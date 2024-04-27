import type { Todo } from "../../../../types";

const todos: Todo[] = [
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

export const GET = async () => {
  return Response.json(todos, { status: 200 });
};
