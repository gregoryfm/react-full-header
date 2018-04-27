import React from 'react';
import PropTypes from 'prop-types';

const FullHeader = ({ title, subtitle, bgColor, textColor, font }) => {
    const headerStyles = {
        backgroundColor: bgColor,
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
};

const propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
    font: PropTypes.string,
};

FullHeader.propTypes = propTypes;
FullHeader.defaultProps = defaultProps;

export default FullHeader;
