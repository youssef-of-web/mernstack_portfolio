import {connect} from "react-redux";
import {GetProfile, DelExperience} from "../redux/actions/ProfileAction";
import {useEffect} from "react";
import {Link} from "react-router-dom";
function Dashboard(props) {
    const { profile } = props;

    useEffect(async ()=>{
        const getData = ()=>{
            props.GetProfile()
        }
        if(!profile.username){
            await getData();
        }
    })

    const deleteExperience = (id)=>{
        props.DelExperience(id)
    }
    return (
        <div className={"container mt-4"}>

            <main>
                {
                   profile.username ?
                       (
                           <div>
                               <div>
                                   <span><h3>Profile</h3></span>
                                   <Link class="nav-link" to="/profile">update Profile</Link>
                                   <div className={"profile"}>
                                       <table className="table">
                                           <thead>
                                           <tr>
                                               <th scope="col">Username</th>
                                               <th scope="col">Country</th>
                                               <th scope="col">Website</th>
                                               <th scope="col">Skills</th>
                                           </tr>
                                           </thead>
                                           <tbody>
                                           <tr>
                                               <td>{profile.username}</td>
                                               <td>{profile.country}</td>
                                               <td>{profile.website}</td>
                                               <td>{profile.skills.join(',')}</td>
                                           </tr>

                                           </tbody>
                                       </table>
                                   </div>
                               </div>

                               <div>
                                   <span><h3>Experiences</h3></span>
                                   <Link class="nav-link" to="/profile/experience">Add experience</Link>
                                   <div className={"experiences"}>
                                       <table className="table">
                                           <thead>
                                           <tr>
                                               <th scope="col">Title</th>
                                               <th scope="col">Company</th>
                                               <th scope="col">Location</th>
                                               <th scope="col">From</th>
                                               <th scope="col">To</th>
                                               <th scope="col">Description</th>
                                               <th scope="col">Action</th>
                                           </tr>
                                           </thead>
                                           <tbody>
                                           {
                                               profile.experience.map(e=>(
                                                   <tr>
                                                       <td>{e.title}</td>
                                                       <td>{e.company}</td>
                                                       <td>{e.location}</td>
                                                       <td>{e.from}</td>
                                                       <td>{e.to}</td>
                                                       <td>{e.description}</td>
                                                       <td><button onClick={()=>deleteExperience(e._id)}>delete</button></td>
                                                   </tr>
                                               ))
                                           }

                                           </tbody>
                                       </table>
                                   </div>
                               </div>

                               <div>
                                   educations
                               </div>
                           </div>
                       ):
                       <Link className={"btn btn-primary"} to='/profile'>Create Profile</Link>
                }

            </main>
        </div>
    )
}
const mapStateToProps = (state)=>({
    auth: state.auth,
    profile : state.profile,
    errors: state.errors
})
export  default connect (mapStateToProps, {GetProfile, DelExperience})(Dashboard)