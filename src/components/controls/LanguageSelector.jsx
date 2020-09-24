import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger, faBeer } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const LanguageSelector = (() => {
    const { t, i18n } = useTranslation();
    const icon = i18n.language === 'en' ? faHamburger : faBeer;
    const language = i18n.language === 'en' ? 'English' : 'Czech';

    const onClick = () => {
        const newLanguage = i18n.language === 'en' ? 'cz' : 'en';
        i18n.changeLanguage(newLanguage);
    }

    return <Button onClick={onClick} variant="dark">
        <FontAwesomeIcon icon={icon} /> {t(language)}
    </Button>;
});

export default LanguageSelector;

