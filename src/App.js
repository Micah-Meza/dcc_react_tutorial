import React, { useState } from 'react'; //imrs shortcut
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntryForm from './Components/AddEntry/AddEntryForm';
import EntriesChartTracker from './Components/EntriesChartsTracker/EntriesChartTracker';


function App() {

  //make sure to name the second parameter set.... that's the convention.
  const [entries, setEnteries] = useState([{weight: 175, date: '11-23-2021'}, {weight: 165, date: '12-12-2021'}]) // normally this is not done. 

  //This fuction passes info down to the child component. The ...entries is a spread apart method. 
  //It allows the and array's values to be place inside a new array rather 
  //than nesting it making an array within an array.  
  // inside of writing it like entry.push(entry) this is wrong, because it does updat an array , but just adds to it. What we need is an updated value.
  // therefore it is NOT... the same. // The tempEntries = [entry, ...entries] adds to the top of the list, but tempEntries =[...entries, entry] adds it to the bottom.  
  
  function  addNewEntry(entry){

    let tempEntries =[...entries, entry];
    setEnteries(tempEntries)
  }

  // whenever you write javascript code use curly brackets, From here instaniate your props file. I'm using the parentsEntries parameters.
  // the parentEntries key is pasting info to the DisplayEntries.
  // You can name them the same such as a <AddEntryForm *** addNewEntry = {addNewEntry} *** /> Its typical done that way just make to name the props variable the same. it would be props.addNewEntry(entry)
  return (
    <div>
      <DisplayEntries parentEntries = {entries}/>
      <AddEntryForm addNewEntryProperty = {addNewEntry} />
      <EntriesChartTracker parentEntries = {entries}/>
    </div>
  );
}

export default App;
