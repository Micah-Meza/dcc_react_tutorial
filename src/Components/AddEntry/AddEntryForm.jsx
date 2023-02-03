import React, { useState } from 'react';
import './AddEntryForm.css';


const AddEntryForm = (props) => {

    // after the creating the useState then blind them to their input variables example the value ={example}.
    const [weight, setWeight] = useState();    
    const [date, setDate] = useState('');

    //create a function for the button
    function handleSubmit(event){
        event.preventDefault();
        let newEntry = {
            weight: weight,
            date: date
        };
        console.log(newEntry);
        props.addNewEntryProperty(newEntry)
    }

    return (
        // not handle the change (on change)
        <form onSubmit={handleSubmit} className='form-grid'>
            <div className='formgroup'>
                <lable>Weight</lable>
                <input type = 'number' className='form-control' value={weight} onChange = {(event) => setWeight(parseFloat(event.target.value))} />
            </div>
            <div className='formgroup'>
                <label>Date</label>
                <input type = 'date' className='form-control' value={date} onChange = {(event) => setDate(event.target.value)}/>
            </div>
                <button type='submit' className='btn btn-primary' style ={{'margin-top': '1em'}}>Add</button>
        </form>
    );
}
 
export default AddEntryForm;