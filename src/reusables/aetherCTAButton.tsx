import React from "react";

interface IProps {
	onClick?: () => void;
	ctaText: string;
	className?: string;
	disabled?: boolean;
	isLoading?: boolean;
	primary?: boolean;
	secondary?: boolean;
	type?: "submit" | "reset" | "button" | undefined;
}

const AetherCTAButton: React.FC<IProps> = (props: IProps) => {
	return (
		<button
			onClick={props.onClick}
			type={props.type}
			className={`aether-cta-button ${props.className} ${
				props.disabled ? "disabled" : ""
			} ${props.isLoading ? "loading" : ""} ${props.primary ? "primary" : ""} ${
				props.secondary ? "secondary" : ""
			}`}
		>
			{props.ctaText}
		</button>
	);
};

export default AetherCTAButton;
