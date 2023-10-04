import "./ContactLog.css";
import React, { useEffect, useState } from "react";

function ContactLog() 
{
  const [records, setRecords] = useState([]);

  useEffect(() => {
      fetch('https://todolist-sample.000webhostapp.com/read.php')
      .then(response => response.json())
      .then(data => setRecords(data))
      .then(err => console.log(err))
  }, [])

  return (
    <div className="">
      <form method="POST">
        <div className="">
          <table className="flex flex-col w-auto border border-black rounded-x bg-gray-500 text-sm text-left text-gray-500 dark:text-gray-400">
            <tr className="flex text-white">
              <th>Lastname</th>
              <th>Firstname</th>
              <th>Email</th>
              <th>Contact#</th>
            </tr>
            <tr>
              {records.map((list, index)=> (
                <td key={index}>{list.firstName}</td>
              ))}
            </tr>
          </table>
        </div>
      </form>
    </div>
  );
}

export default ContactLog;
