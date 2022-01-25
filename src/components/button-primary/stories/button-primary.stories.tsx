
    import React from 'react';
    import { ComponentStory, ComponentMeta } from '@storybook/react';
    
    import ButtonPrimary from '../button-primary';
    
    export default {
      title: 'Components/Button Primary',
      component: ButtonPrimary,
      argTypes: {},
    } as ComponentMeta<typeof ButtonPrimary>;
    
 
    const Template: ComponentStory<typeof ButtonPrimary> = (args) => <ButtonPrimary {...args} />;
    
    export const Primary = Template.bind({});

    Primary.args = {
      disabled:false,
      children:'button primary',
      onClick:()=>alert('clicked')
    };
    
  