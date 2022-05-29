import React, { useState } from "react";

function Use (){
      let initialArrayItem = [
        {
          id: 0,
          name: 'Ankit',
          salary: 20000,
          designation: 'Sr. Software Developer'
        }
      ]
    
      const [items, setItems] = useState(initialArrayItem);
    
      const addItem = () => {
        let data = [...items];
    
        let anotherName = {
          id: 1,
          name: 'Gorakh',
          salary: 100000,
          designation: 'CEO'
        }
        data.push(anotherName)
        console.log("data", data);
        setItems(data)
      }  
      return (
        <div>
          <button onClick={addItem}>Add A Number</button> 
           
           {items.map((item) => {
            return (
              <div>
                {item.id} . Your Name is: {item.name} & salary is: {item.salary}
              </div>
            )
          })}
        </div>
      )
}
export default Use