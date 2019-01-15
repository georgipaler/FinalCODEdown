import { Identifiers } from "@angular/compiler";

export interface IStudent {
    id: number;
    nume: string;
    prenume: string;
    note?: number[];
}


export interface ITest {
    id: number;
    denumire: string;
    data?: string;
    timp: number;
    codTest: string;
    activ?: boolean;
    materie: string;

}

export interface IUser{
    id: number,
    nume: string,
    username: string,
    password: string,
    profil: string,
    materie: string,
    grupa: number,
    an:number,
    specializare: string
}

export interface IIntrebare {
    id: number;
    idTest: number,
    titlu: string;
    tip: string;
}

export interface IRaport {
    id: number;
    dataRaport:  string;
    idTest: number;
    punctaj: number;
    idUser: number;

}

export interface IRaspuns {
        idRaspuns: number;
        idIntrebare: number;
        enunt: string;
        raspunsCorect: boolean
}

export const LISTAINTREBARI = [
    {
        id: 10,
        idTest: 1,
        titlu: "Intrebare 1",
        tip: "TF"
    },
    {
        id: 11,
        idTest: 4,
        titlu: "Intrebare 2",
        tip: "multiple"
    },
    {
        id: 12,
        idTest: 4,
        titlu: "Intrebare 3",
        tip: "short"
    },

    {
        id: 13,
        idTest: 4,
        titlu: "Intrebare 3",
        tip: "short"
    },
];

export const LISTARASPUNSURI = [
    {
        idRaspuns: 1,
        idIntrebare: 10,
        enunt: "true",
        raspunsCorect: false

    },
    {
        idRaspuns: 2,
        idIntrebare: 10,
        enunt: "false",
        raspunsCorect: true
    },
    {
        idRaspuns: 2,
        idIntrebare: 11,
        enunt: "Raspuns 1",
        raspunsCorect: false
    },
    {
        idRaspuns: 2,
        idIntrebare: 11,
        enunt: "Raspuns 2",
        raspunsCorect: false
    },
    {
        idRaspuns: 2,
        idIntrebare: 11,
        enunt: "Raspuns 3",
        raspunsCorect: true
    },
    {
        idRaspuns: 1,
        idIntrebare: 12,
        enunt: "true",
        raspunsCorect: false

    },
    {
        idRaspuns: 2,
        idIntrebare: 12,
        enunt: "false",
        raspunsCorect: true
    },
    {
        idRaspuns: 2,
        idIntrebare: 13,
        enunt: "Raspuns 1",
        raspunsCorect: false
    },
    {
        idRaspuns: 2,
        idIntrebare: 13,
        enunt: "Raspuns 2",
        raspunsCorect: false
    },
    {
        idRaspuns: 2,
        idIntrebare: 13,
        enunt: "Raspuns 3",
        raspunsCorect: true
    },
]

export const TESTE = [
    {
        id: 1,
        denumire: "Testul 1",
        data: "10.03.2018",
        codTest: "123",
        timp: 30,
        activ: true,
        materie: "JAVA"
    },
    {
        id: 2,
        denumire: "Testul 2",
        data: "21.03.2018",
        codTest: "123ab",
        timp:40,
        activ: true,
        materie: "Android"
    },
    {
        id: 3,
        denumire: "Testul 3",
        data: "17.10.2018",
        codTest: "123abc",
        timp:40,
        activ: false,
        materie: "SDD"
    },
    {
        id: 4,
        denumire: "Testul 4",
        data: "27.11.2018",
        codTest: "abc",
        timp:40,
        activ: true,
        materie: "POO"
    },
];
export const RAPOARTE = [
    {
        id: 1,
        dataRaport: "12.10.2018",
        idTest : 4,
        punctaj: 60,
        idUser: 3

    },
    {
        id: 2,
        dataRaport: "19.10.2018",
        idTest: 3,
        punctaj: 70,
        idUser: 2
    },
    {
        id: 3,
        dataRaport: "26.10.2018",
        idTest: 3,
        punctaj: 70,
        idUser: 4
    },
    {
        id: 4,
        dataRaport: "03.11.2018",
        idTest: 3,
        punctaj: 70,
        idUser: 1
    },
];


export const STUDENTI = [
    {
        id: 1,
        nume: "Pana",
        prenume: "Madalina",
        note: [10, 60, 80, 50]
    },
    {
        id: 2,
        nume: "Pahona",
        prenume: "Flavia",
        note: [20, 0, 80, 50]
    },
    {
        id: 3,
        nume: "Paler",
        prenume: "Georgina",
        note: [40, 60, 80, 50]
    },
    {
        id: 4,
        nume: "Paulas",
        prenume: "Corina",
        note: [10, 90, 80, 50]
    }
]
