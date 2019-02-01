import { h, Component, ComponentProps } from "preact";
export interface Props {
	title: string;
	children?: JSX.Element[];
}
interface NavPaneState {
}
export default function NavPane({ title, children }: Props) {
	const id = title.toLowerCase().replace(/\W+/, '');
	return (
		<li>
			<a class="med-nav-toggle collapsed" data-toggle="collapse" data-parent="#masthead-nav" href={`#nav-${id}`}>
				{title}
			</a>
			<div id={`nav-${id}`} class="nav-pane collapse">
				<div class="nav-pane-inner">
					{children}
				</div>
			</div>
		</li>
	);
}