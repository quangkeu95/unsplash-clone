import React, { Component } from 'react'
import styled from 'styled-components';

const FixedContainer = styled.div`
	position: fixed;
	height: 10vh;
	width: 100%;
	background-color: #DDD;	
`;

class NavBar extends Component {
	render() {
		return (
			<FixedContainer>
				Header
			</FixedContainer>
		)
	}
}


export default NavBar;
