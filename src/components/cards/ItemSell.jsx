import Card from '../Card'
import { ShoppingBag } from '../icons'
import { IconTitle } from '../IconTitle'
import { TagHolder } from '../TagHolder/'

export function ItemSell({ items = [] }){
    return(
     <Card>
        <IconTitle icon={ShoppingBag} title="O que é vendido"/>
        <TagHolder
            tags={items.map(item => ({ text: item }))} 
        />
     </Card>   
    )
}