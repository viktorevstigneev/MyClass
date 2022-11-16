import React from 'react';

import ThemeToggler from '../ThemeToggler';
import LogoIcon from '../LogoIcon';
import { HeaderContainer, HeaderNav, HeaderLink, StyledHeader, HeaderWrapper } from './styles';

const Header = () => {
	return (
		<StyledHeader>
			<HeaderContainer>
				{/* <HeaderWrapper> */}
					<p>LOGO</p>
				{/* </HeaderWrapper> */}
				<HeaderNav>
					<HeaderLink to="/translator">Курсы</HeaderLink>
					<HeaderLink to="/history">History</HeaderLink>
					<HeaderLink to="/favorites">Favorites</HeaderLink>
				</HeaderNav>
			</HeaderContainer>
			<ThemeToggler />
		</StyledHeader>
	);
};

export default Header;
