import { h, Component, ComponentProps } from "preact";
export interface MobileTabProps extends ComponentProps<any> {
	title: string;
	parentId: number;
	isActive: boolean;
}
interface MobileTabState {
}
export class MobileTab extends Component<MobileTabProps, MobileTabState> {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidMount() {
		setTimeout(() => {
		}, 2000);
	}
	render({title, parentId, isActive, children}: MobileTabProps, state: MobileTabState) {
		const id = title.replace(/\W+/, '');
		return (
			<div>
			<div class="med-nav-pane-collapse visible-phone">
				<a class="collapsed chevron-collapse" data-toggle="collapse" href={`#nav-${id}`} data-parent={`#nav-${parentId}`}>
					{title}
					<i class="glyphicon glyphicon-chevron-right">
					</i>
				</a>
			</div>
			<div id={`nav-${id}`} class={`tab-pane collapse ${isActive ? 'active' : ''}`}>
			</div>
			</div>
		);
	}
}