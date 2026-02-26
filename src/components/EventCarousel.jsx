import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ArrowLeft from "./icons/ArrowLeft";
import ArrowRight from "./icons/ArrowRight";

/**
 * EventCarousel Component
 * Carrossel infinito que desliza múltiplos cards por vez
 * @param {Object} props
 * @param {Array<React.ReactNode>} props.children - Cards a renderizar
 * @param {number} [props.cardsPerView=4] - Cards visíveis por vez
 * @param {number} [props.autoScrollInterval=5000] - Intervalo do scroll em ms
 * @param {string} [props.className]
 * @param {boolean} [props.showArrows=true] - Mostra setas de navegação
 * @param {string} [props.height="h-105"] - Altura do carrossel
 */

const MAX_DOTS_MOBILE = 5; // Máximo de bolinhas visíveis no mobile

export default function EventCarousel({
  children,
  cardsPerView = 4,
  autoScrollInterval = 5000,
  className = "",
  showArrows = true,
  height = "h-105",
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [pause, setPause] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
  const cardArray = React.Children.toArray(children);
  const totalPages = Math.ceil(cardArray.length / cardsPerView);

  // Detecta mudanças no tamanho da tela
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // scroll: a cada intervalo, avança para a próxima página. se estiver pausado, tira o timer.
  useEffect(() => {
    if (autoScrollInterval <= 0 || totalPages <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPages);
    }, autoScrollInterval);
    
    if (pause) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [totalPages, autoScrollInterval, pause]);

  // Calcula o range de bolinhas a mostrar no mobile
  const getVisibleDots = () => {
    if (!isMobile || totalPages <= MAX_DOTS_MOBILE) {
      // Desktop ou menos bolinhas que o máximo: mostra todas
      return { start: 0, end: totalPages };
    }

    // Mobile com muitas bolinhas: calcula o range centralizado
    const halfWindow = Math.floor(MAX_DOTS_MOBILE / 2);
    let start = currentIndex - halfWindow;
    let end = start + MAX_DOTS_MOBILE;

    // Ajusta se sair do range válido
    if (start < 0) {
      start = 0;
      end = MAX_DOTS_MOBILE;
    } else if (end > totalPages) {
      end = totalPages;
      start = Math.max(0, end - MAX_DOTS_MOBILE);
    }

    return { start, end };
  };

  // Funções de navegação. Pausa quando clica e volta ao automático em 5 segundos.
  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
    setPause(true);
    setTimeout(() => {
        setPause(false)    
    }, 5000);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
    setPause(true);
    setTimeout(() => {
        setPause(false)    
    }, 5000);
  };

  // Seleciona os cards para mostrar na página atual
  const startIndex = currentIndex * cardsPerView;
  const currentCards = [];
  for (let i = 0; i < cardsPerView; i++) {
    currentCards.push(cardArray[(startIndex + i) % cardArray.length]);
  }

  return (
    <div className={`w-full flex flex-col gap-4 ${className}`}>
      {/* Container do carrossel com altura fixa e setas */}
      <div className="relative w-full">
        {/* Seta Esquerda */}
        {totalPages > 1 && showArrows && (
          <button
            onClick={goToPrev}
            className="absolute left-2 sm:left-0 top-24 sm:top-1/2 sm:-translate-y-1/2 z-10 bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 active:scale-95"
            aria-label="Página anterior"
          >
            <ArrowLeft />
          </button>
        )}

        {/* Container dos cards */}
        <div className={`w-full overflow-hidden rounded-lg ${height}`}>
          <div className="flex gap-4 h-full">
            {/* Renderiza cada card */}
            {currentCards.map((card, idx) => (
              <div
                key={idx}
                style={{
                  // Largura = (100% - gaps) ÷ número de cards
                  width: `calc((100% - ${(currentCards.length - 1) * 16}px) / ${currentCards.length})`,
                }}
                className="shrink-0"
              >
                {card}
              </div>
            ))}
          </div>
        </div>

        {/* Seta Direita */}
        {totalPages > 1 && showArrows && (
          <button
            onClick={goToNext}
            className="absolute right-2 sm:right-0 top-24 sm:top-1/2 sm:-translate-y-1/2 z-10 bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 active:scale-95"
            aria-label="Próxima página"
          >
            <ArrowRight />
          </button>
        )}
      </div>

      {/* Bolinhas indicadoras*/}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2">
          {(() => {
            const { start, end } = getVisibleDots();
            const displayDots = [];

            // Adiciona bolinhas no range calculado
            for (let index = start; index < end; index++) {
              displayDots.push(
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary-default w-7"
                      : "bg-gray-300 hover:bg-gray-400 w-2.5"
                  }`}
                  aria-label={`Página ${index + 1}`}
                />
              );
            }

            return displayDots;
          })()}
        </div>
      )}
    </div>
  );
}

EventCarousel.propTypes = {
  children: PropTypes.node.isRequired,
  cardsPerView: PropTypes.number,
  autoScrollInterval: PropTypes.number,
  className: PropTypes.string,
  showArrows: PropTypes.bool,
  height: PropTypes.string,
};
