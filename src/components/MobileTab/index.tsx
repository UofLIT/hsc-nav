import { h, Component, ComponentProps } from "preact";
export interface Props {
	title: string;
	parentId: string;
	isActive: boolean;
	children?: JSX.Element[];
}
interface MobileTabState {
}
export default function MobileTab({ title, parentId, isActive, children }: Props) {
	const id = title.replace(/\W+/, '');
	return (
		<div class="tab-content">
			<div class="med-nav-pane-collapse visible-phone">
				<a class="collapsed chevron-collapse" data-toggle="collapse" href={`#nav-${id}`} data-parent={`#nav-${parentId}`}>
					{title}
					<i class="glyphicon glyphicon-chevron-right"></i>
				</a>
			</div>
			<div id={`nav-${id}`} class={`tab-pane collapse ${isActive ? 'active' : ''}`}>
				section
			</div>
		</div>
	);
}