import React, {useEffect, useState} from "react";
import RadioSearchType from "../../components/radio-search-type/radio-search-type";
import SearchInput from "../../components/search-input/search-input";
import "./search-conteiner.css"
import Button from "../../components/button/button";
import {useDispatch, useSelector} from "react-redux";
import {ChangeTextState} from "../../redux/reducers/search-text-reducer";
import {RootStateType} from "../../redux/store";
import {changeText} from "../../redux/actions/search-text-actions";

const SearchConteiner = ()=>{
    const {type,isLoading} = useSelector((state: RootStateType) => state.search);
    const [value,setValue] = useState('');
    const dispatch = useDispatch();
    const handleChange=(text:string)=>{
        setValue(text);
    }

    useEffect(()=>{
        setValue('');
    },[type])

    const handleClick=()=>{
        dispatch(changeText(value));
    }
    return (
        <div className={"column conteiner searchConteiner align-left space-around"}>
            <div className={"value"}>What are you searching for</div>
            <div><RadioSearchType /></div>
            <div><SearchInput onChange={handleChange} placeHolder={type==='people'?'e.g. Chewbacca, Yoda, Boba Fett':'e.g A New Hope'} /></div>
            <div className={"fill"}><Button onClick={handleClick} disabled={value===''} text={isLoading?"SEARCHING":"SEARCH"}/></div>
        </div>

    )

}

export default SearchConteiner;
