import React from "react";
import Card from "./Card";
import { IconTitle } from "./IconTitle";
import { Star } from "./icons";
import HighlightsCollection from "./HighlightsCollection";

/**
 * Componente de Card para destaques do mercado:
 * Usado para mostrar os destaques de um mercado.
 ** @param {Object} props
 * @param {Array<{id: number, image: any, description: string, icon: import("react").ElementType, title: string, size?: string}>} props.highlist - Array contendo o objeto com os elementos de um destaque.
 * @returns 
 */


export default function HighlightsCard({ highlists }) {
    return (
        <div>
            <Card className="!max-w-full w-full overflow-hidden">
                <IconTitle title="Destaques do mercado" icon={Star} />
                <HighlightsCollection highlists={highlists} />
            </Card>
        </div>
    )
}