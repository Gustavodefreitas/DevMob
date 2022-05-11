


export const tatto=[{id:1,name:'tatto 1',fav:true},{id:2,name:'tatto 2',fav:false},{id:3,name:'tatto 3',fav:false}]

export function trocaFav(id){
   

    tatto.forEach(t=>{
        if (t.id == id){

            t.fav = !t.fav;
        }
    
    
    })
}