
import React, { useState }  from 'react';
import { ComponentMeta } from '@storybook/react';
import { Modal } from '..';
import { ButtonPrimary } from '../../../button-primary';

export default {
  title: 'Elements/Modal',
  component:Modal,
} as ComponentMeta<typeof Modal>;


export const Default = ()=>{
    const [isVisible, setIsVisible] = useState<boolean>(false);

    return(
        <>
            <ButtonPrimary onClick={()=>setIsVisible(true)}>open </ButtonPrimary>
            <Modal isVisible={isVisible} onClose={()=>setIsVisible(false)}>
                <>
                    I'm modal content
                </>
            </Modal>
        </>

    )
}



