import Card from '../Card'
import { ShoppingBag } from '../icons'
import { IconTitle } from '../IconTitle'
import { TagHolder } from '../TagHolder/'

export function ItemSell({ items = [] }){
    return(
     <Card>
        <div className="mb-4">
          <IconTitle icon={ShoppingBag} title="O que é vendido"/>
        </div>
        <TagHolder
            tags={items.map(item => ({ text: item }))} 
        />
     </Card>   
    )
}