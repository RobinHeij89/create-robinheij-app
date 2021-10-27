import { Image } from "./Component";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title: 'Atoms/Image',
    component: Image,
} as ComponentMeta<typeof Image>

const Template: ComponentStory<typeof Image> = args => <Image {...args}/>

export const Default = Template.bind({});
Default.args = {
    src: 'https://i.imgur.com/CQ7fTDW.jpeg',
}