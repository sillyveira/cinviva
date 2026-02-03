import React from "react";
import Highlights from "./Highlights";
import { IconTitle } from "./IconTitle";

/**
 * Componente de scroll para destaques:
 * Usado para agrupar um ou mais componentes de destaque em scroll horizontal.
 ** @param {Object} props
 * @param {Array<{id: number, image: any, description: string, icon: import("react").ElementType, title: string, size?: string}>} props.highlist - Array contendo o objeto com os elementos de um destaque.
 * @returns 
 */

export default function HighlightsCollection({highlists}){
    const highlistSize = highlists.length
    return (
        <div className=
        {
        `flex flex-row overflow-y-auto w-max-full 
        ${highlistSize === 1 ? 'justify-center' : 'justify-start'} 
        [scrollbar-width: thin] [&::-webkit-scrollbar]:w-2`
        }>
            {highlists.map((highlight)=> (
                    <Highlights
                    key={highlight.id}
                    image={highlight.image}
                    description={highlight.description}>
                        <IconTitle 
                        icon={highlight.icon} 
                        title={highlight.title} 
                        className='flex-row-reverse justify-between' 
                        size="wrap"
                        iconSize="18">
                        </IconTitle>
                    </Highlights>
            ))}
        </div>
    )
}