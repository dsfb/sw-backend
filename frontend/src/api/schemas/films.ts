
import {People} from "./people";
import {GenericSchema} from "./GenericSchema";


export interface Film extends GenericSchema{

    /**
     * The title of this film.
     */
    title: string;
    /**
     * The url of this resource
     */
    url: string;
    /**
     * The opening crawl text at the beginning of this film.
     */
    opening_crawl: string;
    /**
     * The people resources featured within this film.
     */
    characters: string[];
}
