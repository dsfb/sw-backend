import {getAxiosInstance} from "./axios-instance";
import {AxiosResponse} from "axios";

export interface PageData {
    next: number | null;
    prior: number | null;
    pageTotal: number;
    recordTotal : number;
}

export interface PagebleResponse<T> {
    data: T[];
    page: PageData;
}

export interface ResourceReturn<T> {
    getById: (id: number)=> Promise<T>;
    getByPartialName: (search: string, pageNumber: number) => Promise<PagebleResponse<T>>
    getAll: (page: number) => Promise<PagebleResponse<T>>;
}

export type SWAPIEndpoint = 'people' | 'films';

/**
 * This code deals to access for the API.
 * It's not its responsability to handle errors 5xx. Only client search-text not found 404
 * 5xx are going to be tackled by the hooks that access data.
 * @param endpoint the endpoint name (ie people). This is type safe in order to avoid calling mistakes.
 * @T Generic type for the returns
 */
export const genericController = <T>(endpoint: SWAPIEndpoint): ResourceReturn<T> => {

    const axios = getAxiosInstance();

    const getById = async (id: Number): Promise<T> => {
        const response = await axios.get(`/${endpoint}/${id}`)
        return response?response.data:null;
    }

    const getAll = async (pageNumber: number): Promise<PagebleResponse<T>> => {
        const response = await axios.get(`/${endpoint}?page=${pageNumber}`)
        const data: T[] = (response.data.results);
        const page: PageData = getPageData(response);
        return {page, data: data};
    }

    const getByPartialName = async (search: string, pageNumber: number): Promise<PagebleResponse<T>> => {
        const response = await axios.get(`/${endpoint}/?search=${search}&page=${pageNumber}`)
        const dados: T[] = (response.data.results);
        const page: PageData = getPageData(response);
        return {page, data: dados};
    }

    const getPageData = (response: AxiosResponse): PageData => {
        const next: number | null = getPageNumber(response.data.next);
        const prior: number | null = getPageNumber(response.data.previous);
        const resultSize = response.data.results.length;
        const count = response.data.count
        const total: number = (count % resultSize) === 0 ? (count / resultSize)||0 : (Math.floor(count / resultSize) + 1)||0;
        return {next: next, prior: prior, pageTotal: total,recordTotal:count}
    }

    const getPageNumber = (url:string|null):number|null=>{
        if (!url) return null;
        const matchs = url.match('page=\\d+');
        if (matchs) return parseInt(matchs[0].replace('page=',''));
        return null;
    }

    return {getById, getAll, getByPartialName}

}
