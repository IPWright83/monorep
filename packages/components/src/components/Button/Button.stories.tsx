import React from 'react';

import { Button } from ".";

export default {
  title: "Paragraph",
  argTypes: { onClick: { action: 'clicked' } },
};

const Template = () => <p>Hello World!</p>;

export const Default = Template.bind({});

const Template2 = (args) => <Button onClick={args.onClick} />
export const ButtonStory = Template2.bind({});
