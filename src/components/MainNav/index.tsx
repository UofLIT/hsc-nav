import { h, Component, ComponentProps } from "preact";
export interface MainNavProps extends ComponentProps<any> {
}
interface MainNavState {
}
export default class MainNav extends Component<MainNavProps, MainNavState> {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidMount() {
		setTimeout(() => {
		}, 2000);
	}
	render(props: MainNavProps, state: MainNavState) {
		return (
			<ul id="masthead-nav" class="nav">
				{props.children}
			</ul>
		);
	}
}