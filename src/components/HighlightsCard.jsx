import React from "react";
import Card from "./Card";
import { IconTitle } from "./IconTitle";
import { Star } from "./icons";
import HighlightsCollection from "./HighlightsCollection";
import Highlights from "./Highlights";

/**
 * Componente de Card para destaques do mercado:
 * Usado para mostrar os destaques de um mercado.
 ** @param {Object} props
 * @param {Array<{id: number, image: any, description: string, icon: import("react").ElementType, title: string, size?: string}>} props.highlist - Array contendo o objeto com os elementos de um destaque.
 * @param {boolean} props.isGrid - Se true, exibe como grid vertical em vez de carrossel (padrão: false)
 * @returns 
 */


export default function HighlightsCard({highlists, isGrid = false}){
    return (
        <div>
            <Card>
                <IconTitle title="Destaques do mercado" icon={Star}/>
                {isGrid ? (
                    // Grid vertical de destaques
                    <div className="space-y-4">
                        {highlists.map((highlight) => (
                            <Highlights
                                key={highlight.id}
                                image={highlight.image}
                                description={highlight.description}
                                alt={highlight.title}
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
                ) : (
                    // Carrossel horizontal (padrão)
                    <HighlightsCollection highlists={highlists}/>
                )}
            </Card>
        </div>
    )
}