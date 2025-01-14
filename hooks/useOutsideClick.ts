import { useEffect, useRef } from "react";

export function useOutsideClick <T extends HTMLElement> (callback:()=>void){
    const ref = useRef<T>(null);
    useEffect(()=>{
        const handleCluckOutside=(e:MouseEvent)=>{
            if(ref.current && !ref.current.contains(e.target as Node)){
                callback();
            }
        };
        document.addEventListener('mousedown',handleCluckOutside)
        return()=>{
            document.removeEventListener('mousedown',handleCluckOutside)
        }
    },[callback])
    return ref;
}