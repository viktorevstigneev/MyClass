import React from 'react';

import LightThemeIcon from '../../img/light_theme.png';
import DarkThemeIcon from '../../img/dark_theme.png';
import { ToggleButton } from './styles';

const ThemeToggler = ({ theme, toggleTheme }) => {
	return (
		<ToggleButton onClick={toggleTheme}>
			{theme.darkMode ? (
				<img src={DarkThemeIcon} />
			) : (
				<img style={{ border: '1px solid #6c5dd3', borderRadius: "6px" }} src={LightThemeIcon} />
			)}
		</ToggleButton>
	);
};

export default ThemeToggler;
