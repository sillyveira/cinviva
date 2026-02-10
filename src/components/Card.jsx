import React from "react";
import PropTypes from "prop-types";

/**
 * Componente Card:
 * Envolve e renderiza componentes React para agrupá-los em uma moldura de card.
 ** @param {Object} props
 * @param {React.ReactNode} props.children - Componente(s) React a ser(em) renderizado(s) no card
 * @example
 * <Card>
 *  <Header/> - Opcional
 *  <Body/> - Obrigatório
 *  <Footer/> - Opcional
 * </Card>
 * @param {string} [props.classname] - Classes extras
 */

const Card = React.forwardRef(({ 
    children, 
    className=''
}, ref) => {

    return (
        <div 
            ref={ref}
            className={`
        relative
        flex grow justify-start 
        border border-[#6C707880] rounded-2xl 
        px-4 pt-2 pb-1 
        max-sm:max-w-full 
        md:max-w-2/5
        lg:max-w-2/6
        shadow-[0_3px_3px_rgba(0,0,0,0.2)]
        ${className}
        `}>
            <div className="flex flex-col">
                {React.Children.map(children, (child) => (
                    <div className="mb-2">
                        {child}
                    </div>
                ))}
            </div>
        </div>
    )
})

Card.displayName = 'Card';

Card.PropTypes = {
    children: (props, propName, componentName) => {
        const count = React.Children.count(props[propName]);

        if(count === 0) {
            return new Error(`${componentName} precisa de ao menos um componente para renderizar.`);
        }
        if(count > 3){
            return new Error(`${componentName} aceita no máximo três componentes para renderizar.`);
        }
    },
    className: PropTypes.string,
};

export default Card;