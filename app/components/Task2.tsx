"use client";

import { useRef, useState } from "react";
import { nanoid } from "nanoid";

export default function TaskManager() {
	const [tasks, setTasks] = useState([]);
	const inputReference = useRef(null);

	const handleAddTask = (e) => {
		const inputValue = inputReference?.current?.value.trim(); // Trim whitespace
		if (inputValue) {
			setTasks([{ title: inputValue, id: nanoid() }, ...tasks]);
			inputReference.current.value = ""; // Clear input field
		}
		e.preventDefault();
	};

	const handleDeleteTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};

	// const handleKeyPress = (event) => {
	// 	if (event.key === "Enter") {
	// 		handleAddTask();
	// 	}
	// };

	return (
		<div className='min-h-screen flex items-center justify-center bg-gray-100 p-4'>
			<div className='w-full max-w-md bg-white shadow-lg rounded-lg p-6'>
				<h1 className='text-xl font-bold text-gray-800 mb-4 text-center'>
					Task Manager
				</h1>
				<form className='flex gap-2 mb-4' onSubmit={handleAddTask}>
					<input
						ref={inputReference}
						className='flex-grow border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
						placeholder='Enter a task'
						// onKeyDown={handleKeyPress}
					/>
					<button
						// onClick={handleAddTask}
						className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition'>
						Add Task
					</button>
				</form>
				<ul>
					{tasks.map((task) => (
						<li
							key={task.id}
							className='flex flex-wrap justify-between items-center bg-gray-50 px-3 py-2 rounded shadow-sm mb-2'>
							<span className='text-gray-700'>{task.title}</span>
							<button
								onClick={() => handleDeleteTask(task.id)}
								className='text-red-600 hover:text-red-700 transition'>
								Delete
							</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
