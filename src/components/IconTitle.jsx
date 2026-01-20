import React from 'react';

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
  as: Tag = "h3",
  color = "text-primary-default",
  className = "" 
}) {
  return (
    <div className={`flex items-start gap-2 ${className}`}>
      {/* items-start: Se o texto tiver 3 linhas, o ícone fica no topo, 
         não no meio (o que ficaria feio).
      */}
      
      <div className={`${color} flex items-center justify-center mt-0.5`}>
        {/* mt-0.5: Um ajuste fino para alinhar perfeitamente o ícone com a altura da letra maiúscula */}
        {Icon && <Icon size={24} />}
      </div>

      <Tag className={`text-body font-medium text-gray-800`}>
        {title}
      </Tag>
    </div>
  );
}