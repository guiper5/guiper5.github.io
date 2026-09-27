import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { track } from '@/lib/analytics';

/**
 * Envia page_view a cada troca de rota da SPA.
 * Fica depois de <Routes> para rodar após o useSEO da página, que atualiza
 * document.title no mesmo ciclo de efeitos.
 */
const AnalyticsRouteTracker = () => {
  const { pathname, search } = useLocation();
  const lastPath = useRef<string | null>(null);

  useEffect(() => {
    const path = pathname + search;
    if (lastPath.current === path) return;
    lastPath.current = path;

    track('page_view', {
      page_path: path,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname, search]);

  return null;
};

export default AnalyticsRouteTracker;
