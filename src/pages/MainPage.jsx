import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/convivaLogo.png'
import { TagHolder } from "../components/TagHolder";
import { Typography } from "../components/Typography";
import { Accordion } from "../components/Accordion";
import MapCard from '../components/cards/MapCard';
import { ExternalLink, ArrowRight, Calendar } from "../components/icons";
import ArrowLeft from "../components/icons/ArrowLeft";
import ButtonIcon from "../components/ButtonIcon";
import { IconTitle } from "../components/IconTitle";
import DecorativeLine from "../components/DecorativeLine";
import EventCarousel from "../components/EventCarousel";
import EventCard from "../components/EventCard";
import { useResponsiveCards } from "../hooks/useResponsiveCards";

// Importações de Imagens de Mercados
import mercadoSaoJoseImg from '../assets/Mercados/mercadoSaoJoseImg.jpg';
import mercadoCasaAmarelaImg from '../assets/Mercados/mercadoCasaAmarelaImg.jpg';
import mercadoEncruzilhadaImg from '../assets/Mercados/mercadoEncruzilhadaImg.jpg';
import mercadoBoaVistaImg from '../assets/Mercados/mercadoBoaVistaImg.jpg';
import mercadoMadalenaImg from '../assets/Mercados/mercadoMadalena.jpg';
import mercadoCordeiroImg from '../assets/Mercados/mercadoCordeiroImg.jpg';

const description = `Recife respira tradição também através dos seus mercados públicos. São mais de 15 espalhados pela cidade, reunindo cultura, história e muita movimentação econômica.

Muito além das compras, esses espaços são pontos de encontro: tem artesanato, renda, couro, artigos religiosos, sabores regionais irresistíveis e aquele som ao vivo que anima o passeio.

Visitar um mercado é sentir, de perto, o que é ser recifense. Vamos nessa?`

export default function MainPage(){
    const navigate = useNavigate();
    const cardsPerView = useResponsiveCards();
    const [eventos, setEventos] = useState([]);
    const [eventosLoading, setEventosLoading] = useState(true);

    // Busca eventos da API
    useEffect(() => {
        fetch('https://cats-backend.app.emprel.gov.br/cats/eventos?ativo=true&pagina=0&quantidade=20&categoriaEvento=1')
            .then(res => res.json())
            .then(data => {
                if (data.sucesso && data.resposta?.dados) {
                    const hoje = new Date(new Date().setHours(0, 0, 0, 0));
                    const futuros = data.resposta.dados.filter((evento) => {
                        const [dataPart] = (evento.dataHoraInicio || '').split(' ');
                        const [dia, mes, ano] = (dataPart || '').split('/');
                        if (!dia || !mes || !ano) return false;
                        return new Date(`${ano}-${mes}-${dia}`) <= hoje;
                    });
                    setEventos(futuros);
                }
            })
            .catch(() => setEventos([]))
            .finally(() => setEventosLoading(false));
    }, []);

    // Formata "DD/MM/AAAA HH:mm" → "DD/MM/AAAA" e "HH:mm" separados
    const parseEvento = (evento) => {
        const [dataPart, timePart] = (evento.dataHoraInicio || '').split(' ');
        const [dia, mes, ano] = (dataPart || '').split('/');
        const dateObj = dataPart ? new Date(`${ano}-${mes}-${dia}`) : null;
        const isPast = dateObj ? dateObj < new Date(new Date().setHours(0, 0, 0, 0)) : false;
        return {
            id: evento.id,
            imageUrl: evento.imagem || '',
            imageAlt: evento.nome,
            date: dataPart ? `${dia}/${mes}/${ano}` : '',
            time: timePart || '',
            title: evento.nome || '',
            location: evento.localAtendimento?.logradouro
                ? `${evento.localAtendimento.logradouro}${evento.localAtendimento.numeroImovel ? ', ' + evento.localAtendimento.numeroImovel : ''}${evento.localAtendimento.complemento ? ' - ' + evento.localAtendimento.complemento : ''}`
                : evento.localAtendimento?.nome || '',
            isPast,
        };
    };

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
    }
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

                {/* SEÇÃO EVENTOS */}
                {!eventosLoading && eventos.length > 0 && (
                    <section className="mb-8 md:mb-16 lg:mb-20">
                        <div className="mb-6">
                            <Typography size="body" weight="bold" className="text-gray-900 text-lg md:text-xl flex items-center gap-2">
                                <Calendar size="24" color="currentColor" />
                                Eventos
                            </Typography>
                        </div>
                        <EventCarousel cardsPerView={cardsPerView} autoScrollInterval={5000} showArrows={cardsPerView > 1}>
                            {eventos.map((evento) => {
                                const ev = parseEvento(evento);
                                return (
                                    <EventCard
                                        key={ev.id}
                                        imageUrl={ev.imageUrl}
                                        imageAlt={ev.imageAlt}
                                        date={ev.date}
                                        time={ev.time}
                                        title={ev.title}
                                        location={ev.location}
                                        isPast={ev.isPast}
                                    />
                                );
                            })}
                        </EventCarousel>
                    </section>
                )}

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
