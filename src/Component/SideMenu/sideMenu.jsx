import React, { useState } from "react";
import { map, filter } from "lodash";
import Menu from "../Menu";
import data from "../../data";

function SideMenu() {
  const [columns, setColumns] = useState([data]);
  const [lev, setLev] = useState(0);
  const handelHover = (id, level, children) => {
    if (children && children.length > 0) {
      if (lev === level) {
        var col = filter(columns, (c, i) => i < lev);
        setColumns([...col, children]);
        setLev(level);
      } else if (lev < level){
        setColumns([...columns, children]);
        setLev(level);
      } else {
        var cols = filter(columns, (c, i) => i < level);
        setColumns([...cols, children]);
        setLev(level);
      }
    }
  };
  const hoverOutSide = () => setColumns([data]);

  return (
    <div onMouseLeave={() => hoverOutSide()} style={{ display: 'flex' }}>
      {
        map(columns, (col, i) => <Menu key={i} categories={col} handelHover={handelHover} hoverOutSide={hoverOutSide} />)
      }
    </div>
  );
}

export default SideMenu;
