import React, { useState } from "react";
import { map, filter } from "lodash";
import Menu from "./Component/Menu";
import data from "./data";

function App() {
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
  return (
    <div style={{ display: 'flex' }} className="App">
      {
        map(columns, (col, i) => <Menu key={i} categories={col} handelHover={handelHover} />)
      }
    </div>
  );
}

export default App;
