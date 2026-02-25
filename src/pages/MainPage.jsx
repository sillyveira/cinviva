import React from "react";
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/convivaLogo.png'
import { TagHolder } from "../components/TagHolder";
import { Typography } from "../components/Typography";
import { Accordion } from "../components/Accordion";
import MapCard from '../components/cards/MapCard';
import { ExternalLink, ArrowRight } from "../components/icons";
import ArrowLeft from "../components/icons/ArrowLeft";
import ButtonIcon from "../components/ButtonIcon";
import { IconTitle } from "../components/IconTitle";
import DecorativeLine from "../components/DecorativeLine";

// Importações de Imagens de Mercados
import mercadoSaoJoseImg from '../assets/Mercados/mercadoSaoJoseImg.jpg';
import mercadoCasaAmarelaImg from '../assets/Mercados/mercadoCasaAmarelaImg.jpg';
import mercadoEncruzilhadaImg from '../assets/Mercados/mercadoEncruzilhadaImg.jpg';
import mercadoBeberibeImg from '../assets/Mercados/mercadoBeberibeImg.jpeg';
import mercadoNovaDescobertaImg from '../assets/Mercados/mercadoNovaDescobertaImg.webp';
import mercadoBoaVistaImg from '../assets/Mercados/mercadoBoaVistaImg.jpg';
import mercadoMadalenaImg from '../assets/Mercados/mercadoMadalena.jpg';
import mercadoCordeiroImg from '../assets/Mercados/mercadoCordeiroImg.jpg';

const description = `Recife respira tradição também através dos seus mercados públicos. São mais de 15 espalhados pela cidade, reunindo cultura, história e muita movimentação econômica.

Muito além das compras, esses espaços são pontos de encontro: tem artesanato, renda, couro, artigos religiosos, sabores regionais irresistíveis e aquele som ao vivo que anima o passeio.

Visitar um mercado é sentir, de perto, o que é ser recifense. Vamos nessa?`

export default function MainPage(){
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
        {id: 1, text: 'Cultura', variant: 'primary'}, 
        {id: 2, text: 'Serviços', variant: 'primary'}, 
        {id: 3, text: 'Mercado', variant: 'primary'},
        {id: 4, text: 'Comida', variant: 'primary'},
        {id: 5, text: 'Lazer', variant: 'primary'}
    ]

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


    // Adicionando navegação dos mercados
    const mercadosDataWithNavigation = mercadosData.map(mercado => ({
        ...mercado,
        onClick: () => navigate(`/mercados/${createSlug(mercado.text)}`)
    }));

    return (
        <div className="min-h-screen bg-white">
            {/* Container responsivo mobile-first */}
            <div className="px-4 py-6 md:px-8 md:py-12 lg:max-w-6xl lg:mx-auto lg:py-16">

                {/* Botão Voltar */}
                <button 
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 text-primary-default bg-transparent border-none outline-none hover:opacity-80 transition-opacity mb-6 md:mb-8 cursor-pointer"
                >
                    <ArrowLeft />
                    <Typography size="body" weight="medium" className="text-primary-default">
                        Voltar
                    </Typography>
                </button>

                {/* SEÇÃO 1: Logo, Tags, Texto e Botão */}
                <section className="mb-8 md:mb-16 lg:mb-20 flex flex-col items-center">
                    {/* Imagem*/}
                    <img 

                        src={Logo} 
                        alt="Logo Conviva" 
                        className="w-full max-w-2xl h-auto rounded-lg mb-6 md:mb-8"
                    />

                    {/* TagHolder */}
                    <div className="mb-6 md:mb-8 w-full flex justify-start">
                        <TagHolder tags={tags} />
                    </div>

                    {/* Texto */}
                    <Typography 
                        tag="p"
                        size="body" 
                        weight="regular" 
                        className="text-gray-800 mb-6 md:mb-8 text-justify"
                    >
                        {description}
                    </Typography>

                    {/* Botão Ir ao site do Conviva*/}
                    <div className="w-full flex justify-start">
                        <ButtonIcon 
                            text="Ir ao site do Conviva" 
                            icon={<ArrowRight color="white"/>} 
                        />
                    </div>
                </section>

                {/* SEÇÃO 2: Mercados e Feiras (Desktop apenas) */}
                <section className="hidden md:block mb-16 lg:mb-20">
                    <div className="space-y-4">
                        <Accordion title="Mercados" items={mercadosDataWithNavigation} />
                        <Accordion title="Feiras" items={feirasData} />
                    </div>
                </section>

                {/* SEÇÃO 4: Mercados e Feiras (Mobile apenas) */}
                <section className="md:hidden mb-8">
                    <div className="space-y-4">
                        <Accordion title="Mercados" items={mercadosDataWithNavigation} />
                        <Accordion title="Feiras" items={feirasData} />
                    </div>
                </section>

                {/* LINHA DECORATIVA */}
                <DecorativeLine />

                {/* SEÇÃO 3: Mapa*/}
                <section className="mb-8 md:mb-16 lg:mb-20">
                    {/* Título Mapa*/}
                    <div className="text-center mb-6 md:mb-8">
                        <Typography 
                            tag="h2"
                            size="body" 
                            weight="bold" 
                            className="text-gray-900 text-2xl md:text-3xl mb-2"
                        >
                            Mapa dos Mercados do Recife
                        </Typography>
                        <Typography 
                            tag="p"
                            size="body" 
                            weight="regular" 
                            className="text-gray-600 text-base md:text-lg"
                        >
                            Localize os mercados e feiras do Recife no mapa abaixo
                        </Typography>
                    </div>

                    {/* Componente Mapa */}
                    <div className="mb-4 md:mb-6 w-full overflow-hidden rounded-lg">
                        <MapCard 
                            markers={markers}
                            googleMapsLink="https://maps.google.com"
                            zoom={12}
                            withCard={false}
                            width="w-full"
                            height="h-64 md:h-96"
                        />
                    </div>

                    {/* Link Ver Mapa */}
                    <div className="text-center">
                        <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                            <Typography 
                                tag="p"
                                size="body" 
                                weight="medium" 
                                className="text-primary-default cursor-pointer hover:underline"
                            >
                                Ver o Mapa do Recife
                            </Typography>
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
}
