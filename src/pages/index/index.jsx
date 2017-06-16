import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import Header from './../../components/layout/header/header.jsx';
import LeftMenu from './../../components/layout/menu/leftMenu.jsx';












const App = () => (
	<div className="app flex h-100">
		<LeftMenu></LeftMenu>
		<div className="right-main flex1" style={{background: 'red'}}>
			<Header></Header>
		</div>
	</div>
);

export default App;