import React from "react";
import "./button.css"
import {useSelector} from "react-redux";
import {ChangeTextState} from "../../redux/reducers/search-text-reducer";

interface ButtonProps {
    text: string;
    disabled?: boolean;
    onClick?: () => void
}

const Button = (props: ButtonProps) => {
    const {text, disabled, onClick} = props;
    const handleClick = () => {
        if (onClick) onClick();
    }
    return (
        <button disabled={disabled} onClick={handleClick}>{text}</button>
    )

}

export default Button;
