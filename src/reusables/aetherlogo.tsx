import React from "react";

interface AetherLogoProps {
	className?: string;
	id: string;
	aetherLogoUrl: string;
	aetherTagline: string;
}
const AetherLogo = (props: AetherLogoProps) => {
	return (
		<div className="logo-container">
			<svg></svg>
			<img
				src={props.aetherLogoUrl}
				alt="Your Application Logo"
				className="logo-image"
			/>
			<div className="logo-tagline">Your Application Tagline</div>
		</div>
	);
};

export default AetherLogo;
