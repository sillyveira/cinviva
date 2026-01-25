import React from 'react'
import MapCard from '../components/cards/MapCard'
import DescriptionCard from '../components/cards/DescriptionCard';

export default function Mercado() {

    const markers = [
    {
      title: "Mercado São José",
      position: [-8.068519, -34.877681],
      image:
        "https://images.mnstatic.com/ab/43/ab433c0ea922be48fa38f6c039905261.jpg",
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
    <div className="p-8">
      <h1 className="text-display font-bold text-primary-default mb-4">
        Mercado
      </h1>

      <MapCard markers={markers} googleMapsLink={"https://maps.app.goo.gl/ke8WQ9pg2B5DFScn7"}></MapCard>
      <DescriptionCard 
      location={"Praça Dom Vital, S/N - São José"}
      description={"O Mercado da Encruzilhada é um tradicional ponto comercial da Zona Norte do Recife, com mais de 200 boxes que oferecem desde alimentos, artigos para casa e tecidos até itens para pets e serviços variados, como restaurantes e lanchonetes. É um espaço onde praticidade e diversidade se encontram no dia a dia da cidade. "}
      >
      </DescriptionCard>
      <p className="font-regular text-secondary-dark mb-4">
        Bem-vindo à página do Mercado X- vai ter os serviços, destaques, eventos etc e tal.
      </p>
    </div>
  )
}
