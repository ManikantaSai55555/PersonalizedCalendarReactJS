import { useMemo, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./App.css";
import TextArea from "./Components/TextArea";

function App() {
  const [value, setValue] = useState(new Date());

  const getTodoList=useMemo(()=>{
    // console.log("memo");
    return(
      <TextArea date={value.toString().substring(0, 16)} />
    )
  },[value])

  return (
    <center>
      {/* {console.log("first")} */}
      <div className="App">
        {/* {console.log(value.toString().substring(0, 16))} */}
        <div className="child">
          <h1>Calendar</h1>
          <Calendar onChange={setValue} value={value} />
        </div>
        <div className="child">
          <h1>Things to do on {value.toString().substring(0, 16)}</h1>
          {getTodoList}
        </div>
      </div>
    </center>
  );
}

export default App;
