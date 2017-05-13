import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

const style = {
	float: 'left',
	marginLeft: 20,
	marginTop: 20,
	padding: '5px 10px',
	border: '1px solid gray',
	display: 'flex'
};

const Button = () => <span style={style} className="button" onClick={() => console.log(11)}>点击</span>;



render(
	<Button></Button>,
	document.getElementsByTagName('body')[0]
);