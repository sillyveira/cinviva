import { Clock } from '../icons'
import { IconTitle } from '../IconTitle'
import Card from '../Card'
import { Typography } from '../Typography'

export function Schedules({ schedules, className = '' }) {
    return (
        <Card className={className}>
            <IconTitle icon={Clock} title='Horários de Funcionamento'></IconTitle>
            <div className="mt-4 space-y-2 sm:space-y-3">
                {schedules.map((item, index) => (
                    /*possível troca de responsividade*/
                    <div key={index} className="flex flex-row justify-between items-center gap-4">
                        <Typography
                            tag="span"
                            size="small"
                            weight="bold"
                            className={item.isSpecial ? "text-primary-default" : "text-gray-800"}
                        >
                            {item.day}
                        </Typography>
                        <Typography
                            tag="span"
                            size="small"
                            weight="bold"
                            className="text-gray-500 text-right whitespace-nowrap"
                        >
                            {item.time}
                        </Typography>
                    </div>
                ))}
            </div>
        </Card>
    )
}