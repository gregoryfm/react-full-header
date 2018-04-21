import React from 'react';
import FullHeader from '../src/Main'; // This is our component
import { storiesOf } from '@storybook/react';

storiesOf('Full Header', module)
    .add('with title', () => {
        <FullHeader title="Title" />
    })
    .add('with title and subtitle', () => {
        <FullHeader title="Title" subtitle="Subtitle" />
    })
    .add('with title, subtitle, bgColor', () => {
        <FullHeader
            title="Title"
            subtitle="Subtitle"
            bgColor="#329988" />
    })
    .add('with title, subtitle, bgColor, textColor', () => {
        <FullHeader
            title="Title"
            subtitle="Subtitle"
            bgColor="#329988"
            textColor="#FF9900" />
    })
    .add('with title, subtitle, bgColor, textColor and font', () => {
        <FullHeader
            title="Title"
            subtitle="Subtitle"
            bgColor="#329988"
            textColor="#FF9900"
            font="cursive" />
    })
    .add('with title, subtitle and bgImage', () => {
        <FullHeader
            title="Title"
            subtitle="Subtitle"
            bgImage="https://images.unsplash.com/photo-1517949908114-71669a64d885?ixlib=rb-0.3.5&s=5e80c95e1b996f0c8b642671acca6ba2&auto=format&fit=crop&w=1350&q=80" />
    })
    .add('with title, subtitle, bgVideo', () => {
        <FullHeader
            title="Title"
            subtitle="Subtitle"
            bgVideo="http://callmenick.com/_development/video/full-screen-background-video/media/demo.mp4" />
    })
