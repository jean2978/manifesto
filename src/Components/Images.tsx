import React, { useEffect, useState } from 'react'
import Fedora from '../Media/fedora.gif'
import Patrik from '../Media/patrik.jpg'
import Rainbow from '../Media/rainbow.png'


interface Props {
    name: String;
}

export const Images: React.FC<Props> = ({ name }) => {
    const [img, setImg] = useState<{type: string, src: string, alt: string}>();

    useEffect(() => {
    switch(name) {
        case "patrik":
            setImg({type: "image", src: Patrik, alt: "patrik"});
        break;
        case "jesper":
            setImg({type: "image", src: "asd", alt: "jesper"});
        break;
        case "anton":
            setImg({type: "image", src: "asd", alt: "anton"});
        break;
        case "nice guy":
            setImg({type: "image", src: Fedora, alt: "nice guy"});
        break;
        case "mjöl":
            setImg({type: "video", src: "https://www.youtube.com/embed/AQIxZMUWUpU", alt: "mjöl"})
        break;
        default: 
            setImg({ type: "image", src: Rainbow, alt:"default"});
        } 
        },[name])
    
    return (
        <div>
            {img && img.type === "image" ? (
                <img src={img.src} alt={img.alt}/>
            ) : (
                <iframe 
                    width="960" 
                    height="576" 
                    src={img?.src}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    title={img?.alt}
                    allowFullScreen
                />
                 
            ) }
        </div>
    )
}
