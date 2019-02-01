import { h, Component } from "preact";
import Tab from "../Tab";
import TabTitle from "../TabTitle";

export interface Props {
	tabs: Element[];
}

export default function Tabs({ tabs }: Props) {
	const tabElms = [];
	const tabHeaders = [];
	for (let i = 0; i < tabs.length; i++) {
		const tab = tabs[i];
		const isActive = 0 === i;
		tabElms[i] = <Tab title={tab.getAttribute('title')} isActive={isActive} children={Array.from(tab.children)}></Tab>
		tabHeaders[i] = <TabTitle title={tab.getAttribute('title')}  isActive={isActive}/>
	}
	return (
		<div class="tabbable tabs-left">
			<ul class="nav nav-tabs hidden-phone">
				{tabHeaders}
			</ul>
			{tabElms}
		</div>

	);
}