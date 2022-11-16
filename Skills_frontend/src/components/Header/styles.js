import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledHeader = styled.header`
	width: 20%;
	background: ${({ theme }) => theme.headerBackground};
	border-right: 1px solid wheat;
`;

export const HeaderContainer = styled.div`
	align-items: center;
	height: 5em;
	margin: 0 auto;
`;

export const HeaderNav = styled.nav`
	width: 40%;
`;

export const HeaderLink = styled(Link)`
	display: block;
	color: ${({ theme }) => theme.text};
	text-decoration: none;
	text-transform: uppercase;

	margin-top: 10px;
`;

export const HeaderWrapper = styled.div`
	display: flex;
	align-items: center;
`;
