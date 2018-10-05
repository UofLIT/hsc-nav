import { h, Component, ComponentProps } from "preact";
export interface NavPaneProps extends ComponentProps<any> {
	title: string;
}
interface NavPaneState {
}
export default class NavPane extends Component<NavPaneProps, NavPaneState> {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidMount() {
		setTimeout(() => {
		}, 2000);
	}
	render({title, children}: NavPaneProps, state: NavPaneState) {
		const id = title.toLowerCase().replace(/\W+/, '');
		return (
			<li>
				<a class="med-nav-toggle collapsed" data-toggle="collapse" data-parent="#masthead-nav" href={`#nav-${id}}`}>
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
}