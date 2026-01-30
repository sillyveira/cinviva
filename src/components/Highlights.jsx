import React from "react";

/**
 * 
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
        max-w-full h-max-min
        py-1 px-2
        max-sm:max-w-13/16
        md:max-w-2/5 lg:max-w-5/7 
        shadow-[4px_0px_8px_rgba(0,0,0,0.1)]
        gap-3 rounded-2xl
        mt-2 mb-2 ml-1 mr-2
        ">
            {/* Letras pequenas em desktop. Resolver durante desenvolvimento para versão desktop */}
            <div className="flex justify-center w-1/2 py-1">
                <img className="border-2 rounded-[3.1px] border-[#1474FF] h-full w-full" 
                src={image}
                alt={alt ? alt : ""} />
            </div>
            <div className="flex flex-col mb-2 text-[#464E5C] w-1/2 text-[10px]">
                {children}
                {description}
            </div>
        </div>
    )
}