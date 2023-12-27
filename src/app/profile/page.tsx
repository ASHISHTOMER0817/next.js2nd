"use client";
import axios from "axios";
// import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function Profile() {
	const router = useRouter();
	const logout = async () => {
		try {
			await axios.get("/api/logout");
			toast.success("logout successful");
			router.push("/login");
		} catch (error: any) {
			console.log(error.message);
			toast.error(error.message);
		}
	};

	return (
		<div className="flex flex-col justify-center items-center bg-zinc-300">
			<h1>Profile </h1>
			<p>Profile Page</p>
			<button className="border-spacing-2 border-pink-600 border-solid border-y-2" onClick={logout}>Logout</button>
		</div>
	);
}
