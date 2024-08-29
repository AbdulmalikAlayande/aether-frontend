import React from "react";

interface AuthInputProps {
	name: string;
	type: string;
	id: string;
	className: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const AuthInput: React.FC<AuthInputProps> = ({
	name,
	type,
	id,
	className,
	onChange,
}) => {
	return (
		<div className="mb-4">
			<label
				htmlFor={id}
				className="block text-gray-700 text-sm font-bold mb-2"
			>
				{name}
			</label>
			<input
				type={type}
				id={id}
				className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${className}`}
				onChange={onChange}
			/>
		</div>
	);
};

export default AuthInput;
