import React, {useState} from "react";
import {SWAPIEndpoint} from "../../api/generic/generic-api";
import "./radio-search-type.css"
import {useDispatch} from "react-redux";
import {changeSearchType} from "../../redux/actions/search-text-actions";

interface RadioSearchTypeProps {
}

const RadioSearchType = (props: RadioSearchTypeProps) => {
    const [type, setType] = useState<SWAPIEndpoint>("people")
    const dispatch = useDispatch();
    const handleClick = (type: SWAPIEndpoint) => {
        setType(type);
        dispatch(changeSearchType());
    }
    return (
        <>
            <span onClick={() => handleClick("people")}>
            <input type="radio" name="searchType" checked={type === "people"}
                    value="people" readOnly/>
            <label className={"label"} htmlFor="people">People</label>
            </span>

            <span onClick={() => handleClick("films")}>
            <input type="radio" name="searchType" checked={type === "films"}
                   value="films" readOnly/>
            <label className={"label"} htmlFor="movies">Movies</label>
            </span>
        </>
    )

}

export default RadioSearchType;
