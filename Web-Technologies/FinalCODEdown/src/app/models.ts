import { Identifiers } from "@angular/compiler";

export interface ITest  {
    id: number;
    denumire: string;
  
    data ?: string;
    intrebari ?: IIntrebare[];

}


export interface IIntrebare {
    id: number;
    titlu : string;
    tip: string;
    varianteRaspuns ?: string[];
}

export interface IRaport  {
    id: number;
    numeRaport: string;  
    dataRaport ?: string;
    codRaport ?: string;

}

export const LISTAINTREBARI = [
    {
        id: 10,
        titlu: "Intrebare 1",
        tip: "TF",
        varianteRaspuns: ["true", "false"]
    },
    {   id: 11,
        titlu: "Intrebare 2",
        tip: "multiple",
        varianteRaspuns: ["Raspuns 1", "Raspuns 2", "Raspuns 3", "Raspuns 4"]
    }, 
    {
        id: 12,
        titlu: "Intrebare 3",
        tip: "short",
        varianteRaspuns: []
    },

];

export const TESTE = [
    {
      id: 1,
      denumire: "Testul 1",
      data: "10.03.2018",
      intrebari: LISTAINTREBARI
    },
    {
      id:2,
      denumire: "Testul 2",
      data: "21.03.2018",
      intrebari: LISTAINTREBARI
    },
    {
      id:3,
      denumire: "Testul 3",
      data: "17.10.2018",
      intrebari: LISTAINTREBARI
    },
    {
      id:4,
      denumire: "Testul 4",
      data: "27.11.2018",
      intrebari: LISTAINTREBARI
    },
];
export const RAPOARTE=[
{
    id:1,
    numeRaport:"Ponteri",
    dataRaport:"12.10.2018",
    codRaport:"feather1"
},
{
    id:2,
    numeRaport:"Clase-derivari",
    dataRaport:"19.10.2018",
    codRaport:"feather2"
},
{
    id:3,
    numeRaport:"Mosteniri",
    dataRaport:"26.10.2018",
    codRaport:"feather3"
},
{
    id:4,
    numeRaport:"Maps",
    dataRaport:"03.11.2018",
    codRaport:"feather4"
},
];