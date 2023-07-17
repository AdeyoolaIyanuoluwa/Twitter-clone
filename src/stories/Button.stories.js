import React from 'react';
import Button from '../components/Button/button';

export default {
    title: 'Components/Button',
    component: Button
}

const TemplateButton = (args) => {
    return(
        <div>
            <Button {...args}>Tweet</Button>
        </div>
    )
};

export const mainButton = TemplateButton.bind({});
mainButton.args = {
    children: 'Tweet',
    mainbutton: true
}

export const subButton = TemplateButton.bind({});
subButton.args = {
    children: 'Get verified',
    mainbutton: false
}

