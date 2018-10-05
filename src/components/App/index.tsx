import { h, Component } from "preact";
import MainNav from '../MainNav'
import NavPane from '../NavPane'
import "./style.scss";

export interface AppProps {
	url: string;
}
interface AppState {
	loaded: boolean;
}

export default class App extends Component<AppProps, AppState> {
	nav: Element;

	constructor(props: AppProps) {
		super(props);
		this.state = {
			loaded: false,
		}
	}

	async componentWillMount() {
		const response = await fetch('/nav.xml');
		const parser = new DOMParser();
		const doc: XMLDocument = parser.parseFromString(await response.text(), 'text/xml');
		this.nav = doc.documentElement;
		this.setState({
			loaded: true,
		});
	}

	render(props) {
		let elements: JSX.Element[] = [];
		if (this.state.loaded) {
			for (let element of this.nav.children) {
					switch (element.tagName) {
						case 'pane':
							elements.push(
								<NavPane title={element.getAttribute('title')} />
							);
							break;
					}
				}
		}
		return (
			<MainNav>
				{elements}
			</MainNav >
		);
	}
}
