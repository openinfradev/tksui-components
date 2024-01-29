import {Meta, StoryObj} from '@storybook/react';
import {CSSProperties, ReactElement, useCallback, useState} from 'react';
import TIcon from '@/components/icon/TIcon';
import {TIconProps, TIconSize} from '@/components/icon/TIcon.interface';
import materialIconGallery from './material-icon-gallery';
import TTextField from '~/input/text-field/TTextField';
import TSwitch from '~/input/switch/TSwitch';
import TFormSection from '~/data-container/form-section/TFormSection';
import {TButton, TFormItem, TFormRow} from '@/components';
import TDropdown from '~/input/dropdown/TDropdown';
import TToast, {notify} from '@/components/guide/toast/TToast';


const meta: Meta<typeof TIcon> = {
    title: 'Input/TIcon',
    component: TIcon,
};
export default meta;

type Story = StoryObj<typeof TIcon>;

const showCaseStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '14px',
    gap: '8px',
    alignItems: 'center',
    cursor: 'pointer',
};

const Showcase = (props: { children: ReactElement, onClick?: () => void }): ReactElement => {
    return (
        <div style={showCaseStyle}
             onClick={props?.onClick}>
            {props.children}
            {props.children.props.children}
        </div>);
};

const Template = (args: TIconProps) => {

    const onSuccessToast = useCallback((text: string) => {
        notify.success(`${text} 복사했습니다.`);
    }, []);

    const copyText = useCallback((text: string) => {
        try {
            navigator.clipboard.writeText(text).then(() => {
                onSuccessToast(text);
            });
        } catch (error) {
            const textElement = document.createElement('textarea');
            textElement.value = text;
            document.body.appendChild(textElement);
            textElement.select();
            document.execCommand('copy');
            document.body.removeChild(textElement);
            onSuccessToast(text);
        }
    }, []);

    const [searchText, setSearchText] = useState<string>('');
    const [isFilled, setIsFilled] = useState<boolean>(false);
    const [color, setColor] = useState<string>('');
    const [size, setSize] = useState<TIconSize>('medium');

    return (<>
        <TToast/>

        <div style={{marginBottom: '16px'}}>
            <a href={'https://fonts.google.com/icons'} target={'_blank'} rel='noreferrer'>
                <TButton primary large>
                    아이콘 라이브러리 링크 바로가기
                </TButton>
            </a>
        </div>
        <TFormSection column={2}>
            <TFormRow>
                <TFormItem label={'검색'}>
                    <TTextField value={searchText} onChange={setSearchText} searchable/>
                </TFormItem>
                <TFormItem label={'FILL'}>
                    <TSwitch value={isFilled} onChange={(value: boolean) => setIsFilled(value)}/>
                </TFormItem>
            </TFormRow>
            <TFormRow>
                <TFormItem label={'SIZE'}>
                    <TDropdown value={size} onChange={(value: string) => setSize(value)} items={[
                        {text: 'XSmall', value: 'xsmall'},
                        {text: 'Small', value: 'small'},
                        {text: 'Medium', value: 'medium'},
                        {text: 'Large', value: 'large'},
                        {text: 'XLarge', value: 'xlarge'},
                    ]}/>
                </TFormItem>
                <TFormItem label={'COLOR'}>
                    <TTextField value={color} onChange={setColor}/>
                </TFormItem>
            </TFormRow>
        </TFormSection>

        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, 150px)',
            marginTop: '32px',
            rowGap: '40px',
        }}>
            {
                materialIconGallery
                    .filter((icon) => icon.includes(searchText))
                    .map((icon) => (
                        <Showcase key={icon} onClick={() => { copyText(icon); }}>
                            <TIcon {...args}
                                   fill={isFilled}
                                   color={color}
                                   size={size}
                            >
                                {icon}
                            </TIcon>
                        </Showcase>
                    ))
            }
        </div>

    </>);
};


export const Default: Story = {
    render: Template,
    args: {xsmall: true},
};

