import React from 'react';

import Header from '../../components/Header';
import TranslatorContent from '../../components/TranslatorContent';

import { CourseMain } from './styles';

const Translator = () => {
	return (
		<CourseMain>
			<Header />
			<TranslatorContent />
		</CourseMain>
	);
};

export default Translator;
