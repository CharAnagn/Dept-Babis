import {gsap} from 'gsap';
import { useEffect,useRef } from 'react';



export const Overlay = () => {
    const el = useRef();
    const q = gsap.utils.selector(el);
   

    useEffect(()=>{
gsap.timeline().to(q(".text-area .text"),{opacity:"1",duration:2,stagger:{
    from:"start",amount:1
}}).to(q(".text-area .text"),{opacity:"0",duration:2,stagger:{
    from:"start",amount:1
}},"<0.5").to(q(".down"),{height:"0%",duration:1,ease:"inOut"}).to(q(".gone"),{display:"none"}).to(q(".text-area"),{display:"none"},"<")},[])
    
    return (
        <div ref={el} className="gone">
        <div className="down" >
        </div>
        <div className="text-area">
        <h1 className='text'>D</h1>
        <h1 className='text'>E</h1>
        <h1 className='text'>P</h1>
        <h1 className='text'>T</h1>
        </div>
        </div>
    )
}