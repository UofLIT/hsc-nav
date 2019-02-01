import { h, Component } from "preact";

export interface Props {
	children?: JSX.Element[]
}

export default function MainNav({ children }: Props) {
	return (
		<ul id="masthead-nav" class="nav">
			{children}
		</ul>
	);
}