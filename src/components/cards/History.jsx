import { useState, useRef, useEffect } from "react";
import Card from "../Card";
import { IconTitle } from "../IconTitle";
import { Book } from "../icons";

export function History({ children }){
    const [isExpanded, setIsExpanded] = useState(false);
    const [isTruncated, setIsTruncated] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const textRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (textRef.current) {
            setIsTruncated(textRef.current.scrollHeight > textRef.current.clientHeight);
        }
    }, [children, isMobile]);

    const lineClampLimit = isExpanded ? 'unset' : (isMobile ? 4 : 5);

    return(
     <Card className="mt-4">
        <IconTitle icon={Book} title="História"/>
        <div className="mt-4">
            <p 
                ref={textRef}
                className="m-0 leading-relaxed"
                style={{
                    display: '-webkit-box',
                    WebkitLineClamp: lineClampLimit,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                }}
            >
                {children}
            </p>
            {isTruncated && (
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