interface PlayButtonProps {
	className?: string;
}

export default function PlayButton({ className }: PlayButtonProps) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlns-xlink="http://www.w3.org/1999/xlink"
			aria-hidden="true"
			role="img"
			// className="iconify iconify--global intro-play-container__btn-icon"
			className={className}
			width="1em"
			height="1em"
			viewBox="0 0 72 72"
			data-v-23bbdc12=""
		>
			<g>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M36 0a36 36 0 1 0 0 72 36 36 0 0 0 0-72m11.15 34.29a3.3 3.3 0 0 0-1.28-1.22L31.7 25.34a3.42 3.42 0 0 0-5.09 2.94v15.44c0 2.56 2.8 4.18 5.09 2.94l14.16-7.73a3.3 3.3 0 0 0 1.28-4.64"
					fill="white"
				></path>
			</g>
		</svg>
	);
}
