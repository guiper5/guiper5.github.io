import { useParams } from 'react-router-dom';
import CityLandingPage from '@/components/seo/CityLandingPage';
import { getCityLanding } from '@/data/cityLandings';
import NotFound from '@/pages/NotFound';

const CidadeRoute = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? getCityLanding(slug) : undefined;

  if (!data) return <NotFound />;

  return <CityLandingPage data={data} />;
};

export default CidadeRoute;
