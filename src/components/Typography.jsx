export function Typography(values){
    const {tag, size, weight, children, className} = values;

    const TagOptions = tag || 'p';

    const sizeOptions = {
        xsmall: 'text-xsmall',
        small: 'text-small',     
        body: 'text-body',       
        display: 'text-display', 
        large: 'text-large',
    };
    const weightOptions = {
        regular: 'font-regular',
        medium: 'font-medium',
        bold: 'font-bold',
    }
    
    return (<TagOptions className = {`${className} ${sizeOptions[size]} ${weightOptions[weight]}`}>{children}</TagOptions>)
}