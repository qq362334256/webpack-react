import './leftMenu.less';
import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

// 当前组件全局命名
const className = 'component-layout-menu-leftMenu';


// logo组件
const Logo = () => (
    <h1 className={`${className}-logo text-center`}>
        logo
    </h1>
);


// 右侧抽屉导航
class LeftMenu extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<nav className={`${className} oya oxh`}>
                <Logo />
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