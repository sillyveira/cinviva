import { useState } from 'react'
import { IconTitle } from '../components/IconTitle'
import { TagHolder } from '../components/TagHolder'
import { Typography } from '../components/Typography'
import EventCard from '../components/EventCard';
import EventCarousel from '../components/EventCarousel';
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
import HighlightsCard from '../components/HighlightsCard';
import Bolo from '../assets/Destaques/boloDeRoloImg.png'
import Charque from '../assets/Destaques/charqueImg.jpg'

const mockHighlights = [
    {id: 1, image: Bolo, description: "Doce tradicional pernambucano, feito artesanalmente e muito procurado no mercado.", icon: Tag, title: "Bolo de rolo", size: "xsmall"},
    {id: 2, image: Charque, description: "Prato típico, conhecido pelo sabor marcante e preparo tradicional.", icon: Tag, title: "Macaxeira com charque.", size: "xs"}
  ]

export default function TestPage() {
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

      <div className="mt-8 border border-dashed border-gray-300 p-4 space-y-4">
        <p className="text-xsmall text-gray-400 mb-2">Teste do Card de Destaques:</p>
        <HighlightsCard highlists={mockHighlights}/>  
      </div>

            {/* Teste do EventCarousel */}
      <div className="mb-8">
        <h2 className="text-small font-medium mb-4">EventCarousel Component:</h2>
        <EventCarousel cardsPerView={4} autoScrollInterval={5000}>
          <EventCard
            date="QUA, 04 MAI"
            time="18:00"
            title="Poesia do Recife"
            location="Nome do local"
          />
          <EventCard
            imageUrl="https://i.pinimg.com/1200x/84/be/bc/84bebccc63b8a4e76ba3a846aaabaa1a.jpg"
            imageAlt="Evento - Oficina Criativa"
            date="SEX, 06 MAI"
            time="14:30"
            title="Oficina Criativa de Artesanato"
            location="Espaço Comunitário Centro"
          />
          <EventCard
            imageUrl="https://i.pinimg.com/736x/12/fe/b5/12feb5724268fa74bb5a4ba7ecb73b75.jpg"
            imageAlt="Evento - Mercado Orgânico"
            date="SÁB, 07 MAI"
            time="08:00"
            title="Mercado Orgânico Semanal"
            location="Praça da República"
          />
          <EventCard
            imageUrl='https://i.pinimg.com/1200x/1c/83/56/1c83565b93e8308a604237bd0ea7ce19.jpg'
            imageAlt='Evento - Feira de Livros'
            date="DOM, 08 MAI"
            time="10:00"
            title="Feira de Livros Usados"
            location="Biblioteca Central"
          />
          <EventCard
            imageUrl="https://i.pinimg.com/1200x/84/be/bc/84bebccc63b8a4e76ba3a846aaabaa1a.jpg"
            imageAlt="Evento - Show Musical"
            date="SEG, 09 MAI"
            time="20:00"
            title="Show Musical ao Vivo"
            location="Anfiteatro do Recife"
          />
          <EventCard
            imageUrl='https://i.pinimg.com/736x/9e/bc/dc/9ebcdc8102c42b5dc1d8246c9e6eb505.jpg'
            imageAlt='Evento - Fotografia'
            date="TER, 10 MAI"
            time="15:00"
            title="Workshop de Fotografia"
            location="Estúdio Criativo"
          />
          <EventCard
            imageUrl="https://i.pinimg.com/736x/5f/fe/02/5ffe02ca4d2e0302f803a6e9a153baaa.jpg"
            imageAlt="Evento - Yoga no Parque"
            date="QUA, 11 MAI"
            time="07:00"
            title="Yoga no Parque"
            location="Parque da Jaqueira"
          />
        </EventCarousel>
      </div>

      {/* Teste do EventCard */}
      <div className='mb-8'>
        <h2 className="text-small font-medium mb-4">EventCard Component:</h2>
        <EventCard
          imageUrl="https://i.pinimg.com/736x/5f/fe/02/5ffe02ca4d2e0302f803a6e9a153baaa.jpg"
          imageAlt="Evento - Yoga no Parque"
          date="QUA, 11 MAI"
          time="07:00"
          title="Yoga no Parque"
          location="Parque da Jaqueira"
        />
      </div>
    </>
  )
}
