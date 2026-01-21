import React from "react";

export default function Card({ 
    children, 
    className=''
}){

    return (
        <div className={`
        flex grow justify-start 
        border border-[#6C707880] rounded-2xl 
        px-4 pt-2 pb-1 
        max-sm:max-w-full 
        md:max-w-2/5
        lg:max-w-2/6
        shadow-[0_3px_3px_rgba(0,0,0,0.2)]
        ${className}
        `}>
            <div className="flex flex-col">
                {React.Children.map(children, (child) => (
                    <div className="mb-2">
                        {child}
                    </div>
                ))}
            </div>
        </div>
    )
}