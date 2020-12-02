import React, {useEffect, useState} from "react";
import Title from "../../components/title/title";
import "./result-conteiner.css";
import ListItem from "../../components/list-item/list-item";
import {useSelector} from "react-redux";
import {RootStateType} from "../../redux/store";
import {DataResult} from "../../components/data-result/data-result";
import {People} from "../../api/schemas/people";
import {Film} from "../../api/schemas/films";
import {getAxiosInstance} from "../../api/generic/axios-instance";

const ResultConteiner = ()=>{
    const {type,} = useSelector((state: RootStateType) => state.search);
    const [statistic,setStatistic] = useState("");
    useEffect(()=>{
        const fn = async ()=>{
            const result = await fetch('http://localhost:8080/api/statistic');
            const json = await result.json();
            const {hits,hitsPerSecond} = json;
            setStatistic(`Number of hits: ${hits}. Hits per Second: ${hitsPerSecond}`)
        }
        fn();

    },[type])
    return (

        <div className={"conteiner resultConteiner align-left space-around search-conteiner"}>
            <div>
                <Title value={"Results"}/>
            </div>
            <div>
                <Title value={statistic}/>
            </div>

            {type=="people"?<DataResult<People>/>:<DataResult<Film>/> }


        </div>
    )

}

export default ResultConteiner;
