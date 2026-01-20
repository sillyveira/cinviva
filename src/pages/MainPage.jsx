import { useState } from 'react'
import { MapPin } from 'lucide-react'
import { IconTitle } from '../components/IconTitle'
import { TagHolder } from '../components/TagHolder'
import { Accordion } from '../components/Accordion'

export default function MainPage() {
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

      {/* Teste de tamanhos de fonte */}
      <div className="mb-8">
        <h2 className="text-small font-medium mb-2">Tamanhos de Fonte:</h2>
        <p className="text-xsmall">Extra Small (14px)</p>
        <p className="text-small">Small (16px)</p>
        <p className="text-body">Body (18px)</p>
        <p className="text-display">Display (48px)</p>
      </div>

      {/* Teste de font weights */}
      <div>
        <h2 className="text-small font-medium mb-2">Font Weights:</h2>
        <p className="text-body font-regular">Regular (400)</p>
        <p className="text-body font-medium">Medium (500)</p>
        <p className="text-body font-bold">Bold (700)</p>
      </div>

      {/* Teste do novo componente */}
      <div className="mt-8 border border-dashed border-gray-300 p-4 space-y-4">
        <p className="text-xsmall text-gray-400 mb-2">Área de teste do IconTitle:</p>

        {/* Teste de quebra de linha */}
        <IconTitle
            icon={MapPin}
            title="Este é um título muito longo para testar se o ícone continua alinhado no topo e não fica estranho no meio do texto quando quebra linha. Lorempsum tlgd né."
        />
      </div>

      {/* Teste do novo componente TagHolder */}
      <div className="mt-8 border border-dashed border-gray-300 p-4">
        <p className="text-xsmall text-gray-400 mb-2">Área de teste do TagHolder:</p>
        
        {/* Exemplo de uso com múltiplas tags para testar a quebra de linha e variantes */}
        <TagHolder tags={exampleTags} />
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
    </>
  )
}
