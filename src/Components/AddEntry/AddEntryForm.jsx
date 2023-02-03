import React, { useState } from 'react';


const AddEntryForm = (props) => {

    // after the creating the useState then blind them to their input variables example the value ={example}.
    const [weight, setWeight] = useState(0);    
    const [date, setDate] = useState('');

    //create a function for the button
    function handleSubmit(event){
        event.preventDefault();
        let newEntry = {
            weight: weight,
            date:date
        };
        console.log(newEntry);
        props.addNewEntryProperty(newEntry)
    }

    return (
        // not handle the change (on change)
        <form onSubmit={handleSubmit}>
            <lable>Weight</lable>
            <input type = 'number' value={weight} onChange = {(event) => setWeight(parseFloat(event.target.value))} />
            <label>Date</label>
            <input type = 'date' value={date} onChange = {(event) => setDate(event.target.value)}/>
            <button type='submit'>Add</button>
        </form>
    );
}
 
export default AddEntryForm;