import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import InputGroup from "../common/InputGroup";
import { AddProfile, GetProfile } from "../redux/actions/ProfileAction";

function Profile(props) {
  const [dataProfile, setDataProfile] = useState({})
  const [form, setForm] = useState({});
  const onChange_handle = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const onSubmit_handle = async (e) => {
    e.preventDefault();
    const data = form;
    props.AddProfile(data)
  };


  useEffect(async() => {
     const get_data =  ()=>{
      props.GetProfile();
     }
      await get_data();
      await setDataProfile(props.profile)
     
  },[])
   

  const { errors } = props;
  return  props.profile.skills && dataProfile.skills ? <div>
     <div className="container p-4">
      <form
        className="text-center border border-light p-5"
        onSubmit={onSubmit_handle}
      >
        <p className="h4 mb-4">Profile</p>

        <InputGroup
          type="text"
          name="username"
          placeholder="your username"
          onchange={onChange_handle}
          errors = {errors.username}
          value={dataProfile.username}
        />

        <InputGroup
          type="text"
          name="country"
          placeholder="your country please"
          onchange={onChange_handle}
          errors = {errors.country}
          value={dataProfile.country}
        />

        <InputGroup
          type="text"
          name="website"
          placeholder="your website please"
          onchange={onChange_handle}
          errors = {errors.country}
          value={dataProfile.website}
        />

        <InputGroup
          type="text"
          name="skills"
          placeholder="your skills please"
          onchange={onChange_handle}
          errors = {errors.skills}
          value={dataProfile.skills.join(',')}
        />

         <InputGroup
          type="text"
          name="bio"
          placeholder="your bio please"
          onchange={onChange_handle}
          errors = {errors.bio}
          value={dataProfile.bio}
        />

        <button className="btn btn-info btn-block my-4" type="submit">
          Save
        </button>
      </form>
    </div>
    </div>
    :
    <div class="spinner-border" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  
}
const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
  errors: state.errors
})
export default connect(mapStateToProps, {AddProfile, GetProfile})(Profile);
