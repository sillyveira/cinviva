import React from "react";
import Logo from '../assets/convivaLogo.png'
import { TagHolder } from "../components/TagHolder";
import { Typography } from "../components/Typography";
import { Accordion } from "../components/Accordion";
import MapCard from '../components/cards/MapCard';
import { IconTitle } from "../components/IconTitle";
import { ExternalLink, ArrowRight } from "../components/icons";
import ButtonIcon from "../components/ButtonIcon";

const tags = [
    {text: 'Cultura', variant: 'primary'}, 
    {text: 'Lazer', variant: 'primary'}, 
    {text: 'Serviços', variant: 'primary'}, 
    {text: 'Comida', variant: 'primary'}
]
const description = `A Conviva administra 42 equipamentos, dentre eles estão os pátios de feiras, 
as feiras livres, os centros comerciais, 
as praças de alimentação, os centros de comércio popular e os mercados públicos, 
como os localizados na Boa Vista, Madalena, Encruzilhada, 
Cordeiro, São José e Casa Amarela. A Autarquia também executa manutenção, revitalização e obras nesses espaços,
que são centros de cultura, história e culinária regionais.`

const mercadosData = [
    { id: 1, text: 'São José', imageSrc: 'https://annoyingthing.net/images/e/eb/Crazy_Frog_Standing.png' },
    { id: 2, text: 'Casa Amarela', imageSrc: 'https://annoyingthing.net/images/e/eb/Crazy_Frog_Standing.png' },
    { id: 3, text: 'Encruzilhada', imageSrc: 'https://annoyingthing.net/images/e/eb/Crazy_Frog_Standing.png' },
  ];

export default function MainDesktop(){

    return (
        <div className="px-28 flex flex-col gap-9">
            <div className="flex flex-row gap-30">
                <div className="max-w-1/2 flex flex-col">
                    <img src={Logo} alt="Logo do conviva" width={500} className="-ml-8"/>
                    <div className="flex flex-col gap-2 ml-2">
                        <TagHolder tags={tags}/>
                        <Typography tag={'p'} size={'medium'} weight={'regular'}>
                            {description}
                        </Typography>
                        <ButtonIcon 
                        text={'Ir ao site do conviva'} 
                        icon={<ArrowRight color={'white'}/>} 
                        className="mt-2" 
                        />
                    </div>
                </div>

                <div className="flex flex-col w-1/2 gap-1 mt-8">
                    <Typography tag={'h3'} size={'display'} weight={'regular'}>
                        Mercados
                    </Typography>
                    <Accordion 
                    title={'Mercados'} 
                    items={mercadosData}

                    />
                    <a href="">
                    <Typography className={'text-primary-default hover:text-primary-medium place-self-center'} tag={'p'} size={'medium'} weight={'regular'}>
                        Ver mais mercados
                    </Typography>
                    </a>
                </div>

            </div>

            <div className="flex flex-col gap-2">
                <Typography tag={'h2'} size={'display'} weight={'regular'}>
                    Mapa
                </Typography>
                <MapCard width='w-full' height='h-80'/>
                <a href="">
                <IconTitle
                title="Ver o mapa do Recife" 
                icon={ExternalLink}
                textClassname='text-primary-default hover:text-primary-medium'
                className="flex flex-row-reverse place-self-center justify-end"/>
                </a>
            </div>
        </div>
    )
}