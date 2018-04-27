import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import FullHeader from '../../src/Main';

chai.use(chaiEnzyme());

describe('FullHeader', () => {
    it('should have header tag when mount', () => {
        const wrapper = shallow(<FullHeader />);
        expect(wrapper.find('header')).to.have.length(1);
    });

    context('title', () => {
        it('should have h1 tag when title passed', () => {
            const wrapper = shallow(<FullHeader title="JS" />);
            expect(wrapper.find('h1')).to.have.length(1);
        });

        it('should not have h1 tag when title is not passed', () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper.find('h1')).to.have.length(0);
        });

        it('should have h1 tag when title passed', () => {
            const wrapper = shallow(<FullHeader title="JS" />);
            expect(wrapper.find('h1').props().children).to.be.equal('JS');
        });
    });

    context('subtitle', () => {
        it('should have h2 tag when subtitle passed', () => {
            const wrapper = shallow(<FullHeader subtitle="TDD and React" />);
            expect(wrapper.find('h2')).to.have.length(1);
        });

        it('should not have h2 tag when subtitle is not passed', () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper.find('h2')).to.have.length(0);
        });

        it('should have h2 tag when subtitle passed', () => {
            const wrapper = shallow(<FullHeader subtitle="TDD and React" />);
            expect(wrapper.find('h2').props().children).to.be.equal('TDD and React');
        });
    });

    context('bgColor', () => {
        it('should have background-color equal #CCCCCC when none is passed', () => {
            const wrapper = shallow(<FullHeader title="JSS with TDD" />);
            expect(wrapper).to.have.style('background-color').equal('#CCCCCC');
        });

        it('should have background-color egual #000000 when bgColor is passed', () => {
            const wrapper = shallow(<FullHeader title="JSS with TDD" bgColor="#000000"/>);
            expect(wrapper).to.have.style('background-color').equal('#000000');
        });
    });

    context('textColor', () => {
        it('should have color equal #FFFFFF when none is passed', () => {
            const wrapper = shallow(<FullHeader title="JSS with TDD" />);
            expect(wrapper).to.have.style('color').equal('#FFFFFF');
        });

        it('should have color egual #000000 when textColor is passed', () => {
            const wrapper = shallow(<FullHeader title="JSS with TDD" textColor="#000000"/>);
            expect(wrapper).to.have.style('color').equal('#000000');
        });
    });

    context('font', () => {
        it('should have font equal sans-serif when none is passed', () => {
            const wrapper = shallow(<FullHeader title="JSS with TDD" />);
            expect(wrapper).to.have.style('font-family').equal('sans-serif');
        });

        it('should have font equal open-sans when font is passed', () => {
            const wrapper = shallow(<FullHeader title="JSS with TDD" font="open-sans"/>);
            expect(wrapper).to.have.style('font-family').equal('open-sans');
        });
    });
});
