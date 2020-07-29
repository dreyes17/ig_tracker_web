import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import { LOCALES } from './constants';
import messages from './messages';

const Provider = ({ children, locale=LOCALES.ENGLISH }) => {
  
  return (<IntlProvider
            textComponent={Fragment}
            locale={locale}
            messages={messages[locale]}
          >
            {children}
          </IntlProvider>);
};

Provider.displayName = 'I18nProvider';

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

Provider.defaultProps = {
  locale: LOCALES.ENGLISH,
};

export default Provider;
