import type {Meta, StoryObj} from '@storybook/react';
import type {CSSProperties, ReactNode} from 'react';
import {useState} from 'react';

import useRefs from '@/common/hook/UseRefs';
import TValidatorRule from '@/common/validator/TValidatorRule';
import TButton from '@/components/button/button/TButton';
import TCheckbox from '@/components/input/checkbox/TCheckbox';
import type {TCheckboxProps, TCheckboxValue} from '@/components/input/checkbox/TCheckbox.interface';

const meta: Meta<typeof TCheckbox> = {
    title: 'Input/TCheckbox',
    component: TCheckbox,
};

export default meta;

type Story = StoryObj<typeof TCheckbox>;

const flexStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: '8px',
};
const Container = ({children}: {children: ReactNode}) => {
    return <div style={{...flexStyle, gap: '24px'}}>{children}</div>;
};

const ItemContainer = ({label, children}: {label?: string; children: ReactNode}) => {
    return (
        <div style={flexStyle}>
            <p style={{fontSize: '12px'}}>{label}</p>
            <div style={{...flexStyle, flexDirection: 'row', gap: '16px'}}>{children}</div>
        </div>
    );
};

// region [Normal]

const NormalTemplate = (args: TCheckboxProps) => {
    const [checkbox1, setCheckbox1] = useState<TCheckboxValue>(false);
    const [checkbox2, setCheckbox2] = useState<TCheckboxValue>('N');
    const [checkbox3, setCheckbox3] = useState<TCheckboxValue>(true);
    const [checkbox4, setCheckbox4] = useState<TCheckboxValue>(false);
    const [checkbox5, setCheckbox5] = useState<TCheckboxValue>(true);
    const [checkbox6, setCheckbox6] = useState<TCheckboxValue>(false);

    const [checkbox5Indeterminate, setCheckbox5Indeterminate] = useState(true);

    function onChangeCheckbox5(value: TCheckboxValue) {
        setCheckbox5(value);
        setCheckbox5Indeterminate(false);
    }

    return (
        <Container>
            <ItemContainer label={`Boolean Value(value: ${checkbox1.toString()})`}>
                <TCheckbox {...args} onChange={setCheckbox1} value={checkbox1}>
                    사과
                </TCheckbox>
                <TCheckbox {...args} onChange={setCheckbox1} value={checkbox1}>
                    Apple
                </TCheckbox>
            </ItemContainer>

            <ItemContainer label={`Custom Value(value: ${checkbox2.toString()})`}>
                <TCheckbox {...args} onChange={setCheckbox2} value={checkbox2} positiveValue={'Y'} negativeValue={'N'}>
                    파인애플
                </TCheckbox>
                <TCheckbox {...args} onChange={setCheckbox2} value={checkbox2} positiveValue={'Y'} negativeValue={'N'}>
                    Pineapple
                </TCheckbox>
            </ItemContainer>

            <ItemContainer label={`Disabled checked (value: ${checkbox3.toString()})`}>
                <TCheckbox {...args} disabled onChange={setCheckbox3} value={checkbox3}>
                    오렌지
                </TCheckbox>
                <TCheckbox {...args} disabled onChange={setCheckbox3} value={checkbox3}>
                    Orange
                </TCheckbox>
            </ItemContainer>

            <ItemContainer label={`Disabled unchecked (value: ${checkbox4.toString()})`}>
                <TCheckbox {...args} disabled onChange={setCheckbox4} value={checkbox4}>
                    오렌지
                </TCheckbox>
                <TCheckbox {...args} disabled onChange={setCheckbox4} value={checkbox4}>
                    Orange
                </TCheckbox>
            </ItemContainer>

            <ItemContainer label={`ReadOnly checked (value: ${checkbox5.toString()})`}>
                <TCheckbox {...args} readOnly onChange={setCheckbox5} value={checkbox5}>
                    바나나
                </TCheckbox>
                <TCheckbox {...args} readOnly onChange={setCheckbox5} value={checkbox5}>
                    Banana
                </TCheckbox>
            </ItemContainer>

            <ItemContainer label={`ReadOnly unchecked (value: ${checkbox6.toString()})`}>
                <TCheckbox {...args} readOnly onChange={setCheckbox6} value={checkbox6}>
                    오렌지
                </TCheckbox>
                <TCheckbox {...args} readOnly onChange={setCheckbox6} value={checkbox6}>
                    Orange
                </TCheckbox>
            </ItemContainer>

            <ItemContainer label={`Indeterminate(${checkbox5Indeterminate}) (value: ${checkbox5.toString()}) : `}>
                <TCheckbox
                    {...args}
                    onChange={onChangeCheckbox5}
                    value={checkbox5}
                    indeterminate={checkbox5Indeterminate}
                >
                    수박
                </TCheckbox>
                <TCheckbox
                    {...args}
                    onChange={onChangeCheckbox5}
                    value={checkbox5}
                    indeterminate={checkbox5Indeterminate}
                >
                    WaterMelon
                </TCheckbox>
            </ItemContainer>
        </Container>
    );
};

export const Default: Story = {
    render: NormalTemplate,
};

// endregion

// region [Validation]

const ValidationTemplate = (args: TCheckboxProps) => {
    const [checkbox1, setCheckbox1] = useState<TCheckboxValue>(false);
    const [checkbox2, setCheckbox2] = useState<TCheckboxValue>(false);
    const [checkbox1Ref, checkbox2Ref] = useRefs(2);

    function validateAll() {
        checkbox1Ref.current.validate();
        checkbox2Ref.current.validate();
    }

    return (
        <>
            <TCheckbox
                {...args}
                ref={checkbox1Ref}
                onChange={setCheckbox1}
                value={checkbox1}
                rules={[TValidatorRule.equal(true, '약관에 동의하지 않으시면 서비스 이용이 불가합니다')]}
                successMessage={'약관에 동의하셨습니다'}
            >
                약관을 읽고, 동의합니다. (성공, 실패 메시지 표시)
            </TCheckbox>
            <br />

            <TCheckbox
                {...args}
                ref={checkbox2Ref}
                onChange={setCheckbox2}
                value={checkbox2}
                rules={[TValidatorRule.equal(true, '약관에 동의하지 않으시면 서비스 이용이 불가합니다')]}
            >
                약관을 읽고, 동의합니다. (실패 메시지 표시)
            </TCheckbox>
            <br />
            <TButton main onClick={validateAll}>
                회원 가입
            </TButton>
        </>
    );
};

export const Validation: Story = {
    render: ValidationTemplate,
    args: {
        lazy: false,
    },
};

export const LazyValidation = {
    render: ValidationTemplate,
    args: {
        lazy: true,
    },
};

// endregion
