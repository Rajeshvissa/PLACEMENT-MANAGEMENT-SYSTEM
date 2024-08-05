import { useState,useEffect } from "react";
import Axios from 'axios';
import StudentListRow from "./StudentListRow";
export default function StudentList(){

    const  [arr,setArr] = useState([]);

    useEffect(()=>{

        Axios.get('http://localhost:9000/studentRoute/')
        .then((res)=>{
            if(res.status===200)
                setArr(res.data);

            else
                Promise.reject();
        })
        .catch((err)=>{
                alert(err);
        },[])
    })


    const ListItems=()=>{
        return arr.map((val,ind)=>{
                return <StudentListRow obj={val}/>
        })
    }

    return(

        <table class='table table-bordered table-striped '>
            <thead>
            <tr>
                <th class='text-center'>
                Name
                </th>
                <th>
                    Email
                </th>

                <th>
                    Registration Number
                </th>
                </tr>
                

                </thead>

                <tbody>
                    {ListItems()}
                </tbody>


            
          
        </table>
    )
}