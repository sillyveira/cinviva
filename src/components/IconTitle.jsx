import React from 'react';
import { Typography } from './Typography';

/**
 * Componente IconTitle
 * Usado como cabeçalho de cards ou seções (ex: Horários, Eventos).
 * * @param {Object} props
 * @param {ElementType} props.icon   - Componente de ícone (Lucide ou SVG customizado)
 * @param {string} props.title       - O texto do título
 * @param {string} [props.className] - Classes extras
 */

export function IconTitle({ 
  icon: Icon, 
  title, 
  tag = "h3",
  color = "text-primary-default",
  weight = "medium",
  size = "body",
  textClassname = "text-gray-800",
  iconSize,
  className = ""
  // Adicionei novos props para conseguir personalizar o tamanho do título. 
  // Adicionar na doc dos parâmetros caso se torne definitivo.
}) {
  return (
    <div className={`flex items-start gap-2 ${className}`}>
      {/* items-start: Se o texto tiver 3 linhas, o ícone fica no topo, 
         não no meio (o que ficaria feio).
      */}
      
      <div className={`${color} flex items-center justify-center mt-0.5 text-[19px]`}>
        {/* mt-0.5: Um ajuste fino para alinhar perfeitamente o ícone com a altura da letra maiúscula */}
        {Icon && <Icon size={iconSize}/>}
        {/* Fiz o tamanho do ícone ser customizável, mas só funciona pro ícone de tag. */}
      </div>
{/* text-body font-medium */}
        <Typography tag={tag} weight={weight} size={size} className={`${textClassname}`}>
          {/* Fazer aceitar o tamanho do título!! */}
          {title}
        </Typography>
    </div>
  );
}