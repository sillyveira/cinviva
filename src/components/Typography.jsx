export function Typography(values){
    const {Tag, Size, Weight, children} = values;

    const TagOptions = Tag || 'p';

    const SizeOptions = {
        xsmall: 'text-xsmall',
        small: 'text-small',     
        body: 'text-body',       
        display: 'text-display', 
        large: 'text-large',
    };
    const WeightOptions = {
        regular: 'font-regular',
        medium: 'font-medium',
        bold: 'font-bold',
    }
    
    return (<TagOptions className = {`${SizeOptions[Size]} ${WeightOptions[Weight]}`}>{children}</TagOptions>)
}