import { useState } from "react"


export const tatto = [
    { id: 1, name: 'Tattoo Life', fav: false,  des: 'Estudio especializado em tatuagem old school.', img: "https://www.saddam.com.br/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-26-at-10.04.56-1.jpeg" },
    { id: 2, name: 'Gi Tatuadora', fav: false,   des: 'Tatuagens no estilo realismo, focado em rostos e caricaturas.', img: "https://www.saddam.com.br/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-26-at-10.04.56-1.jpeg" },
    { id: 3, name: 'Vila Haro Tattoo', fav: false, des: 'Estúdio focado em coberturas de desenhos antigos e tatuagens tribais.', img: "https://www.saddam.com.br/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-26-at-10.04.56-1.jpeg" },
    { id: 4, name: 'tatto 4', fav: false, des: 'sla studio de tatu', img: "https://www.saddam.com.br/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-26-at-10.04.56-1.jpeg" },
    { id: 5, name: 'tatto 5', fav: false, des: 'sla studio de tatu', img: "https://www.saddam.com.br/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-26-at-10.04.56-1.jpeg" },
    { id: 6, name: 'tatto 6', fav: false, des: 'sla studio de tatu', img: "https://www.saddam.com.br/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-26-at-10.04.56-1.jpeg" },
    { id: 7, name: 'tatto 7', fav: false, des: 'sla studio de tatu', img: "https://www.saddam.com.br/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-26-at-10.04.56-1.jpeg" },] 



export function trocaFav(id){
    let index = id - 1;
    console('antes de clicar', index )

    // tatto[(id)].fav = !tatto[(id)].fav

//    let depois = tatto[(id-1)].fav
//     console('depois de clicar', depois )
    // tatto.forEach(t=>{
    //     if (t.id == id){

    //         t.fav = !t.fav;
    //     }
    
    
    // })
}