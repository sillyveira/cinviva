import { useState, useRef, useEffect, useLayoutEffect } from "react";
import Card from "../Card";
import { IconTitle } from "../IconTitle";
import { Book } from "../icons";

export function History({ children, className = '' }){
    const [isExpanded, setIsExpanded] = useState(false);
    const [needsTruncation, setNeedsTruncation] = useState(false);
    const textRef = useRef(null);

    useLayoutEffect(() => {
        const checkTruncation = () => {
            if (textRef.current) {
                // Só verificar truncamento quando colapsado
                if (!isExpanded) {
                    setNeedsTruncation(textRef.current.scrollHeight > textRef.current.clientHeight);
                }
            }
        };
        checkTruncation();
        window.addEventListener('resize', checkTruncation);
        return () => window.removeEventListener('resize', checkTruncation);
    }, [children, isExpanded]);

    return(
     <Card className={`mt-4 ${className}`}>
        <IconTitle icon={Book} title="História"/>
        <div className="mt-4">
            <p 
                ref={textRef}
                className="m-0 leading-relaxed"
                style={{
                    display: '-webkit-box',
                    WebkitLineClamp: isExpanded ? 'unset' : 5,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                }}
            >
                {children}
            </p>
            {needsTruncation && (
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="bg-transparent border-none text-primary-default cursor-pointer py-2 px-0 text-sm mt-2 font-bold hover:underline"
                >
                    {isExpanded ? 'Ler menos' : 'Ler mais'}
                </button>
            )}
        </div>
     </Card>   
    )
}