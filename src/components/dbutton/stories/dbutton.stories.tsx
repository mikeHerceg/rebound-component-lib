
    import React from 'react';
    import { ComponentStory, ComponentMeta } from '@storybook/react';
    import Dbutton from '../../dbutton';
    // @ts-ignore
    import docs from './dbutton.docs.mdx'
    
    export default {
      title: 'Components/Dbutton',
      component: Dbutton,
      argTypes: {},
      parameters: {
        docs: {
          page: docs,
        },
      },
    } as ComponentMeta<typeof Dbutton>;
    
 
    const Template: ComponentStory<typeof Dbutton> = (args) => <Dbutton {...args} />;
    
    export const Primary = Template.bind({});

    Primary.args = {
     
    };
    
  