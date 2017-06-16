import React, { Component } from 'React';
import ReactDOM, { render } from 'react-dom';


class Header extends Component {
	constructor(props) {
		super(props)
	}

	render = () => (
		<header className="layou-header">
			头部
		</header>
	)
};


export default Header;