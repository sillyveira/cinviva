import React from "react";
import { Typography } from "./Typography";

export default function ButtonIcon({text, icon, className=''}){
    return (
        <>
            <button 
            className={`w-75 h-14 p-[16px] 
            flex flex-row justify-between
            border rounded-[4px]
             bg-primary-default border-primary-default
             hover:bg-primary-medium
             cursor-pointer ${className}`}>
                <Typography tag={'p'} size={'medium'} weight={'medium'} className={'text-white'}>
                    {text}
                </Typography>
                {icon}
            </button>
        </>
    )
}