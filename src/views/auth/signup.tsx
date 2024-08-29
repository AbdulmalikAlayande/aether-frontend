import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import AuthInput from "./authInput";
import AetherLogo from "../../reusables/aetherlogo";
import { SERVER_SIGNUP_URL } from "../../config/constants";

interface SignupData {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
}

const initialData: SignupData = {
	firstName: "",
	lastName: "",
	email: "",
	password: "",
};

const SignUp: React.FC = () => {
	const [data, setData] = useState<SignupData>(initialData);

	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		event.preventDefault();
		setData((initSate) => ({
			...initSate,
			[event.target.name]: event.target.value,
		}));
	}

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		axios
			.post(SERVER_SIGNUP_URL, data)
			.then((response) => {
				console.log("Response: ", response);
				toast.success("Signup successful", {
					position: "top-right",
				});
			})
			.catch((error) => {
				toast.error(error.message);
				console.error("Error message: ", error.message);
			});
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-blue-500">
			<div className="container mx-auto px-4 flex flex-col center justify-evenly bg-blue-400">
				<div className="flex flex-col items-center justify-center py-16">
					<AetherLogo
						aetherLogoUrl={""}
						className={""}
						id={""}
						aetherTagline={""}
					/>
					<h1 className="text-4xl font-bold text-white mb-4">
						Welcome to Aether
					</h1>
					<p className="text-white text-lg mb-8">
						Create an account to get started
					</p>
				</div>
				<div className="bg-white rounded-lg shadow-lg p-8">
					<form onSubmit={handleSubmit}>
						<AuthInput
							name={"First Name"}
							type={"text"}
							id={"firstName"}
							className={""}
							onChange={handleChange}
						/>

						<AuthInput
							name={"Last Name"}
							type={"text"}
							id={"lastName"}
							className={""}
							onChange={handleChange}
						/>
						<AuthInput
							name={"Email"}
							type={"email"}
							id={"email"}
							className={""}
							onChange={handleChange}
						/>
						<AuthInput
							name={"Phone"}
							type={"tel"}
							id={"phoneNumber"}
							className={""}
							onChange={handleChange}
						/>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
