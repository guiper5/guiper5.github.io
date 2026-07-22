import { useParams } from 'react-router-dom';
import GenericSeoLandingPage from '@/components/seo/GenericSeoLandingPage';
import { getSeoLanding } from '@/data/seoLanding';
import NotFound from '@/pages/NotFound';

const DocumentacaoRoute = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? getSeoLanding('documentacao', slug) : undefined;
  if (!data) return <NotFound />;
  return <GenericSeoLandingPage data={data} />;
};

export default DocumentacaoRoute;
