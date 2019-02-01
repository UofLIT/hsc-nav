import { h, Component } from "preact";
import MainNav from '../MainNav'
import NavPane from '../NavPane'
import NavLink from '../NavLink'
import "./style.scss";
import Tabs from "../Tabbable";

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

	navPaneChildren(navPane: Element) {
		const elements: JSX.Element[] = [];
		for (const child of navPane.children) {
			// delete this hack
			let done = false;
			switch (child.tagName) {
				case 'tab':
					elements.push(<Tabs tabs={Array.from(navPane.children)}/>);
					done = true;
					break;
				case 'link':
				break;
				case 'section':
				break;
			}
			if (done) {
				break;
			}
		}
		return elements;
	}

	render(props) {
		let elements: JSX.Element[] = [];
		if (this.state.loaded) {
			for (let element of this.nav.children) {
					switch (element.tagName) {
						case 'pane':
							elements.push(
								<NavPane title={element.getAttribute('title')}>
									{this.navPaneChildren(element)}
								</NavPane>
							);
							break;
						case 'link':
								elements.push(
									<NavLink url={element.getAttribute('url')}>
										{element.textContent}
									</NavLink>
								)
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
