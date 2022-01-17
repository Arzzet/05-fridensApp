export interface Friden {
    id?:               string;
    friden_nombre:     string;
    titulo:            string;
    nombre:            string;
    primera_aparicion: string;
    colores:           string[] | string;
    alt_img?:          string; // https://ewv.com/img.png
    publisher:         Publisher;
}

export enum Publisher {
    DCComics = 'DC Comics',
    MarvelComics = 'Marvel Comics',
}



