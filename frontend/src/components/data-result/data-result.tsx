import React, {ReactElement, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../redux/store";
import {useList} from "../../hooks/use-list";
import "./data-result.css"
import {GenericSchema} from "../../api/schemas/GenericSchema";
import ListItem from "../list-item/list-item";
import {setLoading} from "../../redux/actions/search-text-actions";

export interface DataResultProps {

}


export const DataResult = <T extends GenericSchema>(props: DataResultProps) => {
    const {text, type} = useSelector((state: RootStateType) => state.search);
    const {data, isLoading, error} = useList<T>(1, text, type);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(setLoading(isLoading));
    },[isLoading])

    if (isLoading) {
        return (
            <div className={"message"}>
                <span>Searching...</span>
            </div>
        )
    }
    if (error) {
        return (
            <div className={"message"}>
                <span>Oops, we got no answer from our servers. Please try again latter</span>
            </div>
        )
    }
    if (data&&text!='') {
        return (
                <div>
                {
                    data
                        .map(item => <ListItem text={item.name ? item.name : item.title || ''} link={''}/>)
                }
                </div>
        )
    }
    return (
        <div className={"message"}>
            <span>There are zero matchs. Use the form to search for people or movies</span>
        </div>
    )
}

