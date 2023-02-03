import React, { useState } from 'react'; //imrs shortcut
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntryForm from './Components/AddEntry/AddEntryForm';


function App() {

  //make sure to name the second parameter set.... that's the convention.
  const [entries, setEnteries] = useState([{weight: 175, date: '11-23-2021'}, {weight: 165, date: '12-12-2021'}]) // normally this is not done. 

  // whenever you write javascript code use curly brackets, From here instaniate your props file. I'm using the parentsEntries parameters.
  // the parentEntries key is pasting info to the DisplayEntries.

  return (
    <div>
      <DisplayEntries parentEntries = {entries}/>
      <AddEntryForm />
    </div>
  );
}

export default App;
