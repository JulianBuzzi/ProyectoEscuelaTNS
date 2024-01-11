// src/App.js
import React, { useState } from "react";
// import "./App.css";



// First Date Picker --> react-date-picker --> https://www.npmjs.com/package/react-date-picker

// import DatePicker from "react-date-picker";
// import 'react-date-picker/dist/DatePicker.css';
// import 'react-calendar/dist/Calendar.css';

// type ValuePiece = Date | null;

// type Value = ValuePiece | [ValuePiece, ValuePiece];

// const App: React.FC = () => {

//   const [value, setValue] = useState<Value>(new Date());
//   return (
//     // <div><s
//     <DatePicker
//       className="customDatePicker" // Estilos para el contenedor principal del DatePicker
//       calendarClassName="customCalendar"
//       value={value} 
//       onChange={(value) => setValue(value)}
//       format="y-MM-dd HH:mm"
//     />

//     // </div>
//   );
// };

// export default App;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Second Date Picker --> rsuitejs --> https://rsuitejs.com/components/date-picker/

import { DatePicker } from 'rsuite';
// import 'rsuite/dist/styles/rsuite-default.css';
import "rsuite/dist/rsuite.min.css";


const App: React.FC = () => {

  const [value, setValue] = useState<Date | null>(new Date());
  const ranges = [
    {
      label: 'Now',
      value: new Date()
    }
  ];
  return (

    <>
      <DatePicker
        format="dd MMM yyyy hh:mm aa"
        showMeridian
        ranges={ranges}
        value={value}
        editable={true}
        style={{ width: 260, background: 'grey' }}
        onOk={(value) => setValue(value)}
        onChange={(value) => setValue(value)}

      />
      <hr />
      {/* <DatePicker format="hh:mm:ss aa" showMeridian ranges={ranges} style={{ width: 260 }} /> */}
    </>

    // </div>
  );
};

export default App;


// Third Date Picker --> react-date-picker --> https://shahabyazdi.github.io/react-multi-date-picker/

// import DatePicker, { Calendar } from "react-multi-date-picker"

// const App: React.FC = () => {

//   const [value, setValue] = useState(new Date());
//   return (

//     <>
//       <DatePicker
//         format="dd MMM YYYY hh:mm a"
//         value={value}
//         editable={true}
//         onChange={(value) => setValue(value)}
//       />
//     </>
//   );
// };

// export default App;
