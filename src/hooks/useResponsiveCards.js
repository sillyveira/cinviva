import { useState, useEffect } from 'react';

/**
 * Hook customizado para determinar quantos cards exibir por view
 * baseado no tamanho da tela
 * @returns {number} Número de cards por view
 */
export function useResponsiveCards() {
  const [cardsPerView, setCardsPerView] = useState(1);

  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth;
      
      if (width < 640) {
        // Mobile: 1 card
        setCardsPerView(1);
      } else if (width >= 640 && width < 768) {
        // SM: 2 cards
        setCardsPerView(2);
      } else if (width >= 768 && width < 1024) {
        // MD: 3 cards
        setCardsPerView(3);
      } else {
        // LG+: 4 cards
        setCardsPerView(4);
      }
    };

    // Atualiza na montagem
    updateCardsPerView();

    // Adiciona listener para resize
    window.addEventListener('resize', updateCardsPerView);

    // Cleanup
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  return cardsPerView;
}
