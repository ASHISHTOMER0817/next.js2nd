"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

type Props = {};

export default function LoginPage(props: Props) {
	const router = useRouter();

	const [user, setUser] = useState({
		email: "",
		password: "",
	});

	const [buttonDisabled, setButtonDisabled] = React.useState(Boolean);
	const [loading, setLoading] = React.useState(Boolean);

	const onLogin = async () => {
		try {
			setLoading(true);
			const response = await axios.post("/api/users/login", user);

			console.log("Login success", response.data);
			toast.success("Login success");
			router.push('/profile')
		} catch (error: any) {
			console.log("login failed", error.message);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		if (user.email.length > 0 && user.password.length > 0) {
			setButtonDisabled(false);
		} else {
			setButtonDisabled(true);
		}
	}, [user]);

	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<h1>{loading?"processing": "Login"}</h1>
			<br></br>
			<label htmlFor="username">Email</label>
			<input
				id="Email"
				type="Email"
				placeholder="Email"
				value={user.email}
				onChange={(e) =>
					setUser({ ...user, email: e.target.value })
				}
				className="text-black"
			/>
			<label htmlFor="password">password</label>
			<input
				id="password"
				type="password"
				placeholder="password"
				value={user.password}
				onChange={(e) =>
					setUser({ ...user, password: e.target.value })
				}
				className="text-black"
			/>
			<button onClick={onLogin}>Login Here</button>
			<Link href={"/signup"}>Visit Signup Page</Link>
		</div>
	);
}
