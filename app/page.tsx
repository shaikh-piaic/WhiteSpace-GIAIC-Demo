import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Hero from "./components/Hero";
export default function Home() {
	return (
		<div>
			<Navbar />
			<Hero />
		</div>
	);
}
