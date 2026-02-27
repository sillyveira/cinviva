import React from "react";

/**
 * Componente de destaque:
 * Feito para mostrar informações de um destaque do mercado (Como título, descrição e imagem).
 ** @param {Object} props
 * @param {any} props.image - O caminho para a imagem do destaque.
 * @param {React.ReactNode} props.children - Componente React para ser renderizado como título do destaque
 * @example
 * <Highlights>
 *      <IconTitle/>
 * </Highlights>
 * @param {string} props.description - Texto contendo a descrição do destaque
 * @param {string} props.alt - Texto alternativo para a imagem do destaque
 * @returns 
 */

export default function Highlights({image, children, description, alt}){
    return (
        <div className="
        flex flex-row shrink-0
        w-full
        p-2 md:p-2.5
        rounded-2xl
        border border-gray-200
        hover:shadow-md transition-shadow
        gap-2 md:gap-2.5
        ">
            {/* Imagem */}
            <div className="flex justify-center w-20 md:w-20 h-20 shrink-0">
                <img 
                    className="border-2 rounded-lg border-primary-default h-20 w-20 object-contain object-top" 
                    src={image}
                    alt={alt ? alt : ""} 
                />
            </div>
            
            {/* Conteúdo - Descrição e Título */}
            <div className="flex flex-col gap-1 w-full text-gray-700 text-xs md:text-xs">
                {children}
                <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">
                    {description}
                </p>
            </div>
        </div>
    )
}