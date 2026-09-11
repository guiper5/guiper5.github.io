import { useEffect, useLayoutEffect, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

/* Posição de rolagem por entrada do histórico (location.key) */
const positions = new Map<string, number>();

/**
 * Leva a página ao topo a cada troca de rota. Links com âncora (/#secao)
 * ficam por conta da página de destino, e voltar/avançar do navegador
 * restaura a posição em que o usuário estava naquela página.
 */
const ScrollToTop = () => {
  const { key, pathname, hash } = useLocation();
  const navigationType = useNavigationType();
  const currentKey = useRef(key);

  useEffect(() => {
    const save = () => positions.set(currentKey.current, window.scrollY);
    window.addEventListener('scroll', save, { passive: true });
    return () => window.removeEventListener('scroll', save);
  }, []);

  useLayoutEffect(() => {
    currentKey.current = key;

    if (navigationType === 'POP') {
      const saved = positions.get(key);
      if (saved !== undefined) window.scrollTo({ top: saved, left: 0, behavior: 'instant' });
      return;
    }

    if (!hash) window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [key, pathname, hash, navigationType]);

  return null;
};

export default ScrollToTop;
