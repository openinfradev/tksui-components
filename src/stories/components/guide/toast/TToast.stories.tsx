import {Meta, StoryObj} from '@storybook/react';
import React from 'react';
import {ToastPosition} from 'react-toastify/dist/types';
import TToast, {notify} from '~/tks/component/guide/toast/TToast';
import TButton from '~/tks/component/button/button/TButton';


const meta: Meta<typeof TToast> = {
    title: 'Guide/TToast',
    component: TToast,
};
export default meta;

type Story = StoryObj<typeof TToast>;


const Template = (args) => {

    const shortText = 'Hello world';
    const longText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry';

    function normal(message: string): void { notify(message); }

    function success(message: string): void { notify.success(message); }

    function error(message: string): void { notify.error(message); }

    function warn(message: string): void { notify.warn(message); }

    function info(message: string): void { notify.info(message); }


    return (<>
        <TButton onClick={() => normal(shortText)}>Plain short</TButton>
        <TButton onClick={() => normal(longText)}>Plain long</TButton>
        <br/><br/>
        <TButton onClick={() => success(shortText)}>Success short</TButton>
        <TButton onClick={() => success(longText)}>Success long</TButton>
        <br/><br/>
        <TButton onClick={() => error(shortText)}>Error short</TButton>
        <TButton onClick={() => error(longText)}>Error long</TButton>
        <br/><br/>
        <TButton onClick={() => warn(shortText)}>Warn short</TButton>
        <TButton onClick={() => warn(longText)}>Warn long</TButton>
        <br/><br/>
        <TButton onClick={() => info(shortText)}>Info short</TButton>
        <TButton onClick={() => info(longText)}>Info long</TButton>
        <br/><br/>

        <TToast {...args} />
    </>);
};


export const Default: Story = {
    render: Template,
    args: {
        className: 'tks-toast-container',
        autoClose: 5000,
        toastClassName: 'tks-toast',
        bodyClassName: 'tks-toast__body',
        progressClassName: 'tks-toast__progress',
        position: 'top-right' as ToastPosition,
        draggable: false,
    },
};
