import React from "react";

const style = {
    border: "3px solid #999",
    fontSize: "40px",
    backgroundColor: "#fff",
    color: "#37393b",
};

const Box = (props: any) => (
    <button style={style} onClick={() => props.onClick(props.index)}>
      {props.value}
    </button>
);

export default Box;