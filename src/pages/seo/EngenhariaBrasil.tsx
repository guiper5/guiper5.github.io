import RegionalLandingPage from '@/components/seo/RegionalLandingPage';
import { regionalSeoData } from '@/data/regionalSeo';

const data = regionalSeoData.find((r) => r.slug === 'brasil')!;

const EngenhariaBrasil = () => <RegionalLandingPage data={data} />;

export default EngenhariaBrasil;
