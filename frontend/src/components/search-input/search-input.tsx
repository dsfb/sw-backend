import React, {useEffect, useState} from "react";
import "./search-input.css"
import {useDispatch, useSelector} from "react-redux";
import {ChangeTextState} from "../../redux/reducers/search-text-reducer";
import {changeText} from "../../redux/actions/search-text-actions";
import {RootStateType} from "../../redux/store";

interface SearchInputProps {
    placeHolder: string,
    onChange?: (value: string) => void;
}

const SearchInput = (props: SearchInputProps) => {
    const {placeHolder, onChange} = props
    const [value, setValue] = useState('')
    const {type} = useSelector((state: RootStateType) => state.search)

    useEffect(() => {
        setValue('')
    }, [type])
    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        let newValue = e.currentTarget.value;
        setValue(newValue);
        if (onChange)
            onChange(newValue);

    }

    return (
        <input type="text" placeholder={placeHolder} value={value} onChange={handleChange}/>
    )

}

export default SearchInput;
