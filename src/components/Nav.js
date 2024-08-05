import {Link} from 'react-router-dom';

 export default function Nav(){

    return(

   

        <nav class='navbar'>

            <Link to='/'class='navbar-brand'>
            MERN APPLICATION
            </Link>

            <div class='nav'>

                <Link to='/create-student' class='nav-link'>
                Create Student
                
                </Link>

                <Link to='/student-list' class='nav-link'>
                StudentList
                </Link>

            </div>

        </nav>

       


    )

}