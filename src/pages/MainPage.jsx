import { useState } from 'react'
import {
  ArrowLeft,
 ArrowRight,
  Book,
  Calendar,
  ChevronDown,
  ChevronUp,
  Clock,
  ExternalLink,
  Map,
  MapPin,
  Market,
  Maximize,
  Search,
  ShoppingBag,
  SliderVertical,
  Star,
  Tag
} from '../components/icons';

export default function MainPage() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Teste de todas as cores primárias */}
      <div className="mb-8">
        <h2 className="text-small font-medium mb-2">Cores Primárias:</h2>
        <div className="flex gap-4">
          <div className="w-20 h-20 bg-primary-shine"></div>
          <div className="w-20 h-20 bg-primary-lightest"></div>
          <div className="w-20 h-20 bg-primary-light"></div>
          <div className="w-20 h-20 bg-primary-default"></div>
          <div className="w-20 h-20 bg-primary-medium"></div>
          <div className="w-20 h-20 bg-primary-dark"></div>
        </div>
      </div>

      {/* Teste de todas as cores secundárias */}
      <div className="mb-8">
        <h2 className="text-small font-medium mb-2">Cores Secundárias:</h2>
        <div className="flex gap-4">
          <div className="w-20 h-20 bg-secondary-light"></div>
          <div className="w-20 h-20 bg-secondary-default"></div>
          <div className="w-20 h-20 bg-secondary-medium"></div>
          <div className="w-20 h-20 bg-secondary-dark"></div>
        </div>
      </div>

      {/* Teste de tamanhos de fonte */}
      <div className="mb-8">
        <h2 className="text-small font-medium mb-2">Tamanhos de Fonte:</h2>
        <p className="text-xsmall">Extra Small (14px)</p>
        <p className="text-small">Small (16px)</p>
        <p className="text-body">Body (18px)</p>
        <p className="text-display">Display (48px)</p>
      </div>

      {/* Teste de font weights */}
      <div>
        <h2 className="text-small font-medium mb-2">Font Weights:</h2>
        <p className="text-body font-regular">Regular (400)</p>
        <p className="text-body font-medium">Medium (500)</p>
        <p className="text-body font-bold">Bold (700)</p>
      </div>

      {/* Card with all icons */}
      <div className="card">
        <h2 className="text-small font-medium mb-2">Icons:</h2>
        <div className="grid grid-cols-4 gap-4">
          <ArrowLeft />
          <ArrowRight />
          <Book />
          <Calendar />
          <ChevronDown />
          <ChevronUp />
          <Clock />
          <ExternalLink />
          <Map />
          <MapPin />
          <Market />
          <Maximize />
          <Search />
          <ShoppingBag />
          <SliderVertical />
          <Star />
          <Tag />
        </div>
      </div>
    </>
  )
}
