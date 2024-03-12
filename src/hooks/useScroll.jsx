import { useEffect, useState } from "react"


export default function useScroll(amount){
    const [scrolled, setScrolled] = useState(false);
    useEffect(()=>{
        function checkScroll(){
            setScrolled(window.scrollY>amount);
        }

        window.addEventListener('scroll',checkScroll);
        checkScroll();

        return ()=> window.removeEventListener('scroll',checkScroll);

    },[amount])
    return scrolled;
}