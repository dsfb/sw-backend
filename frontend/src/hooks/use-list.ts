import {useEffect, useMemo, useState} from "react";
import {genericController, PagebleResponse, PageData, SWAPIEndpoint} from "../api/generic/generic-api";
import {useAsync} from "../util/hooks/use-async";

interface ListReturnType<T> {
    isLoading: boolean,
    error: boolean,
    data: T[],
    pageData: PageData | undefined
}

/**
 * Hit the Star Wars API and returs data, isLoading, error
 * @param page Page for API
 * @param searchExpression Valor a ser realizada a busca na API
 * @param controllerName Nome do Controller a ser chamado
 */
export const useList = <T>(page: number, searchExpression:string, controllerName: SWAPIEndpoint): ListReturnType<T> => {
    const [data, setData] = useState<T[]>([]);
    const [pageData, setPageData] = useState<PageData>()


    const controller = useMemo(()=>genericController<T>(controllerName).getByPartialName(searchExpression,page),[controllerName,searchExpression,page]);
    const {result,isLoading,error} =
        useAsync<PagebleResponse<T>>(controller);

    useEffect(() => {
        if (!result) return
        const newData = result
            .data
            .map((data:any)=> {
                return {...data,id:getIdFromURL(data.url)}
            });
        setData(newData);
        setPageData(result.page);
    }, [result])

    const getIdFromURL=(url:string):number=>{
        const matchs = url.match('/\\d+/')
        if (matchs) {
            let exp:string = matchs[0];
            let id = exp.replace('/','').replace('/','');
            return parseInt(id);
        }
        return 0;
    }

    return {isLoading, data, error, pageData}
}
