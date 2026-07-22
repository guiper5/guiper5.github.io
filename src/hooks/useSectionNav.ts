import { useNavigate, useLocation } from 'react-router-dom';

/**
 * Navega até uma âncora da home. Na própria home faz scroll direto;
 * em qualquer outra rota (ex.: páginas regionais de SEO) leva o usuário
 * até "/" com o hash certo, já que o id não existe fora da home.
 */
export function useSectionNav() {
  const navigate = useNavigate();
  const location = useLocation();

  return (id: string) => {
    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`/#${id}`);
    }
  };
}
