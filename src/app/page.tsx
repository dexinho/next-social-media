"use client";

import { useEffect, useState } from "react";
import { ToDo } from "../../types";

export default function Home() {
  const [todos, setTodos] = useState<ToDo[]>([]);

  useEffect(() => {
    async function fetchTodos() {
      const response = await fetch(`/api/todos`);

      const data = await response.json();

      setTodos(data);

      console.log(response);
    }

    fetchTodos();
  }, []);

  return (
    <div className="flex flex-col w-full justify-center items-center min-h-screen">
      List Page
      <div className="flex flex-col w-10/12 bg-gray-900 p-4 rounded-md shadow-2xl my-4">
        <div className="w-full flex justify-between px-4 opacity-50 mb-2">
          <div>Title</div>
          <div>Category</div>
          <div>Status</div>
        </div>
        {todos.map((todo, idx) => (
          <>
            <div
              className={`${
                idx === 0
                  ? "rounded-t-md"
                  : todos.length - 1 === idx
                  ? "rounded-b-md"
                  : ""
              } bg-gray-800 hover:bg-gray-700 cursor-pointer shadow-md flex w-full justify-between p-4`}
            >
              <div>{todo.id}</div>
              <div>{todo.isCompleted ? "Completed" : "Not Completed"}</div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
