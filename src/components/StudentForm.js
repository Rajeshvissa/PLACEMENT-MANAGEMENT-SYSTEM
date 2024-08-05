
import { useState } from "react";
export default function StudentForm(props){

    const [name,setName]=useState("");
    const [Email,setEmail]=useState("");
    const [regno,setregno]=useState("");

    // alert(name);

    const arr=[name,Email,regno];

    const handleclick=()=>{

        props.getState(arr);
    }





    return(

        <div style={{maxWidth:'40%',margin:'0px auto'}}>
            <input onChange={(event)=>setName(event.target.value)} class='form-control' placeholder='Enter your name'></input>
            <input onChange={(event)=>setEmail(event.target.value)} class='form-control' placeholder='Enter your email'></input>
            <input onChange={(event)=>setregno(event.target.value)}class='form-control' placeholder='Enter your Registration number'></input>
            <button  type='submit' class=' btn btn-warning d-block mx-auto my-3' onClick={handleclick}>Submit</button>
        </div>
    )
}