import RegionalLandingPage from '@/components/seo/RegionalLandingPage';
import { regionalSeoData } from '@/data/regionalSeo';

const data = regionalSeoData.find((r) => r.slug === 'sao-paulo')!;

const EngenhariaSaoPaulo = () => <RegionalLandingPage data={data} />;

export default EngenhariaSaoPaulo;
