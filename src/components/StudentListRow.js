
import Axios from 'axios';
export default function StudentListRow(props){

    const {_id,name,email,regNo}=props.obj;


    const handleclick=()=>{

        Axios.delete("http://localhost:9000/studentRoute/delete-student/" +_id)
        .then((res)=>{

            if(res.status===200){
                alert("Record deleted");
                window.location.reload();
            }

            else
                Promise.reject();
        })
        .catch((err)=>{
            alert(err);
        })
    }

    return(

        <tr>
            <td>
                {name}
            </td>
            <td>
                {email}
            </td>
            <td>
                {regNo}
            </td>

            <td class='d-flex justify-content-center' >
                <button class='btn btn-success'>Edit</button>
                <button class='btn btn-danger' onClick={handleclick}>Delete</button>
            </td>
        </tr>
    )
}