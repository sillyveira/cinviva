import { useState } from 'react'
import { IconTitle } from '../components/IconTitle'
import { TagHolder } from '../components/TagHolder'
import { Typography } from '../components/Typography'
import {
  ArrowLeft,
 ArrowRight,
  Book,
  Calendar,
  ChevronDown,
  ChevronUp,
  Clock,
  ExternalLink,
  MapPin,
  Map,
  Market,
  Maximize,
  Search,
  ShoppingBag,
  SliderVertical,
  Star,
  Tag
} from '../components/icons';
import Card from '../components/Card';
import { Accordion } from '../components/Accordion'

export default function MainPage() {
  const [count, setCount] = useState(0)

  const exampleTags = [
    { text: 'Produtos Locais', variant: 'primary' },
    { text: 'Alimentos Orgânicos', variant: 'primary' },
    { text: 'Artesanato Comunitário', variant: 'secondary' },
    { text: 'Hortifruti Regional', variant: 'primary' },
    { text: 'Produtos Caseiros', variant: 'primary' },
    { text: 'Plantas Medicinais', variant: 'tertiary' },
    { text: 'Reciclados Criativos', variant: 'primary' },
    { text: 'Pães', variant: 'secondary' },
    { text: 'Pescados', variant: 'primary' },
  ];

  const mercadosData = [
    { id: 1, text: 'São José', imageSrc: 'https://annoyingthing.net/images/e/eb/Crazy_Frog_Standing.png' },
    { id: 2, text: 'Casa Amarela', imageSrc: 'https://annoyingthing.net/images/e/eb/Crazy_Frog_Standing.png' },
    { id: 3, text: 'Encruzilhada', imageSrc: 'https://annoyingthing.net/images/e/eb/Crazy_Frog_Standing.png' },
  ];

  const feirasData = [
    { id: 1, text: 'Feira de Boa Viagem' },
    { id: 2, text: 'Feira do Bom Jesus' },
  ];

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

      {/* Teste de font weights */}
      <div>
        <Typography tag="h2" size="small" weight="medium" className="mb-60">Font Weights:</Typography>
        <Typography tag="p" size="body" weight="regular">Regular (400)</Typography>
        <Typography tag="p" size="body" weight="medium">Medium (500)</Typography>
        <Typography tag="h1" size="display" weight="bold">Bold (700)</Typography>
      </div>

      {/* Teste do novo componente TagHolder */}
      <div className="mt-8 border border-dashed border-gray-300 p-4">
        <Typography size={"xsmall"} className="text-gray-400 mb-2">Área de teste do TagHolder:</Typography>
        
        {/* Exemplo de uso com múltiplas tags para testar a quebra de linha e variantes */}
        <TagHolder tags={exampleTags} />
      </div>

      {/* Card with all icons */}
      <div className="card">
        <Typography size={"small"} tag={"h2"} weight={"medium"} className="mb-2">Icons:</Typography>
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

      <div className="mt-8 border border-dashed border-gray-300 p-4 space-y-4">
        <p className="text-xsmall text-gray-400 mb-2">Teste do Accordion:</p>
        
        {/* Caso 1: Mercados (Com imagens) */}
        <Accordion 
          title="Mercados" 
          items={mercadosData} 
        />

        {/* Caso 2: Feiras (Sem imagens) */}
        <Accordion 
          title="Feiras Livres" 
          items={feirasData} 
        />
      </div>
    </>
  )
}
