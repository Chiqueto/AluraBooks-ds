import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AbCampoTexto, } from '../src';

export default {
    title: 'Componentes/AbCampoTexto',
    component: AbCampoTexto,
} as ComponentMeta<typeof AbCampoTexto>

const Template: ComponentStory<typeof AbCampoTexto> = () => <AbCampoTexto />;

export const Padrao = Template.bind({});

Padrao.args = {

}