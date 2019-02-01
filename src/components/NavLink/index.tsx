import { h, Component, ComponentChildren } from "preact";
export interface Props {
	url: string;
	children?: ComponentChildren;
}

export default function NavLink({ url, children }: Props) {
	return (
		<li>
			<a class="med-nav-toggle collapsed" data-toggle="collapse" data-parent="#masthead-nav" href={url}>
				{children}
			</a>
		</li>
	);
}