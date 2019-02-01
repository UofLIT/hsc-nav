import { h } from "preact";
export interface Props {
	title: string;
	isActive: boolean;
	children: Element[];
}
export default function Tab({ title, isActive, children }: Props) {
	const id = title.replace(/\W+/, '');
	const activeClass = isActive ? 'active' : '';
	return (
		<div id={`nav-${id}`} class={`tab-pane collapse ${activeClass}`}>
			link,
			sections
		</div>
	);
}