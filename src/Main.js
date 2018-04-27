import React from 'react';
import PropTypes from 'prop-types';

const FullHeader = ({ title, subtitle, bgColor, bgImage, textColor, font }) => {
    const headerStyles = {
        backgroundColor: bgColor,
        backgroundImage: `url(${bgImage})`,
        color: textColor,
        fontFamily: font,
    };

    return (<header style={headerStyles}>
        {title && <h1>{title}</h1>}
        {subtitle && <h2>{subtitle}</h2>}
    </header>);
};

const defaultProps = {
    bgColor: '#CCCCCC',
    textColor: '#FFFFFF',
    font: 'sans-serif',
    bgImage: '',
};

const propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    bgColor: PropTypes.string,
    bgImage: PropTypes.string,
    textColor: PropTypes.string,
    font: PropTypes.string,
};

FullHeader.propTypes = propTypes;
FullHeader.defaultProps = defaultProps;

export default FullHeader;