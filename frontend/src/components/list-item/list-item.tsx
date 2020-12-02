import React from "react";
import "./list-item.css"
import Button from "../button/button";

/* This component is very close to title, might be only one. I decided to make it two because of the type of service
* each of them provides. One is a title and the other one is a item in a data-list. There is a big chance they become
* different in the future.*/

interface LineProps {
    text:string;
    link:string;
}

const ListItem = (props:LineProps)=>{
    const {text,link} = props;

    return (
      <div className={'lineContainer lineBar'}>
          <div className={"lineTextStyle"}>{text}</div>
          <div className={"lineButtonStyle"}><Button text={"SEE DETAILS"}/></div>
      </div>
    )

}

export default ListItem

