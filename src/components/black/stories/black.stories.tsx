
    import React from 'react';
    import { ComponentStory, ComponentMeta } from '@storybook/react';
    
    import Black from '../../black';
    
    export default {
      title: 'Components/Black',
      component: Black,
      argTypes: {},
    } as ComponentMeta<typeof Black>;
    
 
    const Template: ComponentStory<typeof Black> = (args) => <Black {...args} />;
    
    export const Primary = Template.bind({});

    Primary.args = {
     
    };
    
  