import React from "react";

function ListItem(props) {
    return (
        <option value={props.value}>{props.text}</option>
    );
}

export { ListItem };