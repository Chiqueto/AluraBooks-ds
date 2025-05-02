import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AbModal, AbModalProps, } from '../src';

export default {
    title: 'Componentes/AbModal',
    component: AbModal,
} as ComponentMeta<typeof AbModal>

const Template: ComponentStory<typeof AbModal> = (args) => <AbModal {...args} />;

export const Padrao = Template.bind({});

Padrao.args = {
    titulo: 'Título do Modal',

    aberto: true,
    aoFechar: () => { console.log('Modal fechado') }
} as AbModalProps