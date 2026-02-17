import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TagHolder } from '../components/TagHolder';
import { Typography } from '../components/Typography';
import { Accordion } from '../components/Accordion';
import MapCard from '../components/cards/MapCard';
import ArrowLeft from '../components/icons/ArrowLeft';
import ArrowRight from '../components/icons/ArrowRight';

// Importações de Imagens de Mercados
import mercadoSaoJoseImg from '../assets/Mercados/mercadoSaoJoseImg.jpg';
import mercadoCasaAmarelaImg from '../assets/Mercados/mercadoCasaAmarelaImg.jpg';
import mercadoEncruzilhadaImg from '../assets/Mercados/mercadoEncruzilhadaImg.jpg';
import mercadoBeberibeImg from '../assets/Mercados/mercadoBeberibeImg.jpeg';
import mercadoNovaDescobertaImg from '../assets/Mercados/mercadoNovaDescobertaImg.webp';
import mercadoBoaVistaImg from '../assets/Mercados/mercadoBoaVistaImg.jpg';
import mercadoMadalenaImg from '../assets/Mercados/mercadoMadalena.jpg';
import mercadoCordeiroImg from '../assets/Mercados/mercadoCordeiroImg.jpg';

export default function MainPage() {
  const navigate = useNavigate();

  // Função para converter nome do mercado em slug de URL
  const createSlug = (text) => {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Remove acentos
      .replace(/\s+/g, ''); // Remove espaços
  };

  const tags = [
    { id: 1, text: 'Cultura', variant: 'primary' },
    { id: 2, text: 'Lazer', variant: 'primary' },
    { id: 3, text: 'Serviços', variant: 'primary' },
    { id: 4, text: 'Comida', variant: 'primary' },
  ];

  const mercadosData = [
    { 
      id: 1, 
      text: 'São José', 
      imageSrc: mercadoSaoJoseImg,
      onClick: () => navigate('/mercados/saojose')
    },
    { 
      id: 2, 
      text: 'Casa Amarela', 
      imageSrc: mercadoCasaAmarelaImg,
      onClick: () => navigate('/mercados/casaamarela')
    },
    { 
      id: 3, 
      text: 'Encruzilhada', 
      imageSrc: mercadoEncruzilhadaImg,
      onClick: () => navigate('/mercados/encruzilhada')
    },
    { 
      id: 5, 
      text: 'Beberibe', 
      imageSrc: mercadoBeberibeImg,
      onClick: () => navigate('/mercados/beberibe')
    },
    { 
      id: 6, 
      text: 'Nova Descoberta', 
      imageSrc: mercadoNovaDescobertaImg,
      onClick: () => navigate('/mercados/novadescoberta')
    },
    { 
      id: 7, 
      text: 'Boa Vista', 
      imageSrc: mercadoBoaVistaImg,
      onClick: () => navigate('/mercados/boavista')
    },
    { 
      id: 8, 
      text: 'Madalena', 
      imageSrc: mercadoMadalenaImg,
      onClick: () => navigate('/mercados/madalena')
    },
    { 
      id: 9, 
      text: 'Cordeiro', 
      imageSrc: mercadoCordeiroImg,
      onClick: () => navigate('/mercados/cordeiro')
    }

  ];

  const feirasData = [
    { id: 1, text: 'Feira de Boa Viagem' },
    { id: 2, text: 'Feira do Bom Jesus' },
  ];

    const markers = [
    {
      title: "Mercado São José",
      position: [-8.068519, -34.877681],
      image:
        "",
      description: "Mercado histórico do Recife",
    },
    {
      title: "Mercado da Madalena",
      position: [-8.0525, -34.908611],
      image: "",
      description: "Mercado tradicional do bairro da Madalena",
    },
    {
      title: "Mercado da Encruzilhada",
      position: [-8.0368, -34.89225],
      image: "",
      description: "Mercado público da Encruzilhada",
    },
    {
      title: "Mercado de Casa Amarela",
      position: [-8.026667, -34.918056],
      image: "",
      description: "Mercado tradicional de Casa Amarela",
    },
    {
      title: "Mercado da Boa Vista",
      position: [-8.055278, -34.8975],
      image: "",
      description: "Mercado público do bairro da Boa Vista",
    },
    {
      title: "Mercado do Cordeiro",
      position: [-8.051944, -34.921389],
      image: "",
      description: "Mercado público do Cordeiro",
    },
    {
      title: "Mercado de Beberibe",
      position: [-8.002586325911954, -34.89718131991167],
      image: "",
      description: "Mercado público de Beberibe",
    },
    {
      title: "Mercado de Nova Descoberta",
      position: [-8.000356841203415, -34.9226803922649],
      image: "",
      description: "Mercado público de Nova Descoberta",
    },
  ];

  return (
    <div className="bg-white min-h-screen p-6">
      {/* Botão Voltar */}
      <button className="flex items-center gap-2 text-primary-default bg-transparent border-none outline-none hover:opacity-80 transition-opacity mb-4">
        <ArrowLeft />
        <Typography size="body" weight="medium" className="text-primary-default">
          Voltar
        </Typography>
      </button>

      {/* Imagem Placeholder */}
      <img 
        src="/convivaLogo.png" 
        alt="Logo Conviva" 
        className="w-full max-w-[346px] h-auto rounded-lg mb-4"
      />

      {/* TagHolder */}
      <TagHolder tags={tags} className="mb-6" />

      {/* Texto Descrição */}
      <Typography size="body" weight="regular" className="text-gray-800 mb-6">
        A Conviva administra 42 equipamentos, dentre eles estão os pátios de feiras, as feiras livres, os centros comerciais, as praças de alimentação, os centros de comércio popular e os mercados públicos, como os localizados na Boa Vista, Madalena, Encruzilhada, Cordeiro, São José e Casa Amarela. A Autarquia também executa manutenção, revitalização e obras nesses espaços, que são centros de cultura, história e culinária regionais.
      </Typography>

      {/* Botão Ir ao site do Conviva */}
      <button className="flex items-center gap-2 bg-white border px-6 py-3 rounded-full hover:bg-primary-medium transition-colors mb-6">
        <Typography size="body" weight="medium" className="text-primary-default">
          Ir ao site do Conviva
        </Typography>
        <ArrowRight />
      </button>

      {/* Texto Mapa dos Mercados */}
      <Typography size="body" weight="bold" className="text-gray-800 mb-4">
        Mapa dos Mercados do Recife
      </Typography>

      {/* Componente Mapa */}
      <div className="mb-4">
        <MapCard 
          markers={markers}
          googleMapsLink="https://maps.google.com"
          zoom={12}
          withCard={false}
          width = 'w-90'
          height = 'h-58'
        />
      </div>

      {/* Texto azul centralizado */}
      <div className="text-center mb-6">
        <Typography size="body" weight="medium" className="text-primary-default cursor-pointer hover:underline">
          Ver o Mapa do Recife
        </Typography>
      </div>

      {/* Accordions */}
      <div className="space-y-4">
        <Accordion title="Mercados" items={mercadosData} />
        <Accordion title="Feiras" items={feirasData} />
      </div>
    </div>
  );
}
