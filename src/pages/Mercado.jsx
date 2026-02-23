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

// Importações de Imagens de Mercados
import mercadoSaoJoseImg from '../assets/Mercados/mercadoSaoJoseImg.jpg';
import mercadoCasaAmarelaImg from '../assets/Mercados/mercadoCasaAmarelaImg.jpg';
import mercadoEncruzilhadaImg from '../assets/Mercados/mercadoEncruzilhadaImg.jpg';
import mercadoBeberibeImg from '../assets/Mercados/mercadoBeberibeImg.jpeg';
import mercadoNovaDescobertaImg from '../assets/Mercados/mercadoNovaDescobertaImg.webp';
import mercadoBoaVistaImg from '../assets/Mercados/mercadoBoaVistaImg.jpg';
import mercadoMadalenaImg from '../assets/Mercados/mercadoMadalena.jpg';
import mercadoCordeiroImg from '../assets/Mercados/mercadoCordeiroImg.jpg';

// Importações de Imagens de Destaques
import graficasImg from '../assets/Destaques/graficasImg.avif';
import paesImg from '../assets/Destaques/paesImg.jpg';
import consertoDeRelogiosImg from '../assets/Destaques/consertoDeRelogiosImg.jpg';
import consertoDeCelularesImg from '../assets/Destaques/consertoDeCelularesImg.avif';
import consertoDeOculosImg from '../assets/Destaques/consertoDeOculosImg.jpg';
import chaveiroImg from '../assets/Destaques/chaveiroImg.webp';
import consertoDeRoupasImg from '../assets/Destaques/consertoDeRoupasImg.jpg';
import consertoDeSapatosImg from '../assets/Destaques/consertoDeSapatosImg.jpg';
import frigorificoImg from '../assets/Destaques/frigorificoImg.jpg';
import peixariaImg from '../assets/Destaques/peixariaImg.webp';
import consertoDeeletronicosImg from '../assets/Destaques/consertoDeeletronicosImg.jpg';
import floriculturaImg from '../assets/Destaques/floriculturaImg.webp';
import lanchonetesImg from '../assets/Destaques/lanchonetesImg.jpg';
import musicaAoVivoImg from '../assets/Destaques/musicaAoVivoImg.jpg';
import restaurantesImg from '../assets/Destaques/restaurantesImg.jpg';
import cabeleireiroImg from '../assets/Destaques/cabeleireiroImg.jpg';
import cafeteriaImg from '../assets/Destaques/cafeteriaImg.jpeg';

// Mock API - Simulação de dados do mercado
const getMercadoData = (mercadoId) => {
  const mercadosDatabase = {
    saojose: {
      nome: "Mercado São José",
      descricao: "O Mercado de São José é um dos principais centros populares de comércio do Recife, reunindo mais de 500 boxes que oferecem artesanato, artigos religiosos, especiarias, pescados e diversos produtos regionais, além de serviços como gráfica rápida e padarias. A principal ideia desse mercado é reunir tudo em um só lugar! O Mercado de São José é um dos principais centros populares de comércio do Recife, reunindo mais de 500 boxes que oferecem artesanato, artigos religiosos, especiarias, pescados e diversos produtos regionais, além de serviços como gráfica rápida e padarias. A principal ideia desse mercado é reunir tudo em um só lugar! O Mercado de São José é um dos principais centros populares de comércio do Recife, reunindo mais de 500 boxes que oferecem artesanato, artigos religiosos, especiarias, pescados e diversos produtos regionais, além de serviços como gráfica rápida e padarias. A principal ideia desse mercado é reunir tudo em um só lugar! O Mercado de São José é um dos principais centros populares de comércio do Recife, reunindo mais de 500 boxes que oferecem artesanato, artigos religiosos, especiarias, pescados e diversos produtos regionais, além de serviços como gráfica rápida e padarias. A principal ideia desse mercado é reunir tudo em um só lugar! O Mercado de São José é um dos principais centros populares de comércio do Recife, reunindo mais de 500 boxes que oferecem artesanato, artigos religiosos, especiarias, pescados e diversos produtos regionais, além de serviços como gráfica rápida e padarias. A principal ideia desse mercado é reunir tudo em um só lugar! O Mercado de São José é um dos principais centros populares de comércio do Recife, reunindo mais de 500 boxes que oferecem artesanato, artigos religiosos, especiarias, pescados e diversos produtos regionais, além de serviços como gráfica rápida e padarias. A principal ideia desse mercado é reunir tudo em um só lugar! O Mercado de São José é um dos principais centros populares de comércio do Recife, reunindo mais de 500 boxes que oferecem artesanato, artigos religiosos, especiarias, pescados e diversos produtos regionais, além de serviços como gráfica rápida e padarias. A principal ideia desse mercado é reunir tudo em um só lugar! O Mercado de São José é um dos principais centros populares de comércio do Recife, reunindo mais de 500 boxes que oferecem artesanato, artigos religiosos, especiarias, pescados e diversos produtos regionais, além de serviços como gráfica rápida e padarias. A principal ideia desse mercado é reunir tudo em um só lugar!",
      localizacao: "Praça Dom Vital, S/N - São José",
      imagemUrl: mercadoSaoJoseImg,
      horarios: [
        { day: "Segunda-feira", time: "06:00 - 18:00", isSpecial: false },
        { day: "Terça-feira", time: "06:00 - 18:00", isSpecial: false },
        { day: "Quarta-feira", time: "06:00 - 18:00", isSpecial: false },
        { day: "Quinta-feira", time: "06:00 - 18:00", isSpecial: false },
        { day: "Sexta-feira", time: "06:00 - 18:00", isSpecial: false },
        { day: "Sábado", time: "06:00 - 18:00", isSpecial: false },
        { day: "Domingo e Feriados", time: "06:00 - 13:00", isSpecial: true }
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
        googleMapsLink: "https://maps.app.goo.gl/yEsjufPvD4GpNKaa8"
      },
      historia: "O Mercado de São José foi inaugurado no dia 7 de setembro de 1875 e atualmente é o edifício pré-fabricado em ferro mais antigo do Brasil. Sua estrutura teve inspiração no mercado público parisiense de Grenelle, com as devidas adaptações para o clima do Recife e demandas locais de comércio. Em funcionamento desde então e diante da importância histórica e cultural do mercado público, o equipamento foi tombado pelo Instituto do Patrimônio Histórico e Artístico Nacional (IPHAN), em 1973.",
      destaques: [
        {
          id: 1,
          image: graficasImg,
          description: "Serviço de impressão ágil para materiais simples, como panfletos, cartazes e documentos.",
          title: "Gráficas"
        },
        {
          id: 2,
          image: paesImg,
          description: "Produção artesanal de pães frescos, feitos diariamente e disponíveis para encomenda antecipada pelos clientes.",
          title: "Produção diária de pães sob encomenda"
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
    },
    casaamarela: {
      nome: "Mercado de Casa Amarela",
      descricao: "O Mercado de Casa Amarela é um espaço tradicional da Zona Norte do Recife, com mais de 90 boxes no mercado e um pátio de feira que oferece desde frutas, verduras e plantas até artigos para casa, bolsas, brinquedos e acessórios. É um ponto de encontro que une turismo, comércio variado e serviços em um só lugar.",
      localizacao: "Rua Padre Lemos, 94 - Casa Amarela",
      imagemUrl: mercadoCasaAmarelaImg,
      horarios: [
        { day: "Segunda-feira", time: "06:00 - 18:00", isSpecial: false },
        { day: "Terça-feira", time: "06:00 - 18:00", isSpecial: false },
        { day: "Quarta-feira", time: "06:00 - 18:00", isSpecial: false },
        { day: "Quinta-feira", time: "06:00 - 18:00", isSpecial: false },
        { day: "Sexta-feira", time: "06:00 - 18:00", isSpecial: false },
        { day: "Sábado", time: "06:00 - 18:00", isSpecial: false },
        { day: "Domingo", time: "06:00 - 13:00", isSpecial: false },
        { day: "Feriados", time: "06:00 - 13:00", isSpecial: true },
        { day: "Praça de alimentação", time: "Aberto após 18h", isSpecial: true }
      ],
      produtos: [
        "Bolsas e Sapatos",
        "Artigos de Couro",
        "Artesanato Comunitário",
        "Hortifruti Regional",
        "Tecidos e Aviamento",
        "Artigos de Papelaria",
        "Artigos para Casa",
        "Brinquedos",
        "Sorveteria"
      ],
      mapa: {
        position: [-8.026443441117518, -34.91780856040779],
        googleMapsLink: "https://maps.app.goo.gl/Ls1y1LXbgUv5iYZG7"
      },
      historia: "O Mercado de Casa Amarela foi fundado no dia 9 de novembro de 1930, a partir da estrutura de ferro do antigo Mercado da Caxangá que havia sido demolido por não atender as demandas locais. Durante a época da construção, todo material da estrutura foi trazido de bonde até a estação de Casa Amarela, sendo este, o segundo mercado de ferro do Recife.",
      destaques: [
        {
          id: 1,
          image: consertoDeRelogiosImg,
          description: "Ajustes, troca de bateria e pequenos reparos para manter o funcionamento dos relógios.",
          title: "Conserto de relógios"
        },
        {
          id: 2,
          image: consertoDeCelularesImg,
          description: "Manutenção básica, troca de tela, bateria e conserto de componentes comuns.",
          title: "Conserto de celulares"
        },
        {
          id: 3,
          image: consertoDeOculosImg,
          description: "Ajustes de armação, troca de peças e pequenos reparos.",
          title: "Conserto de óculos"
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
    },
    encruzilhada: {
      nome: "Mercado da Encruzilhada",
      descricao: "O Mercado da Encruzilhada é um tradicional ponto comercial da Zona Norte do Recife, com mais de 200 boxes que oferecem desde alimentos, artigos para casa e tecidos até pets, lanchonetes e restaurantes. É um espaço onde praticidade e diversidade se encontram no dia a dia.",
      localizacao: "Rua Doutor José Maria, 2-200 - Encruzilhada",
      imagemUrl: mercadoEncruzilhadaImg,
      horarios: [
        { day: "Segunda-feira", time: "06:00 - 18:00", isSpecial: false },
        { day: "Terça-feira", time: "06:00 - 18:00", isSpecial: false },
        { day: "Quarta-feira", time: "06:00 - 18:00", isSpecial: false },
        { day: "Quinta-feira", time: "06:00 - 18:00", isSpecial: false },
        { day: "Sexta-feira", time: "06:00 - 18:00", isSpecial: false },
        { day: "Sábado", time: "06:00 - 18:00", isSpecial: false },
        { day: "Domingo", time: "06:00 - 13:00", isSpecial: false },
        { day: "Feriados", time: "06:00 - 13:00", isSpecial: true },
        { day: "Praça de alimentação", time: "Aberto após 18h", isSpecial: true }
      ],
      produtos: [
        "Produtos Locais",
        "Alimentos Orgânicos",
        "Artesanato Comunitário",
        "Restaurantes",
        "Tecidos e Aviamento",
        "Artigos para Pets",
        "Artigos para Casa",
        "Laticínios",
        "Cereais"
      ],
      mapa: {
        position: [-8.037004093261059, -34.89216960458749],
        googleMapsLink: "https://maps.app.goo.gl/NbGCJaiBgufaySDT7"
      },
      historia: "Inaugurado originalmente em 1924, o equipamento passou por uma grande reforma em 1950 para tornar sua estrutura maior e com melhores condições de higiene. Tal reforma lhe concedeu o título de obra-modelo de arquitetura no Brasil para edifícios do gênero. O Mercado da Encruzilhada fica localizado na zona norte do Recife e funciona diariamente.",
      destaques: [
        {
          id: 1,
          image: frigorificoImg,
          description: "Venda de carnes frescas, cortes variados e produtos refrigerados.",
          title: "Frigorífico"
        },
        {
          id: 2,
          image: peixariaImg,
          description: "Venda de peixes e frutos do mar frescos, com variedade regional.",
          title: "Peixaria"
        },
        {
          id: 3,
          image: chaveiroImg,
          description: "Cópia de chaves, abertura de fechaduras e serviços rápidos.",
          title: "Chaveiro"
        },
        {
          id: 4,
          image: consertoDeRoupasImg,
          description: "Ajustes, reparos e pequenos consertos em peças de vestuário.",
          title: "Conserto de roupas"
        },
        {
          id: 5,
          image: consertoDeSapatosImg,
          description: "Reparos, ajustes e restauração básica de calçados.",
          title: "Conserto de sapatos"
        },
        {
          id: 6,
          image: consertoDeeletronicosImg,
          description: "Manutenção e reparo de eletrônicos de uso cotidiano.",
          title: "Conserto de eletrônicos"
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
    },
    beberibe: {
      nome: "Mercado de Beberibe",
      descricao: "Recentemente revitalizado, o Mercado de Beberibe, localizado na histórica Praça da Convenção, reúne mais de 50 boxes e um pátio de feira com cereais, frutas, verduras e artigos variados, além de serviços como conserto de chaves, ótica e lanchonetes. É um ponto de comércio e convivência tradicional da região.",
      localizacao: "Praça da Convenção, nº 128, Beberibe",
      imagemUrl: mercadoBeberibeImg,
      horarios: [
        { day: "Segunda-feira", time: "06:00 - 18:00", isSpecial: false },
        { day: "Terça-feira", time: "06:00 - 18:00", isSpecial: false },
        { day: "Quarta-feira", time: "06:00 - 18:00", isSpecial: false },
        { day: "Quinta-feira", time: "06:00 - 18:00", isSpecial: false },
        { day: "Sexta-feira", time: "06:00 - 18:00", isSpecial: false },
        { day: "Sábado", time: "06:00 - 18:00", isSpecial: false },
        { day: "Domingo e Feriados", time: "06:00 - 13:00", isSpecial: true },
      ],
      produtos: [
        "Bolsas e Sapatos",
        "Artigos Religiosos",
        "Artesanato Comunitário",
        "Hortifruti Regional",
        "Lanchonetes",
        "Artigos de Merceria",
        "Artigos para Casa",
        "Cereais e Grãos",
        "Flores"
      ],
      mapa: {
        position: [-8.00245351858246, -34.89717080228127],
        googleMapsLink: "https://maps.app.goo.gl/oRXWKpRh5StAkB1K9"
      },
      historia: "A construção do mercado público Beberibe, assim como todo equipamento público, surgiu da demanda popular por um centro comercial organizado. O mercado e a feira foram fundados em 1930, na histórica região Beberibe, nas proximidades da praça da Convenção que foi importante palco de revoluções e socialização dos moradores ao longo dos séculos. Ultimamente é um importante ponto de referência na busca por itens tradicionais de feira e serviços.",
      destaques: [
        {
          id: 1,
          image: consertoDeRelogiosImg,
          description: "Ajustes, troca de bateria e pequenos reparos em relógios.",
          title: "Conserto de Relógios"
        },
        {
          id: 2,
          image: consertoDeCelularesImg,
          description: "Manutenção básica, troca de tela, bateria e conectores.",
          title: "Conserto de Celulares"
        },
        {
          id: 3,
          image: consertoDeeletronicosImg,
          description: "Reparos em aparelhos eletrônicos do dia a dia.",
          title: "Conserto de Eletrônicos"
        },
        {
          id: 4,
          image: consertoDeOculosImg,
          description: "Venda e ajuste de óculos, lentes e acessórios ópticos.",
          title: "Óticas"
        },
        {
          id: 5,
          image: floriculturaImg,
          description: "Venda de flores, plantas e arranjos decorativos.",
          title: "Floricultura"
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
    },
    novadescoberta: {
      nome: "Mercado de Nova Descoberta",
      descricao: "Recentemente revitalizado, Mercado de Nova Descoberta, com mais de 80 boxes, oferece desde carnes, cereais e hortifrutis até artigos religiosos, papelaria, acessórios e serviços variados como corte e costura e conserto de eletrodomésticos. É um espaço que atende diariamente a diferentes necessidades da comunidade local.",
      localizacao: " Av. Ver. Otacílio Azevedo, 2311 - Vasco da Gama",
      imagemUrl: mercadoNovaDescobertaImg,
      horarios: [
        { day: "Segunda-feira", time: "06:00 - 18:00", isSpecial: false },
        { day: "Terça-feira", time: "06:00 - 18:00", isSpecial: false },
        { day: "Quarta-feira", time: "06:00 - 18:00", isSpecial: false },
        { day: "Quinta-feira", time: "06:00 - 18:00", isSpecial: false },
        { day: "Sexta-feira", time: "06:00 - 18:00", isSpecial: false },
        { day: "Sábado", time: "06:00 - 18:00", isSpecial: false },
        { day: "Domingo e Feriados", time: "06:00 - 13:00", isSpecial: true },
      ],
      produtos: [
        "Bolsas e Sapatos",
        "Artigos Religiosos",
        "Artesanato Comunitário",
        "Hortifruti Regional",
        "Lanchonetes",
        "Artigos de Papelaria",
        "Artigos para Casa",
        "Cereais e Grãos",
        "Flores"
      ],
      mapa: {
        position: [-8.000333, -34.922689],
        googleMapsLink: "https://maps.app.goo.gl/vkBdRniV4YvbucBJ6"
      },
      historia: "O Mercado de Nova Descoberta foi uma iniciativa particular. Construído pelo senhor Roberto Marinho, dono de imobiliária e proprietário do sítio que havia no local, foi inaugurado em 1973. O nome original era Centro Comercial de Nova Descoberta. Em 1976, a Prefeitura adquiriu o empreendimento, e mudou a denominação. Possui 91 boxes, que vendem carnes, cereais, frutas e verduras, além de artigos de armarinho. O equipamento reúne diariamente uma variada clientela, desde estudantes que procuram por artigos de papelaria e acessórios, a pessoas em busca de consertos em eletrodomésticos e outros serviços ofertados por lá.",
      destaques: [
        {
          id: 1,
          image: consertoDeRoupasImg,
          description: "Ajustes, reformas e pequenos consertos em peças de vestuário.",
          title: "Conserto de roupas"
        },
        {
          id: 2,
          image: consertoDeSapatosImg,
          description: "Reparos em calçados, como troca de solado, colagem e ajustes.",
          title: "Conserto de sapatos"
        },
        {
          id: 3,
          image: consertoDeeletronicosImg,
          description: "Reparos em aparelhos eletrônicos do dia a dia.",
          title: "Conserto de Eletrônicos"
        },
        {
          id: 4,
          image: frigorificoImg,
          description: "Venda de carnes frescas, cortes variados e produtos refrigerados.",
          title: "Frigorífico"
        },
        {
          id: 5,
          image: lanchonetesImg,
          description: "Lanches rápidos, refeições simples e bebidas para o dia a dia.",
          title: "Lanchonetes"
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
    },
    boavista: {
      nome: "Mercado da Boa Vista",
      descricao: "Recentemente revitalizado, Mercado de Nova Descoberta, com mais de 80 boxes, oferece desde carnes, cereais e hortifrutis até artigos religiosos, papelaria, acessórios e serviços variados como corte e costura e conserto de eletrodomésticos. É um espaço que atende diariamente a diferentes necessidades da comunidade local.",
      localizacao: "Rua Santa Cruz, S/N - Boa Vista",
      imagemUrl: mercadoBoaVistaImg,
      horarios: [
        { day: "Segunda-feira", time: "06:00 - 18:00", isSpecial: false },
        { day: "Terça-feira", time: "06:00 - 18:00", isSpecial: false },
        { day: "Quarta-feira", time: "06:00 - 18:00", isSpecial: false },
        { day: "Quinta-feira", time: "06:00 - 18:00", isSpecial: false },
        { day: "Sexta-feira", time: "06:00 - 18:00", isSpecial: false },
        { day: "Sábado", time: "06:00 - 18:00", isSpecial: false },
        { day: "Domingo", time: "06:00 - 13:00", isSpecial: false },
        { day: "Feriados", time: "06:00 - 13:00", isSpecial: true },
        { day: "Praça de alimentação", time: "Aberto após 18h", isSpecial: true },
      ],
      produtos: [
        "Bebidas",
        "Temperos",
        "Artesanato Comunitário",
        "Hortifruti Regional",
        "Itens Descartáveis",
        "Frios",
        "Artigos para Casa",
        "Cereais e Grãos",
        "Carnes"
      ],
      mapa: {
        position: [-8.062927, -34.888467],
        googleMapsLink: "https://maps.app.goo.gl/fitGEYH3JHnpsDLs8"
      },
      historia: "Construído na metade do século XIX, o mercado da Boa Vista não possui uma data oficial de fundação, mas estima-se que ele tenha surgido na mesma época que o mercado de São José, tendo em vista que sua inauguração foi realizada, também, em 1875. O mercado, localizado na área central do Recife, passou por inúmeras reformas e já abrigou uma estrebaria, cocheira e também foi utilizado, na época colonial, como comércio de pessoas escravizadas durante o período colonial.",
      destaques: [
        {
          id: 1,
          image: graficasImg,
          description: "Impressões, cópias e serviços gráficos feitos com rapidez.",
          title: "Gráfica rápida"
        },
        {
          id: 2,
          image: musicaAoVivoImg,
          description: "Apresentações musicais que trazem movimento e cultura ao mercado.",
          title: "Música ao vivo"
        },
        {
          id: 3,
          image: restaurantesImg,
          description: "Espaços para refeições completas, petiscos e bebidas variadas.",
          title: "Bares e restaurantes"
        },
        {
          id: 4,
          image: cabeleireiroImg,
          description: "Serviços de corte, cuidados com o cabelo e estética em geral.",
          title: "Cabeleireiro"
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
    },
    madalena: {
      nome: "Mercado da Madalena",
      descricao: "O Mercado da Madalena, com mais de 100 boxes, oferece desde frutas, verduras e cereais até artigos para casa e aviamentos, além de serviços como peixaria, corte e costura, bares e restaurantes. É um espaço tradicional que combina comércio variado e pontos de encontro na Zona Oeste do Recife.",
      localizacao: "Rua Real da Torre, 521 - Madalena",
      imagemUrl: mercadoMadalenaImg,
      horarios: [
        { day: "Segunda-feira", time: "06:00 - 18:00", isSpecial: false },
        { day: "Terça-feira", time: "06:00 - 18:00", isSpecial: false },
        { day: "Quarta-feira", time: "06:00 - 18:00", isSpecial: false },
        { day: "Quinta-feira", time: "06:00 - 18:00", isSpecial: false },
        { day: "Sexta-feira", time: "06:00 - 18:00", isSpecial: false },
        { day: "Sábado", time: "06:00 - 18:00", isSpecial: false },
        { day: "Domingo", time: "06:00 - 13:00", isSpecial: false },
        { day: "Feriados", time: "06:00 - 13:00", isSpecial: true },
        { day: "Praça de alimentação", time: "Aberto após 18h", isSpecial: true },
      ],
      produtos: [
        "Bebidas",
        "Temperos",
        "Artesanato Comunitário",
        "Hortifruti Regional",
        "Artigos de Mercearia",
        "Frios",
        "Artigos para Casa",
        "Cereais e Grãos",
        "Tecidos e Aviamento"
      ],
      mapa: {
        position: [-8.052289561424592, -34.90848897389969],
        googleMapsLink: "https://maps.app.goo.gl/zkDGiDCgg7nr8ZTi8"
      },
      historia: "Fundado no dia 19 de outubro de 1925, o Mercado da Madalena foi originalmente chamado de Mercado do Bacurau. Na época, o equipamento era um conhecido recanto da zona norte do Recife, que reunia boêmios e profissionais que buscavam locais abertos após o expediente de trabalho para desfrutar da cidade. O nome adotado surgiu em referência ao pássaro de hábitos noturnos como forma de homenagear os frequentadores do equipamento. O bacurau é utilizado na fachada da Feira de Pássaros, que fica ao lado do Mercado.",
      destaques: [
        {
          id: 1,
          image: musicaAoVivoImg,
          description: "Apresentações musicais que trazem movimento e cultura ao mercado.",
          title: "Música ao vivo"
        },
        {
          id: 2,
          image: restaurantesImg,
          description: "Espaços para refeições completas, petiscos e bebidas variadas.",
          title: "Bares e restaurantes"
        },
        {
          id: 3,
          image: cabeleireiroImg,
          description: "Serviços de corte, cuidados com o cabelo e estética em geral.",
          title: "Cabeleireiro"
        },
        {
          id: 4,
          image: cafeteriaImg,
          description: "Cafés, bebidas quentes e opções para uma pausa rápida.",
          title: "Cafeteria"
        },
        {
          id: 5,
          image: consertoDeRoupasImg,
          description: "Costura sob medida, ajustes e pequenos reparos em roupas.",
          title: "Corte e costura"
        },
        {
          id: 6,
          image: cabeleireiroImg,
          description: "Corte de cabelo, barba e cuidados tradicionais masculinos.",
          title: "Barbearia"
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
    },
    cordeiro: {
      nome: "Mercado do Cordeiro",
      descricao: "O Mercado do Cordeiro, na Zona Oeste do Recife, reúne mais de 100 boxes com cereais, grãos, artigos religiosos, flores, acessórios, produtos para pets e serviços diversos, além de bares e restaurantes. É um importante centro de abastecimento e convivência da região.",
      localizacao: "Avenida General San Martin, S/N - Cordeiro",
      imagemUrl: mercadoCordeiroImg,
      horarios: [
        { day: "Segunda-feira", time: "06:00 - 18:00", isSpecial: false },
        { day: "Terça-feira", time: "06:00 - 18:00", isSpecial: false },
        { day: "Quarta-feira", time: "06:00 - 18:00", isSpecial: false },
        { day: "Quinta-feira", time: "06:00 - 18:00", isSpecial: false },
        { day: "Sexta-feira", time: "06:00 - 18:00", isSpecial: false },
        { day: "Sábado", time: "06:00 - 18:00", isSpecial: false },
        { day: "Domingo", time: "06:00 - 13:00", isSpecial: false },
        { day: "Feriados", time: "06:00 - 13:00", isSpecial: true },
        { day: "Praça de alimentação", time: "Aberto após 18h", isSpecial: true },
      ],
      produtos: [
        "Bebidas",
        "Artigos para Animais",
        "Artesanato Comunitário",
        "Hortifruti Regional",
        "Artigos de Mercearia",
        "Artigos Religiosos",
        "Artigos para Casa",
        "Cereais e Grãos",
        "Bolsas e Sapatos",
        "Flores"
      ],
      mapa: {
        position: [-8.052328007540511, -34.92132670458746],
        googleMapsLink: "https://maps.app.goo.gl/apVqmJckSWnCy57G8"
      },
      historia: "O Mercado do Cordeiro foi fundado em 1937 e em 2002 o mercado foi desapropriado, demolido e reconstruído, passando por uma reinauguração em 2008. O equipamento é um dos mais importantes centros de abastecimento da zona oeste do Recife.",
      destaques: [
        {
          id: 1,
          image: chaveiroImg,
          description: "Cópia de chaves, abertura de fechaduras e serviços rápidos.",
          title: "Chaveiro"
        },
        {
          id: 2,
          image: restaurantesImg,
          description: "Espaços para refeições completas, petiscos e bebidas variadas.",
          title: "Bares e restaurantes"
        },
        {
          id: 3,
          image: consertoDeeletronicosImg,
          description: "Reparos em aparelhos eletrônicos do dia a dia, com serviços simples e acessíveis.",
          title: "Conserto de eletrônicos"
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

      {/* Schedules + Item Sell: coluna no mobile, lado a lado no desktop */}
      <div className="flex flex-col md:flex-row gap-6 mb-6 md:items-stretch">
        <div className="w-full md:w-1/2 min-w-0">
          <Schedules schedules={mercadoData.horarios} className="!max-w-full w-full h-full" />
        </div>
        <div className="w-full md:w-1/2 min-w-0">
          <ItemSell items={mercadoData.produtos} className="!max-w-full w-full h-full" />
        </div>
      </div>

        {/* Highlights Card */}
        <div className="mb-6">
          <HighlightsCard highlists={mercadoData.destaques} />
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
      )}

      {/* Map Card - Full width */}
      <div className="mb-6">
        <MapCard
          markers={markers}
          googleMapsLink={mercadoData.mapa.googleMapsLink}
          zoom={16}
          withCard={true}
          width="w-full"
          className="w-full"
        />
      </div>

      {/* History Card - Full width */}
      <div className="mb-6">
        <History className="!max-w-full w-full">
          {mercadoData.historia}
        </History>
      </div>
    </div>
  );
}
