import React from 'react';
import PropTypes from 'prop-types';
import { headerStyle, containerStyle, titleStyle, subtitleStyle } from './Styles';

const defaultProps = {
    bgColor: '#CCCCCC',
    textColor: '#FFFFFF',
    font: 'sans-serif',
    bgImage: '',
};

const FullHeader = ({ title, subtitle, bgColor, bgImage, textColor, font }) => {
    const headerStyleCombined = {
        ...headerStyle,
        backgroundColor: bgColor,
        backgroundImage: `url(${bgImage})`,
        color: textColor,
        fontFamily: font,
    };

    return (
        <header style={headerStyles}>
            <div style={containerStyle}>
                {title && <h1 style={titleStyle}> {title} </h1>}
                {subtitle && <h2 style={subtitleStyle}> {subtitle} </h2>}
            </div>
        </header>
    );
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