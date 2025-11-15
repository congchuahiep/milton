import { cn } from "@/lib/utils";

export default function QuestionLine({ className }: { className?: string }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlns-link="http://www.w3.org/1999/xlink"
			aria-hidden="true"
			role="img"
			className={cn(className)}
			width="26em"
			height="1em"
			viewBox="0 0 130 5"
			data-v-201e8a61=""
		>
			<g fill="none">
				<path
					d="M1.5 3.50024C47.196 1.57488 83.5797 0.597003 128.5 2.61854"
					stroke="currentColor"
					strokeLinecap="round"
					vectorEffect="non-scaling-stroke"
				></path>
			</g>
		</svg>
	);
}
