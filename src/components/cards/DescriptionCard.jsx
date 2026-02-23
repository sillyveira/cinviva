import React from 'react'
import Card from '../Card'
import { Typography } from '../Typography'
import { MapPin } from '../icons'

export default function DescriptionCard({
  description = "",
  location = "",
  className = ""
}
) {
  return (
    <Card className={className}>
      <div className="md:max-h-[280px] md:overflow-y-auto">
        <Typography tag={"p"} size={"medium"} weight={"regular"}>
          {description}
        </Typography>
        <div className='flex flex-row gap-2 items-center border-t border-gray-100 pt-2'>
            <MapPin />
            <Typography tag={"p"} size={"medium"} weight={"regular"} className="text-gray-500">
            {location}
            </Typography>
        </div>
    </Card>
  )
}
