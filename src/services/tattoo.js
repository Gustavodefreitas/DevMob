import { useState } from "react"


export const tatto = [
    { id: 1, name: 'Tattoo Life', fav: false, des: 'Estudio especializado em tatuagem old school.', img: "https://www.saddam.com.br/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-26-at-10.04.56-1.jpeg" },
    { id: 2, name: 'Gi Tatuadora', fav: false, des: 'Tatuagens no estilo realismo, focado em rostos e caricaturas.', img: "https://i.pinimg.com/564x/43/8d/72/438d727508e1d998c35b2791be149c06.jpg" },
    { id: 3, name: 'Vila Haro Tattoo', fav: false, des: 'Estúdio focado em coberturas de desenhos antigos e tatuagens tribais.', img: "https://i.pinimg.com/564x/b5/8d/4c/b58d4c17628dca6dc31e9015b4907d79.jpg" },
    { id: 4, name: 'tatto delux', fav: false, des: 'Tatuagens no estilo realismo, focado em rostos e caricaturas.', img: "https://i.pinimg.com/564x/37/b0/7c/37b07ce32df3285954c547174b2ed247.jpg" },
    { id: 5, name: 'tatto old school', fav: false, des: 'Estudio especializado em tatuagem old school.', img: "https://i.pinimg.com/564x/42/14/7c/42147c046ea32a8f295887a9daf729e4.jpg" },
    { id: 6, name: 'tatto do derik', fav: false, des: 'Estúdio focado em coberturas de desenhos antigos e tatuagens tribais.', img: "https://i.pinimg.com/736x/b4/a0/2f/b4a02ffd8007fdf5e5f2dc9b297b871f.jpg" },
    { id: 7, name: 'tatto', fav: false, des: 'Estudio especializado em tatuagem old school.', img: "https://i.pinimg.com/564x/5d/2f/fd/5d2ffdb492ba18f15229a82afeb813f6.jpg" },
    { id: 7, name: 'tatto', fav: false, des: 'Estudio especializado em tatuagem old school.', img: "https://i.pinimg.com/564x/5d/2f/fd/5d2ffdb492ba18f15229a82afeb813f6.jpg" },
    { id: 7, name: 'tatto', fav: false, des: 'Estudio especializado em tatuagem old school.', img: "https://i.pinimg.com/564x/5d/2f/fd/5d2ffdb492ba18f15229a82afeb813f6.jpg" },
    { id: 7, name: 'tatto', fav: false, des: 'Estudio especializado em tatuagem old school.', img: "https://i.pinimg.com/564x/5d/2f/fd/5d2ffdb492ba18f15229a82afeb813f6.jpg" },
]

export const favTattoo = []



export function trocaFav(id) {
    let index = id - 1;
    console('antes de clicar', index)

    // tatto[(id)].fav = !tatto[(id)].fav

    //    let depois = tatto[(id-1)].fav
    //     console('depois de clicar', depois )
    // tatto.forEach(t=>{
    //     if (t.id == id){

    //         t.fav = !t.fav;
    //     }


    // })
}