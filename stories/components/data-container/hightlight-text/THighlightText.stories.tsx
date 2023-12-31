import {Meta, StoryObj} from '@storybook/react';
import {useState} from 'react';
import THighlightText from '@/components/data-container/highlight-text/THighlightText';
import TTextField from '@/components/input/text-field/TTextField';


const meta: Meta<typeof THighlightText> = {
    title: 'DataContainer/THighlightText',
    component: THighlightText,

};
export default meta;

type Story = StoryObj<typeof THighlightText>;


const Template = () => {
    const dummyText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s '
        + 'standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen'
        + ' book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        + ' It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with'
        + ' desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ';


    const koreanDummyText = 'SKT Container Platform은 Decapod 기술을 기반으로, Kubernetes Cluster와 Kubernetes를 운영하기 위한 '
        + 'Add-on (CNI, CSI, Ingress Controller등), '
        + '그리고 다양한 서비스들(Monitoring, Service Mesh, App CICD, AI Ops등)을 All-in-One으로 제공하는 통합 컨테이너 관리 기능을 제공합니다.'
        + '더 나아가서, 하이브리드 및 멀티 클라우드 환경에서 사용자들이 자신이 원하는 형태의 '
        + '다양한 CaaS (Container as a Service)를 제공할 수 있는 서비스 플랫폼으로 진화해가고 있습니다.';

    const [searchText, setSearchText] = useState('');

    return (<div style={{lineHeight: 1.5}}>
        <TTextField onChange={setSearchText} value={searchText} placeholder={'하이라이트 할 텍스트를 입력해주세요'} style={{marginBottom: '24px'}}/>
        <THighlightText keyword={searchText}>{dummyText}</THighlightText>
        <br/>
        <br/>
        <THighlightText keyword={searchText}>{koreanDummyText}</THighlightText>
    </div>);
};


export const Default: Story = {
    render: Template,
};
