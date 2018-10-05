import { h, Component, ComponentProps } from "preact";
export interface TabbableProps extends ComponentProps<any> {
	title: string;
}
interface TabbableState {
}
export class Tabbable extends Component<TabbableProps, TabbableState> {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidMount() {
		setTimeout(() => {
		}, 2000);
	}
	render({title, children}: TabbableProps, state: TabbableState) {
		const id = title.replace(/\W+/, '');
		return (
			<div class="tabbable tabs-left">
				<ul class="nav nav-tabs hidden-phone">
					Tab names
				</ul>
				<div class="tab-content">
					<div class="med-nav-pane-collapse visible-phone">

					</div>
					MobileTabs
				</div>
			</div>
		);
	}
}