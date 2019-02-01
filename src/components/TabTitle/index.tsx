import { h } from "preact";
export interface Props {
	title: string;
	isActive: boolean;
}
export default function TabTitle({ title, isActive }: Props) {
	const id = title.replace(/\W+/, '');
	const activeClass = isActive ? 'active' : '';
	return (
		<li class={activeClass}>
			<a data-toggle="tab" href={`#nav-${id}`}>
				{title}
			</a>
		</li>
	);
}