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

// Mock API - Simulação de dados do mercado
const getMercadoData = (mercadoId) => {
  const mercadosDatabase = {
    saojose: {
      nome: "Mercado São José",
      descricao: "O Mercado de São José é um dos principais centros populares de comércio do Recife, reunindo mais de 500 boxes que oferecem artesanato, artigos religiosos, especiarias, pescados e diversos produtos regionais, além de serviços como gráfica rápida e padarias. A principal ideia desse mercado é reunir tudo em um só lugar!",
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

      {/* Imagem Arredondada */}
      <img 
        src={mercadoData.imagemUrl}
        alt={mercadoData.nome}
        className="w-full max-h-[350px] h-auto rounded-3xl mb-6 shadow-md"
      />

      {/* Description Card */}
      <div className="mb-6">
        <DescriptionCard 
          description={mercadoData.descricao}
          location={mercadoData.localizacao}
        />
      </div>

      {/* Schedules */}
      <div className="mb-6">
        <Schedules schedules={mercadoData.horarios} />
      </div>

      {/* Item Sell */}
      <div className="mb-6">
        <ItemSell items={mercadoData.produtos} />
      </div>

      {/* Highlights Card */}
      <div className="mb-6">
        <HighlightsCard highlists={mercadoData.destaques} />
      </div>

      {/* Card de Eventos */}
      <div className="mb-6">
        <Card>
          <IconTitle icon={Calendar} title="Eventos" />
          <Typography size="small" weight="regular" className="text-gray-700 mt-2">
            eventos
          </Typography>
        </Card>
      </div>

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
