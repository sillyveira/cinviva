import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

/**
 * EventCarousel Component
 * Carrossel infinito que desliza múltiplos cards por vez
 * @param {Object} props
 * @param {Array<React.ReactNode>} props.children - Cards a renderizar
 * @param {number} [props.cardsPerView=4] - Cards visíveis por vez
 * @param {number} [props.autoScrollInterval=5000] - Intervalo do scroll em ms
 * @param {string} [props.className]
 */

export default function EventCarousel({
    children,
    cardsPerView = 4,
    autoScrollInterval = 5000,
    className = ''
}) {

    const [currentIndex, setCurrentIndex] = useState(0)
    const cardArray = React.Children.toArray(children)
    const totalPages = Math.ceil(cardArray.length / cardsPerView)

    // scroll: a cada intervalo, avança para a próxima página
    useEffect(() => {
        if (autoScrollInterval <= 0 || totalPages <= 1) return

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % totalPages)
        }, autoScrollInterval)

        return () => clearInterval(interval)
    }, [totalPages, autoScrollInterval])

    // Seleciona os cards para mostrar na página atual
    const startIndex = currentIndex * cardsPerView
    const currentCards = []
    for (let i = 0; i < cardsPerView; i++) {
        currentCards.push(cardArray[(startIndex + i) % cardArray.length])
    }

    return (
        <div className={`w-full flex flex-col gap-4 ${className}`}>
            {/* Container do carrossel*/}
            <div className="w-full overflow-hidden rounded-lg">
                <div className="flex gap-4">
                    {/* Renderiza cada card */}
                    {currentCards.map((card, idx) => (
                        <div
                            key={idx}
                            style={{
                                // Largura = (100% - gaps) ÷ número de cards
                                width: `calc((100% - ${(currentCards.length - 1) * 16}px) / ${currentCards.length})`
                            }}
                            className="shrink-0"
                        >
                            {card}
                        </div>
                    ))}
                </div>
            </div>

            {/* Bolinhas indicadoras*/}
            {totalPages > 1 && (
                <div className="flex justify-center gap-2">
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-2.5 rounded-full transition-all duration-300 ${
                                index === currentIndex
                                    ? 'bg-primary-default w-7'
                                    : 'bg-gray-300 hover:bg-gray-400 w-2.5'
                            }`}
                            aria-label={`Página ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}


EventCarousel.propTypes = {
    children: PropTypes.node.isRequired,
    cardsPerView: PropTypes.number,
    autoScrollInterval: PropTypes.number,
    className: PropTypes.string
}
