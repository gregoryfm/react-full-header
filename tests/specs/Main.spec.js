import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import FullHeader from '../../src/Main';

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
});
