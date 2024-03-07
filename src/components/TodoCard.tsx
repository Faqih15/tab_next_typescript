'use client'
import { useState } from "react";
import { Todo } from "../entities/Todo";

interface TodoProps {
  todo: Todo;
}

export default function TodoCard({ todo }: TodoProps) {
  const [checked, setChecked] = useState(todo.completed);

  return (
    <div>
      <table className="w-1/4 text-left">
        <tbody className="text-base capitalize text-gray-800">
          <tr>
            <td className="px-5 text-lg text-blue-800 font-medium">{todo.title}</td>
            <td className="px-5 flex justify-end">
              <input
                type="checkbox"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
                className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded-lg focus:ring-blue-500 focus:ring-2"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}