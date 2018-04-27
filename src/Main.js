import React from 'react';
import PropTypes from 'prop-types';
import { headerStyle, containerStyle, titleStyle, subtitleStyle, videoStyle } from './Styles';

const defaultProps = {
    bgColor: '#CCCCCC',
    textColor: '#FFFFFF',
    font: 'sans-serif',
    bgImage: '',
};

const FullHeader = ({ title, subtitle, bgColor, bgImage, textColor, font, video }) => {
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
            {video && <video style={videoStyle} autoPlay muted loop src={video}/>}
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
    video: PropTypes.string,
};

FullHeader.propTypes = propTypes;
FullHeader.defaultProps = defaultProps;

export default FullHeader;