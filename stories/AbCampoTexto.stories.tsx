import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AbCampoTexto, AbCampoTextoProps, } from '../src';

export default {
    title: 'Componentes/AbCampoTexto',
    component: AbCampoTexto,
} as ComponentMeta<typeof AbCampoTexto>

const Template: ComponentStory<typeof AbCampoTexto> = (args) => <AbCampoTexto {...args} />;

export const Padrao = Template.bind({});

Padrao.args = {
    label: 'E-mail',
    placeholder: 'Digite seu e-mail',
    tipo: 'email'
} as AbCampoTextoProps