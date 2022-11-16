import React, { useEffect, useState } from 'react';
import { Skeleton } from '@mui/material';

import LanguagesList from '../LanguagesList';
import { useDebounce } from '../../hooks/useDebounce';
import SwitchIcon from '../SwitchIcon/SwitchIcon';
import AddingFavoritesButton from '../AddingFavoritesButton';
import { TranslatorContainer} from './styles';
import {
	EMPTY_STRING,
	COLORS,
} from '../../constants';

const TranslatorContent = ({ translator, postTranslateText, languages, theme }) => {
	

	return (
		<TranslatorContainer>
			
		</TranslatorContainer>
	);
};

export default TranslatorContent;
