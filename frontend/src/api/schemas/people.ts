import {Film} from "./films";
import {GenericSchema} from "./GenericSchema";

/**
 * A person within the Star Wars universe
 */
export interface People extends GenericSchema{

    /**
     * The name of this person.
     */
    name: string;
    /**
     * The url of this resource
     */
    url: string;
    /**
     * The gender of this person (if known).
     */
    gender: string;
    /**
     * The eye color of this person.
     */
    eye_color: string;
    /**
     * The hair color of this person.
     */
    hair_color: string;
    /**
     * The height of this person in meters.
     */
    height: string;
    /**
     * The mass of this person in kilograms.
     */
    mass: string;
    /**
     * An array of urls of film resources that this person has been in.
     */
    films: string[];

}
