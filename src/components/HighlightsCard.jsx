import React from "react";
import Card from "./Card";
import { IconTitle } from "./IconTitle";
import { Star } from "./icons";
import HighlightsCollection from "./HighlightsCollection";

/**
 * 
 ** @param {Object} props
 * @param {Array<{id: number, image: any, description: string, icon: import("react").ElementType, title: string, size?: string}>} props.highlist - Array contendo o objeto com os elementos de um destaque.
 * @returns 
 */


export default function HighlightsCard({highlists}){
    return (
        <div>
            <Card>
                <IconTitle title="Destaques do mercado" icon={Star}/>
                <HighlightsCollection highlists={highlists}/>
            </Card>
        </div>
    )
}