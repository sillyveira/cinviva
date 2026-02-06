export function Typography(values){
    const {tag, size, weight, children, className} = values;

    const TagOptions = tag || 'p';

    // Variações de tamanhos
    const sizeOptions = {
        xsmall: 'text-xsmall',
        small: 'text-small',     
        body: 'text-body',       
        display: 'text-display', 
        large: 'text-large',
    };

    // Variações de tamanhos para cards
    const sizeOptionsCard = {
        xsmall: 'text-[14px] leading-[21px]',
        small: 'text-[16px] leading-[24px]',     
        body: 'text-[18px] leading-[28.8px]',       
        display: 'text-[48px] leading-[57.6px]', 
        large: 'text-[64px] leading-[70.4px]',
    };

    const weightOptions = {
        regular: 'font-regular',
        medium: 'font-medium',
        bold: 'font-bold',
    };

    // Usar variação card se o tamanho existir em sizeOptionsCard, senão usar a padrão
    const selectedSizeOption = size && sizeOptionsCard[size] ? sizeOptionsCard[size] : sizeOptions[size];
    
    return (<TagOptions className = {`${className} ${selectedSizeOption} ${weightOptions[weight]}`}>{children}</TagOptions>)
}