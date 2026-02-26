import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Schedules } from '../components/cards/Schedules';
import MapCard from '../components/cards/MapCard';
import DescriptionCard from '../components/cards/DescriptionCard';
import { ItemSell } from '../components/cards/ItemSell';
import { History } from '../components/cards/History';
import HighlightsCard from '../components/HighlightsCard';
import Highlights from '../components/Highlights';
import Card from '../components/Card';
import { Typography } from '../components/Typography';
import { IconTitle } from '../components/IconTitle';
import { Star } from '../components/icons';
import ArrowLeft from '../components/icons/ArrowLeft';
import EventCarousel from '../components/EventCarousel';

// Importações de Imagens de Mercados
import mercadoSaoJoseImg from '../assets/Mercados/mercadoSaoJoseImg.jpg';
import mercadoCasaAmarelaImg from '../assets/Mercados/mercadoCasaAmarelaImg.jpg';
import mercadoEncruzilhadaImg from '../assets/Mercados/mercadoEncruzilhadaImg.jpg';
import mercadoBoaVistaImg from '../assets/Mercados/mercadoBoaVistaImg.jpg';
import mercadoMadalenaImg from '../assets/Mercados/mercadoMadalena.jpg';
import mercadoCordeiroImg from '../assets/Mercados/mercadoCordeiroImg.jpg';

// Importações de Imagens dos Destaques
import alimentacaoCordeiroImg from '../assets/Destaques/alimentacao_cordeiro.jpg';
import miudezasCordeiroImg from '../assets/Destaques/miudezas_cordeiro.jpg';
import consertoCordeiroImg from '../assets/Destaques/conserto_cordeiro.jpg';
import alimentacaoEncruzilhadaImg from '../assets/Destaques/alimentacao_encruzilhada.jpg';
import servicosEncruzilhadaImg from '../assets/Destaques/servicos_encruzilhada.jpg';
import artigosEncruzilhadaImg from '../assets/Destaques/artigos_encruzilhada.jpg'


// Mock API - Simulação de dados do mercado
const getMercadoData = (mercadoId) => {
  const mercadosDatabase = {
    saojose: {
      nome: "Mercado São José",
      descricao: "O Mercado de São José é um dos principais centros populares de comércio do Recife, reunindo mais de 500 boxes que oferecem artesanato, artigos religiosos, especiarias, pescados e diversos produtos regionais, além de serviços como gráfica rápida e padarias. A principal ideia desse mercado é reunir tudo em um só lugar!",
      localizacao: "Praça Dom Vital, S/N - São José",
      imagemUrl: mercadoSaoJoseImg,
      horarios: [
        { day: "Segunda-feira", time: "06h - 18h", isSpecial: false },
        { day: "Terça-feira", time: "06h - 18h", isSpecial: false },
        { day: "Quarta-feira", time: "06h - 18h", isSpecial: false },
        { day: "Quinta-feira", time: "06h - 18h", isSpecial: false },
        { day: "Sexta-feira", time: "06h - 18h", isSpecial: false },
        { day: "Sábado", time: "06h - 18h", isSpecial: false },
        { day: "Domingo e Feriados", time: "06h - 13h", isSpecial: true }
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
          image: "https://placehold.co/100x100",
          description: "Peças únicas feitas à mão, com identidade cultural pernambucana.",
          title: "Artesanato"
        },
        {
          id: 2,
          image: "https://placehold.co/100x100",
          description: "Venda de peixes e frutos do mar frescos, com variedade regional.",
          title: "Peixaria"
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
        { day: "Segunda-feira", time: "06h - 18h", isSpecial: false },
        { day: "Terça-feira", time: "06h - 18h", isSpecial: false },
        { day: "Quarta-feira", time: "06h - 18h", isSpecial: false },
        { day: "Quinta-feira", time: "06h - 18h", isSpecial: false },
        { day: "Sexta-feira", time: "06h - 18h", isSpecial: false },
        { day: "Sábado", time: "06h - 18h", isSpecial: false },
        { day: "Domingo e Feriados", time: "06h - 13h", isSpecial: true },
        { day: "Praça de alimentação", time: "Após 18h", isSpecial: true }
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
          image: "https://placehold.co/100x100",
          description: "Ajustes, reparos e manutenção de relógios, celulares, óculos e eletrônicos em geral.",
          title: "Consertos em geral"
        },
        {
          id: 2,
          image: "https://placehold.co/100x100",
          description: "Variedade de itens de armarinho, papelaria, acessórios e utilidades do dia a dia.",
          title: "Miudezas"
        },
        {
          id: 3,
          image: "https://placehold.co/100x100",
          description: "Frutas, verduras, lanches e produtos alimentícios frescos para o dia a dia.",
          title: "Alimentação"
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
        { day: "Segunda-feira", time: "06h - 18h", isSpecial: false },
        { day: "Terça-feira", time: "06h - 18h", isSpecial: false },
        { day: "Quarta-feira", time: "06h - 18h", isSpecial: false },
        { day: "Quinta-feira", time: "06h - 18h", isSpecial: false },
        { day: "Sexta-feira", time: "06h - 18h", isSpecial: false },
        { day: "Sábado", time: "06h - 18h", isSpecial: false },
        { day: "Domingo e Feriados", time: "06h - 13h", isSpecial: true },
        { day: "Praça de alimentação", time: "Após 18h", isSpecial: true }
      ],
      produtos: [
        "Produtos Locais",
        "Alimentos Orgânicos",
        "Artesanato Comunitário",
        "Restaurantes",
        "Tecidos e Aviamentos",
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
          image: alimentacaoEncruzilhadaImg,
          description: "Restaurantes, lanchonetes e opções de refeição no local.",
          title: "Alimentação"
        },
        {
          id: 2,
          image: servicosEncruzilhadaImg,
          description: "Chaveiro, conserto de roupas, sapatos, eletrônicos e outros serviços práticos.",
          title: "Serviços em geral"
        },
        {
          id: 3,
          image: artigosEncruzilhadaImg,
          description: "Utensílios, tecidos, aviamentos e produtos para organização da casa.",
          title: "Artigos para o lar"
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
      descricao: "O Mercado da Boa Vista, no centro do Recife, conta com mais de 50 boxes que oferecem frutas, verduras, legumes, bebidas, artigos para casa e itens descartáveis, além de serviços como gráfica, cabeleireiro, bares e restaurantes. É um espaço tradicional que combina comércio e gastronomia em um só lugar.",
      localizacao: "Rua Santa Cruz, S/N - Boa Vista",
      imagemUrl: mercadoBoaVistaImg,
      horarios: [
        { day: "Segunda-feira", time: "06h - 18h", isSpecial: false },
        { day: "Terça-feira", time: "06h - 18h", isSpecial: false },
        { day: "Quarta-feira", time: "06h - 18h", isSpecial: false },
        { day: "Quinta-feira", time: "06h - 18h", isSpecial: false },
        { day: "Sexta-feira", time: "06h - 18h", isSpecial: false },
        { day: "Sábado", time: "06h - 18h", isSpecial: false },
        { day: "Domingo e Feriados", time: "06h - 13h", isSpecial: true },
        { day: "Praça de alimentação", time: "Após 18h", isSpecial: true },
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
          image: "https://placehold.co/100x100",
          description: "Frutas, verduras, carnes, bebidas, temperos e refeições no local.",
          title: "Alimentação"
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
        { day: "Segunda-feira", time: "06h - 18h", isSpecial: false },
        { day: "Terça-feira", time: "06h - 18h", isSpecial: false },
        { day: "Quarta-feira", time: "06h - 18h", isSpecial: false },
        { day: "Quinta-feira", time: "06h - 18h", isSpecial: false },
        { day: "Sexta-feira", time: "06h - 18h", isSpecial: false },
        { day: "Sábado", time: "06h - 18h", isSpecial: false },
        { day: "Domingo e Feriados", time: "06h - 13h", isSpecial: true },
        { day: "Praça de alimentação", time: "Após 18h", isSpecial: true },
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
          image: "https://placehold.co/100x100",
          description: "Frutas, verduras, cereais, peixaria, bares e restaurantes variados.",
          title: "Alimentação"
        },
        {
          id: 2,
          image: "https://placehold.co/100x100",
          description: "Rações, acessórios e produtos para o cuidado de pets.",
          title: "Artigos para animais"
        },
        {
          id: 3,
          image: "https://placehold.co/100x100",
          description: "Corte e costura, cabeleireiro, barbearia e manutenção em geral.",
          title: "Consertos em geral"
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
        { day: "Segunda-feira", time: "06h - 18h", isSpecial: false },
        { day: "Terça-feira", time: "06h - 18h", isSpecial: false },
        { day: "Quarta-feira", time: "06h - 18h", isSpecial: false },
        { day: "Quinta-feira", time: "06h - 18h", isSpecial: false },
        { day: "Sexta-feira", time: "06h - 18h", isSpecial: false },
        { day: "Sábado", time: "06h - 18h", isSpecial: false },
        { day: "Domingo e Feriados", time: "06h - 13h", isSpecial: true },
        { day: "Praça de alimentação", time: "Após 18h", isSpecial: true },
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
          image: alimentacaoCordeiroImg,
          description: "Cereais, grãos, hortifruti, bares e restaurantes para o dia a dia.",
          title: "Alimentação"
        },
        {
          id: 2,
          image: consertoCordeiroImg,
          description: "Chaveiro, conserto de eletrônicos e outros serviços práticos.",
          title: "Consertos em geral"
        },
        {
          id: 3,
          image: miudezasCordeiroImg,
          description: "Acessórios, artigos religiosos, flores, bolsas e produtos variados.",
          title: "Miudezas"
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
    <div className="bg-white min-h-screen px-4 py-6 md:px-8 lg:px-0">
      <div className="w-full md:max-w-6xl md:mx-auto">
        {/* Botão Voltar */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-primary-default bg-transparent border-none outline-none hover:opacity-80 transition-opacity mb-4 md:mb-6 cursor-pointer"
        >
          <ArrowLeft />
          <Typography size="body" weight="medium" className="text-primary-default">
            Voltar
          </Typography>
        </button>

        {/* Título */}
        <div className="flex justify-center mb-4 md:mb-6">
          <div className="bg-primary-default rounded-full px-6 py-3 inline-block w-full text-center">
            <Typography size="body" weight="bold" className="text-white">
              {mercadoData.nome}
            </Typography>
          </div>
        </div>

        {/* Imagem */}
        <div className="w-full mb-6 md:mb-8 overflow-hidden rounded-3xl shadow-md bg-gray-100">
          <div className="relative w-full aspect-video md:h-96 lg:h-125">
            <img
              src={mercadoData.imagemUrl}
              alt={mercadoData.nome}
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </div>
        </div>

        {/* Description Card*/}
        <div className="mb-8 md:mb-12">
          <DescriptionCard
            description={mercadoData.descricao}
            location={mercadoData.localizacao}
            className="max-w-full! w-full h-full"
          />
        </div>

        {/* SEÇÃO: Horários e Destaques */}
        <div className="mb-8 md:mb-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">
          {/* Horários */}
          <div className="w-full">
            <Schedules schedules={mercadoData.horarios} />
          </div>

          {/* Destaques */}
          <div className="w-full">
            <div className="mb-6">
              <IconTitle title="Destaques do mercado" icon={Star} />
            </div>
            {/* Carrossel no Mobile */}
            <div className="md:hidden">
              <EventCarousel cardsPerView={1} autoScrollInterval={5000} showArrows={false} height="h-auto">
                {mercadoData.destaques.map((highlight) => (
                  <Highlights
                    key={highlight.id}
                    image={highlight.image}
                    description={highlight.description}
                    alt={highlight.title}
                  >
                    <Typography size="small" weight="bold" className="text-gray-900">
                      {highlight.title}
                    </Typography>
                  </Highlights>
                ))}
              </EventCarousel>
            </div>
            
            {/* Grid no Desktop */}
            <div className="hidden md:block">
              <div className={`grid ${mercadoData.destaques.length < 4 ? 'grid-cols-1' : 'grid-cols-2'} gap-3`}>
                {mercadoData.destaques.map((highlight) => (
                  <Highlights
                    key={highlight.id}
                    image={highlight.image}
                    description={highlight.description}
                    alt={highlight.title}
                  >
                    <Typography size="small" weight="bold" className="text-gray-900">
                      {highlight.title}
                    </Typography>
                  </Highlights>
                ))}
              </div>
            </div>
          </div>
      </div>

      {/* O que é vendido */}
      <div className="mb-8 md:mb-12">
        <ItemSell items={mercadoData.produtos} />
      </div>

        {/* Map Card */}
        <div className="mb-8 md:mb-12 w-full">
          <MapCard
            markers={markers}
            googleMapsLink={mercadoData.mapa.googleMapsLink}
            zoom={16}
            withCard={true}
            width="w-full"
          />
        </div>

        {/* History Card */}
        <div>
          <History>
            {mercadoData.historia}
          </History>
        </div>
      </div>
    </div>
  );
}
