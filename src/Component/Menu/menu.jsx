import React from "react";
import { map } from "lodash";

const Menu = ({ categories, handelHover }) => {
  const items = map(categories, elm => (
    <div
      onMouseEnter={() => handelHover(elm.id, elm.level, elm.children)}
      style={{ display: "flex" }}
      key={elm.id}
    >
      <p style={{ marginBottom: "20px" }} key={elm.id}>
        {elm.name}
      </p>
      <div
        style={{
          flexDirection: "row-reverse",
          display: "flex",
          flex: 1
        }}
      >
        {elm.children && <p>.....</p>}
      </div>
    </div>
  ));
  return (
    <div
      style={{
        border: "1px solid red",
        paddingRight: 13,
        paddingLeft: 13,
        width: 177
      }}
    >
      {items}
    </div>
  );
};

export default Menu;
