import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { AbQuantidade } from "../src";


export default {
    title: "Componentes/AbQuantidade",
    component: AbQuantidade,
} as ComponentMeta<typeof AbQuantidade>;

const Template: ComponentStory<typeof AbQuantidade> = () => <AbQuantidade />;

export const Primario = Template.bind({});
