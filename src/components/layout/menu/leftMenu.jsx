import './leftMenu.less';
import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import Logo from './../logo/logo.jsx';

// 当前组件全局命名
const className = 'component-layout-menu-leftMenu';







// 右侧抽屉导航
class LeftMenu extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<nav className={`${className} oya oxh`}>
                <Logo data={{ logoUrl: 'https://www.baidu.com/img/bd_logo1.png', logoAlt: '百度', logoHref: 'index.html'}} />
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