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
      <div className="flex flex-col h-full">
        <div className="md:flex-1 md:overflow-y-auto md:min-h-0 mb-2">
          <Typography tag={"p"} size={"medium"} weight={"regular"}>
            {description}
          </Typography>
        </div>
        <div className='flex flex-row gap-2 items-center flex-shrink-0'>
          <MapPin />
          <Typography tag={"p"} size={"medium"} weight={"regular"} className="text-gray-500">
            {location}
          </Typography>
        </div>
      </div>
    </Card>
  )
}
