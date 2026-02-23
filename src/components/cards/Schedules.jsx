import { Clock } from '../icons'
import { IconTitle } from '../IconTitle'
import Card from '../Card'
import { Typography } from '../Typography'

export function Schedules({ schedules }){
    return(
        <Card className="flex-1 h-full">
            <IconTitle icon={Clock} title='Horários de Funcionamento'></IconTitle>
            <div className="mt-2 pb-2 px-2 md:px-4">
                {schedules.map((item, index) => (
                    <div key={index} className="flex justify-between items-center px-0 py-1.5 border-b border-gray-100 last:border-b-0 gap-2"> 
                        <Typography 
                            tag="span" 
                            size="small" 
                            weight="bold"
                            className={item.isSpecial ? "text-primary-default text-xs whitespace-nowrap" : "text-gray-900 text-xs whitespace-nowrap"}
                        >
                            {item.day}
                        </Typography>
                        <Typography 
                            tag="span" 
                            size="small" 
                            weight="medium"
                            className="text-gray-400 text-xs whitespace-nowrap"
                        >
                            {item.time}
                        </Typography>
                    </div>
                ))}
            </div>
        </Card>
    )
}