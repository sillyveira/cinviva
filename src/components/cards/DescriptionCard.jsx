import React, { useRef, useEffect, useState } from 'react'
import Card from '../Card'
import { Typography } from '../Typography'
import { MapPin } from '../icons'

export default function DescriptionCard({
    description = "",
    location = "",
    className = ""
}
) {
  const contentRef = useRef(null);
  const [hasOverflow, setHasOverflow] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      if (contentRef.current) {
        const isOverflowing = contentRef.current.scrollHeight > contentRef.current.clientHeight;
        setHasOverflow(isOverflowing);
      }
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);

    return () => window.removeEventListener('resize', checkOverflow);
  }, [description]);

  const locationElement = (
    <div className='flex flex-row gap-2 items-center'>
      <MapPin />
      <Typography tag={"p"} size={"medium"} weight={"regular"} className="text-gray-500">
        {location}
      </Typography>
    </div>
  );

  return (
    <Card className={className} ref={contentRef}>
        {hasOverflow && locationElement}
        <Typography tag={"p"} size={"medium"} weight={"regular"}>
            {description}
        </Typography>
        {!hasOverflow && locationElement}
        {hasOverflow && (
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t pointer-events-none" />
        )}
    </Card>
  )
}
