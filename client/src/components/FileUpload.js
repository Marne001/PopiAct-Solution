import React, { useState} from 'react';
import * as XLSX from 'xlsx';


function FileUpload(){
    const[items, setItems] = useState([])

    const readExcel = (file) => {

        const promise = new Promise((resolve,reject)=>{
            const fileReader= new FileReader();
            fileReader.readAsArrayBuffer(file)

            fileReader.onload=(e)=>{
                const bufferArray=e.target.result;

                const wb=XLSX.read(bufferArray,{type: "buffer"});

                const wsname=wb.SheetNames[0];

                const ws=wb.Sheets[wsname];

                const data=XLSX.utils.sheet_to_json(ws);

                resolve(data);
            };

            fileReader.onerror=(error) => {
                reject(error);
            };
        });

        promise.then((d)=>{
            console.log(d);
            setItems(d);
        })

    };

    return(
        <div>
            <input 
                type="file" 
                onChange={(e)=>{
                    const file = e.target.files[0];
                    readExcel(file)
                    
            }}
          />
  
        <table class="table">
        
        <thead>
            Personal Information:
            <tr>
            <th scope="col">Id</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Cell</th>
            <th scope="col">Race</th>
            <th scope="col">Gender</th>
            <th scope="col">Age</th>
            <th scope="col">Language</th>
            <th scope="col">Education</th>
            <th scope="col">Salary</th>
            <th scope="col">Occupation</th>
            </tr>
        </thead>
        <tbody>
            {
                items.map((d) => (
                    <tr key={d.Item}>
                        <td>{d.Id || d.ID || d.id}</td>
                        <td>{d.Email || d.email}</td>
                        <td>{d.Address || d.address}</td>
                        <td>{d.Cell || d.PhoneNumber || d.Phone || d.cell || d.PhoneNumber || d.phone}</td>
                        <td>{d.Race || d.race}</td>
                        <td>{d.Gender || d.gender}</td>
                        <td>{d.Age || d.age}</td>
                        <td>{d.Language || d.language}</td>
                        <td>{d.Education || d.education}</td>
                        <td>{d.Salary || d.Income || d.salary || d.income}</td>
                        <td>{d.Occupation || d.Enployment || d.occupation || d.enployment}</td>
                    </tr>
                ))
            }

            
        </tbody>
        </table>
        </div>
    )
}

export default FileUpload;