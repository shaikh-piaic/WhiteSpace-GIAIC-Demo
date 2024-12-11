"use client";

import { useRef, useState, useEffect } from "react";
import { nanoid } from "nanoid";

export default function Task() {
	const [tasks, setTasks] = useState([]);
	const inputReference = useRef(null);

	// Clear input after adding a task
	const handleAddTask = (e) => {
		const inputValue = inputReference?.current?.value.trim(); // Trim whitespace
		if (inputValue) {
			setTasks([{ title: inputValue, id: nanoid() }, ...tasks]);
			inputReference.current.value = ""; // Clear input field
		}
		e.preventDefault();
	};

	// Delete task
	const handleDeleteTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};

	// Add task when "Enter" is pressed
	// const handleKeyPress = (event) => {
	// 	if (event.key === "Enter") {
	// 		handleAddTask();
	// 	}
	// };

	useEffect(() => {
		console.log("Task list updated:", tasks);
	}, [tasks]); // This runs whenever the `tasks` state changes

	return (
		<div className='flex justify-center items-center flex-col pt-10 bg-slate-400'>
			<div className='flex px-8 py-16 justify-center items-center flex-col  w-[400px] h-max'>
				<form onSubmit={handleAddTask}>
					<input
						ref={inputReference}
						className='border-2 border-gray-700 rounded mr-4'
						// onKeyDown={handleKeyPress} // Add task on pressing "Enter"
					/>
					<button
						// onClick={handleAddTask}
						className='bg-blue-600 text-white rounded px-3'>
						Add Task
					</button>
				</form>
				<ul className='w-40 border border-green-700 flex justify-around flex-col items-center'>
					{tasks.map((task) => (
						<li key={task.id} className='flex justify-between'>
							<span>{task.title}</span>
							<button
								onClick={() => handleDeleteTask(task.id)}
								className='bg-red-500 text-white rounded px-2'>
								Delete
							</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
