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
            <tr>
            <th scope="col">Id</th>
            <th scope="col">Email</th>
            <th scope="col">Adress</th>
            <th scope="col">Cell</th>
            <th scope="col">Race</th>
            <th scope="col">Gender</th>
            <th scope="col">Age</th>
            </tr>
        </thead>
        <tbody>
            {
                items.map((d) => (
                    <tr key={d.Item}>
                        <td>{d.Id}</td>
                        <td>{d.Email}</td>
                        <td>{d.Adress}</td>
                        <td>{d.Cell}</td>
                        <td>{d.Race}</td>
                        <td>{d.Gender}</td>
                        <td>{d.Age}</td>
                    </tr>
                ))
            }

            
        </tbody>
        </table>
        </div>
    )
}

export default FileUpload;