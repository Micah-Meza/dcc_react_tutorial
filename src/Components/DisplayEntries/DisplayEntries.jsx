


//Name the component the same as the file.
// whenever you write javascript code use curly brackets
// to get props to work line 18 need to read props.parentEntries
const DisplayEntries = (props) => {
    return (  
    <table>
    <thead>
      <tr>
      <th>Entry Number</th>
      <th>Weight</th>
      <th>Date</th>
      </tr>
    </thead>
    <tbody>
      {props.parentEntries.map((entry, index) => {
        return (
          <tr>
            <td>{index + 1}</td>
            <td>{entry.weight}</td>
            <td>{entry.date}</td>
          </tr>
        );
      })} 
    </tbody>
  </table>
  );
}
 
export default DisplayEntries;
