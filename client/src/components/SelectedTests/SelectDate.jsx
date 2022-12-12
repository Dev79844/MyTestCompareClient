import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function SelectDate() { 
    const [value, onChange] = React.useState(new Date());
    return (
        <div>
        <Calendar
            onChange={onChange}
                value={value}
                minDate={new Date()}
        />
        </div>
    );
}