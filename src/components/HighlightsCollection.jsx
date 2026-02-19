import React, { useRef, useState, useEffect } from "react";
import Highlights from "./Highlights";
import { IconTitle } from "./IconTitle";
import ArrowLeft from "./icons/ArrowLeft";
import ArrowRight from "./icons/ArrowRight";

/**
 * Componente de scroll para destaques:
 * Usado para agrupar um ou mais componentes de destaque em scroll horizontal.
 ** @param {Object} props
 * @param {Array<{id: number, image: any, description: string, icon: import("react").ElementType, title: string, size?: string}>} props.highlist - Array contendo o objeto com os elementos de um destaque.
 * @returns 
 */

export default function HighlightsCollection({highlists}){
    const highlistSize = highlists.length;
    const scrollContainerRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    // Verifica se pode fazer scroll
    const checkScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
        }
    };

    useEffect(() => {
        checkScroll();
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', checkScroll);
            window.addEventListener('resize', checkScroll);
        }
        return () => {
            if (container) {
                container.removeEventListener('scroll', checkScroll);
            }
            window.removeEventListener('resize', checkScroll);
        };
    }, [highlists]);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = 300;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="relative">
            {/* Seta Esquerda */}
            {canScrollLeft && highlistSize > 1 && (
                <button
                    onClick={() => scroll('left')}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110 active:scale-95"
                    aria-label="Rolar para esquerda"
                >
                    <ArrowLeft />
                </button>
            )}

            {/* Container de scroll */}
            <div
                ref={scrollContainerRef}
                className={`flex flex-row overflow-x-auto w-full 
                ${highlistSize === 1 ? 'justify-center' : 'justify-start'} 
                [scrollbar-width:thin] [&::-webkit-scrollbar]:h-2`}
            >
                {highlists.map((highlight)=> (
                    <Highlights
                        key={highlight.id}
                        image={highlight.image}
                        description={highlight.description}
                    >
                        <IconTitle 
                            icon={highlight.icon} 
                            title={highlight.title} 
                            className='flex-row-reverse justify-between' 
                            size="wrap"
                            iconSize="18"
                        />
                    </Highlights>
                ))}
            </div>

            {/* Seta Direita */}
            {canScrollRight && highlistSize > 1 && (
                <button
                    onClick={() => scroll('right')}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110 active:scale-95"
                    aria-label="Rolar para direita"
                >
                    <ArrowRight />
                </button>
            )}
        </div>
    )
}