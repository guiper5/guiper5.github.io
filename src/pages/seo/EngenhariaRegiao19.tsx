import RegionalLandingPage from '@/components/seo/RegionalLandingPage';
import { regionalSeoData } from '@/data/regionalSeo';

const data = regionalSeoData.find((r) => r.slug === 'regiao-19')!;

const EngenhariaRegiao19 = () => <RegionalLandingPage data={data} />;

export default EngenhariaRegiao19;
