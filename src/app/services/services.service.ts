import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  descripciones={
    kimetsu: "Estamos en la era Taisho de Japón. Tanjiro, un joven que se gana la vida vendiendo carbón, descubre un día que su familia ha sido asesinada por un demonio. Para empeorar las cosas, su hermana menor Nezuko, la única superviviente de la masacre, ha sufrido una transformación en demonio. Destrozado por los acontecimientos Tanjiro decide convertirse en un cazador de demonios para poder devolver a su hermana a la normalidad y matar al demonio que masacró a su familia." ,
    jujutsu: "Yuuji Itadori es un estudiante de instituto con unas habilidades físicas excepcionales. Todos los días, como rutina, va al hospital a visitar a su abuelo enfermo y decide apuntarse al club de ocultismo del instituto para no dar un palo al agua… Sin embargo, un buen día el sello del talismán que se hallaba escondido en su instituto se rompe, y comienzan a aparecer unos monstruos. Ante este giro de los acontecimientos, Itadori decide adentrarse en el instituto para salvar a sus compañeros. ¿Qué le deparará el destino?",
    atack: "La historia nos traslada a un mundo en el que la humanidad estuvo a punto de ser exterminada cientos de años atrás por los gigantes. Los gigantes son enormes, parecen no ser inteligentes y devoran seres humanos. Lo peor es que parece que lo hacen por placer y no por alimentarse. Una pequeña parte de la humanidad ha conseguido sobrevivir protegiéndose en una ciudad con unos altísimos muros, más altos que el mayor de los gigantes. La ciudad vive su vida tranquila, y hace más de 100 años que ningún gigante aparece por allí. Eren y su hermana adoptiva Mikasa son todavía unos adolescentes cuando ven algo horroroso: un gigante mucho mayor que todos los que la humanidad había conocido hasta el momento está destruyendo los muros de la ciudad. No pasa mucho tiempo hasta que los gigantes entran por el hueco abierto en el muro y comienzan a devorar a la gente."
  }


  descripcion = "";

  nombre = "";

  constructor() { }



  enviar(nombre:string){
    this.nombre=nombre;
    if(this.nombre=="kimetsu"){
      this.descripcion=this.descripciones.kimetsu;
    }
    else if(this.nombre=="jujutsu"){
      this.descripcion=this.descripciones.jujutsu;
    }
    else if(this.nombre=="atack"){
      this.descripcion=this.descripciones.atack;
    }
  }

  devolver(){
    return [
      {
        anime:this.nombre,
        descripcion:this.descripcion
      }
    ];

  }
}
