import { FC } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

import PageContainer from './components/PageContainer/PageContainer';

const App: FC = () => (
    <PageContainer />
);

export default App;
