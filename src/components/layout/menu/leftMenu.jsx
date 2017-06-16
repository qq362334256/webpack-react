import './leftMenu.less';
import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

// 右侧抽屉导航
class LeftMenu extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<nav className="component-layout-menu-leftMenu oya oxh">
				<ul>
					<li>导航导航导航导航导航导航导航导航导航导航导航导航导航导航导航导航导航导航导航导航导航导航导航导航导航导航导航导航</li>
					<li>导航</li>
					<li>导航</li>
					<li>导航</li>
					<li>导航</li>
					<li>导航</li>
					<li>导航</li>
					<li>导航</li>
					<li>导航</li>
					<li>导航</li>
					<li>导航</li>
					<li>导航</li>
					<li>导航</li>
				</ul>
			</nav>
		);
	}
};

export default LeftMenu;