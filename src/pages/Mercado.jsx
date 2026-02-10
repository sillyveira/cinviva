import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Schedules } from '../components/cards/Schedules';
import MapCard from '../components/cards/MapCard';
import DescriptionCard from '../components/cards/DescriptionCard';
import { ItemSell } from '../components/cards/ItemSell';
import { History } from '../components/cards/History';
import HighlightsCard from '../components/HighlightsCard';
import Card from '../components/Card';
import { Typography } from '../components/Typography';
import { IconTitle } from '../components/IconTitle';
import { Calendar } from '../components/icons';
import ArrowLeft from '../components/icons/ArrowLeft';
import EventCard from '../components/EventCard';
import EventCarousel from '../components/EventCarousel';
import { useResponsiveCards } from '../hooks/useResponsiveCards';

// Mock API - Simulação de dados do mercado
const getMercadoData = (mercadoId) => {
  const mercadosDatabase = {
    saojose: {
      nome: "Mercado São José",
      descricao: "O Mercado de São José é um dos principais centros populares de comércio do Recife, reunindo mais de 500 boxes que oferecem artesanato, artigos religiosos, especiarias, pescados e diversos produtos regionais, além de serviços como gráfica rápida e padarias. A principal ideia desse mercado é reunir tudo em um só lugar! O Mercado de São José é um dos principais centros populares de comércio do Recife, reunindo mais de 500 boxes que oferecem artesanato, artigos religiosos, especiarias, pescados e diversos produtos regionais, além de serviços como gráfica rápida e padarias. A principal ideia desse mercado é reunir tudo em um só lugar! O Mercado de São José é um dos principais centros populares de comércio do Recife, reunindo mais de 500 boxes que oferecem artesanato, artigos religiosos, especiarias, pescados e diversos produtos regionais, além de serviços como gráfica rápida e padarias. A principal ideia desse mercado é reunir tudo em um só lugar! O Mercado de São José é um dos principais centros populares de comércio do Recife, reunindo mais de 500 boxes que oferecem artesanato, artigos religiosos, especiarias, pescados e diversos produtos regionais, além de serviços como gráfica rápida e padarias. A principal ideia desse mercado é reunir tudo em um só lugar! O Mercado de São José é um dos principais centros populares de comércio do Recife, reunindo mais de 500 boxes que oferecem artesanato, artigos religiosos, especiarias, pescados e diversos produtos regionais, além de serviços como gráfica rápida e padarias. A principal ideia desse mercado é reunir tudo em um só lugar! O Mercado de São José é um dos principais centros populares de comércio do Recife, reunindo mais de 500 boxes que oferecem artesanato, artigos religiosos, especiarias, pescados e diversos produtos regionais, além de serviços como gráfica rápida e padarias. A principal ideia desse mercado é reunir tudo em um só lugar! O Mercado de São José é um dos principais centros populares de comércio do Recife, reunindo mais de 500 boxes que oferecem artesanato, artigos religiosos, especiarias, pescados e diversos produtos regionais, além de serviços como gráfica rápida e padarias. A principal ideia desse mercado é reunir tudo em um só lugar! O Mercado de São José é um dos principais centros populares de comércio do Recife, reunindo mais de 500 boxes que oferecem artesanato, artigos religiosos, especiarias, pescados e diversos produtos regionais, além de serviços como gráfica rápida e padarias. A principal ideia desse mercado é reunir tudo em um só lugar!",
      localizacao: "Praça Dom Vital, S/N - São José",
      imagemUrl: "http://placehold.co/335x142",
      horarios: [
        { day: "Segunda a Sábado", time: "06h às 18h", isSpecial: false },
        { day: "Domingo e Feriados", time: "06h às 13h", isSpecial: true }
      ],
      produtos: [
        "Produtos Locais",
        "Alimentos Orgânicos",
        "Artesanato Comunitário",
        "Hortifruti Regional",
        "Produtos Caseiros",
        "Plantas Medicinais",
        "Reciclados Criativos",
        "Pães",
        "Pescados"
      ],
      mapa: {
        position: [-8.068519, -34.877681],
        googleMapsLink: "https://share.google/jZAmOHNqY7wM0uurX"
      },
      historia: "O Mercado de São José foi inaugurado no dia 7 de setembro de 1875 e atualmente é o edifício pré-fabricado em ferro mais antigo do Brasil. Sua estrutura teve inspiração no mercado público parisiense de Grenelle, com as devidas adaptações para o clima do Recife e demandas locais de comércio. Em funcionamento desde então e diante da importância histórica e cultural do mercado público, o equipamento foi tombado pelo Instituto do Patrimônio Histórico e Artístico Nacional (IPHAN), em 1973.",
      destaques: [
        {
          id: 1,
          image: "https://placehold.co/100x100",
          description: "Gráficas rápidas com serviços de impressão",
          title: "Gráficas"
        },
        {
          id: 2,
          image: "https://placehold.co/100x100",
          description: "Pães frescos e artesanais",
          title: "Pães"
        },
        {
          id: 3,
          image: "https://placehold.co/100x100",
          description: "Pães frescos e artesanais",
          title: "Pães"
        },
        {
          id: 4,
          image: "https://placehold.co/100x100",
          description: "Pães frescos e artesanais",
          title: "Pães"
        },
        {
          id: 5,
          image: "https://placehold.co/100x100",
          description: "Pães frescos e artesanais",
          title: "Pães"
        }
      ],
      eventos: [
        {
          id: 1,
          date: "QUA, 04 MAI",
          time: "18:00",
          title: "Poesia do Recife",
          location: "Mercado São José",
          imageUrl: "https://i.pinimg.com/736x/12/fe/b5/12feb5724268fa74bb5a4ba7ecb73b75.jpg",
          imageAlt: "Evento - Poesia do Recife"
        },
        {
          id: 2,
          imageUrl: "https://i.pinimg.com/1200x/84/be/bc/84bebccc63b8a4e76ba3a846aaabaa1a.jpg",
          imageAlt: "Evento - Oficina Criativa",
          date: "SEX, 06 MAI",
          time: "14:30",
          title: "Oficina Criativa de Artesanato",
          location: "Espaço Comunitário Centro"
        },
        {
          id: 3,
          imageUrl: "https://i.pinimg.com/736x/12/fe/b5/12feb5724268fa74bb5a4ba7ecb73b75.jpg",
          imageAlt: "Evento - Mercado Orgânico",
          date: "SÁB, 07 MAI",
          time: "08:00",
          title: "Mercado Orgânico Semanal",
          location: "Praça da República"
        },
        {
          id: 4,
          imageUrl: 'https://i.pinimg.com/1200x/1c/83/56/1c83565b93e8308a604237bd0ea7ce19.jpg',
          imageAlt: 'Evento - Feira de Livros',
          date: "DOM, 08 MAI",
          time: "10:00",
          title: "Feira de Livros Usados",
          location: "Biblioteca Central"
        },
        {
          id: 5,
          imageUrl: "https://i.pinimg.com/1200x/84/be/bc/84bebccc63b8a4e76ba3a846aaabaa1a.jpg",
          imageAlt: "Evento - Show Musical",
          date: "SEG, 09 MAI",
          time: "20:00",
          title: "Show Musical ao Vivo",
          location: "Anfiteatro do Recife"
        },
        {
          id: 6,
          imageUrl: 'https://i.pinimg.com/736x/9e/bc/dc/9ebcdc8102c42b5dc1d8246c9e6eb505.jpg',
          imageAlt: 'Evento - Fotografia',
          date: "TER, 10 MAI",
          time: "15:00",
          title: "Workshop de Fotografia",
          location: "Estúdio Criativo"
        },
        {
          id: 7,
          imageUrl: "https://i.pinimg.com/736x/5f/fe/02/5ffe02ca4d2e0302f803a6e9a153baaa.jpg",
          imageAlt: "Evento - Yoga no Parque",
          date: "QUA, 11 MAI",
          time: "07:00",
          title: "Yoga no Parque",
          location: "Parque da Jaqueira"
        }
      ]
    }
  };

  return mercadosDatabase[mercadoId] || null;
};

export default function Mercado() {
  const { mercadoId } = useParams();
  const navigate = useNavigate();
  const [mercadoData, setMercadoData] = useState(null);
  const cardsPerView = useResponsiveCards(); // Hook para responsividade

  useEffect(() => {
    // Simulação de chamada à API
    const data = getMercadoData(mercadoId);
    setMercadoData(data);
  }, [mercadoId]);

  if (!mercadoData) {
    return (
      <div className="bg-white min-h-screen p-6">
        <Typography size="body" weight="medium">
          Carregando...
        </Typography>
      </div>
    );
  }

  const markers = [
    {
      title: mercadoData.nome,
      position: mercadoData.mapa.position,
      description: mercadoData.descricao,
    }
  ];

  return (
    <div className="bg-white min-h-screen p-6">
      {/* Botão Voltar */}
      <button
        onClick={() => navigate('/')}
        className="flex items-center gap-2 text-primary-default bg-transparent border-none outline-none hover:opacity-80 transition-opacity mb-4 cursor-pointer"
      >
        <ArrowLeft />
        <Typography size="body" weight="medium" className="text-primary-default">
          Voltar
        </Typography>
      </button>

      {/* Título em Retângulo Azul Arredondado */}
      <div className="flex justify-center mb-4">
        <div className="bg-primary-default rounded-full px-6 py-3 inline-block w-full text-center">
          <Typography size="body" weight="bold" className="text-white">
            {mercadoData.nome}
          </Typography>
        </div>
      </div>

      {/* Imagem + Description Card: coluna no mobile, lado a lado no desktop */}
      <div className="flex flex-col md:flex-row-reverse gap-6 mb-6 md:max-h-[350px]">
        {/* Imagem Arredondada */}
        <img
          src={mercadoData.imagemUrl}
          alt={mercadoData.nome}
          className="w-full md:w-1/2 max-h-[350px] md:h-full rounded-3xl shadow-md object-cover flex-shrink-0"
        />

        {/* Description Card */}
        <div className="w-full md:w-1/2 min-w-0">
          <DescriptionCard
            description={mercadoData.descricao}
            location={mercadoData.localizacao}
            className="!max-w-full w-full h-full"
          />
        </div>
      </div>

      {/* Highlights Card - Full width */}
      <div className="mb-6 -mx-6 px-6 w-[calc(100%+3rem)]">
        <HighlightsCard highlists={mercadoData.destaques} />
      </div>

      {/* Schedules */}
      <div className="mb-6">
        <Schedules schedules={mercadoData.horarios} />
      </div>

      {/* Item Sell */}
      <div className="mb-6">
        <ItemSell items={mercadoData.produtos} />
      </div>

      {/* Card de Eventos */}
      {mercadoData.eventos && mercadoData.eventos.length > 0 && (
        <div className="mb-6">
          <EventCarousel cardsPerView={cardsPerView} autoScrollInterval={5000}>
            {mercadoData.eventos.map((evento) => (
              <EventCard
                key={evento.id}
                imageUrl={evento.imageUrl}
                imageAlt={evento.imageAlt}
                date={evento.date}
                time={evento.time}
                title={evento.title}
                location={evento.location}
              />
            ))}
          </EventCarousel>
        </div>
      )}

      {/* Map Card */}
      <div className="mb-6">
        <MapCard
          markers={markers}
          googleMapsLink={mercadoData.mapa.googleMapsLink}
          zoom={16}
          withCard={true}
        />
      </div>

      {/* History Card */}
      <div className="mb-6">
        <History>
          {mercadoData.historia}
        </History>
      </div>
    </div>
  );
}
