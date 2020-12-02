import React from "react";
import "./title.css"

interface TitleProps {
    value:string;
}
const Title = (props:TitleProps)=>{
    const {value} = props;
    return (
        <div className={"titleBar"}>
            <span className={"textStyle"}>
            {value}
            </span>
        </div>

    )

}

export default Title;
