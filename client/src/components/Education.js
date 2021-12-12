import React, { useState, useEffect } from "react";
import InputGroup from "../common/InputGroup";
import {connect} from "react-redux";
import {AddEducation} from "../redux/actions/ProfileAction";

function Education(props) {

    const [form, setForm] = useState({});
    const onChange_handle = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const onSubmit_handle = async (e) => {
        e.preventDefault();
        const data = form;
        props.AddEducation(data, props.history);
    };






    return  <div>
            <div className="container p-4">
                <form
                    className="text-center border border-light p-5"
                    onSubmit={onSubmit_handle}
                >
                    <p className="h4 mb-4">Experience</p>

                    <InputGroup
                        type="text"
                        name="school"
                        placeholder="school"
                        onchange={onChange_handle}
                        errors = ""
                        value={form.school}
                    />
                    <InputGroup
                        type="date"
                        name="from"
                        placeholder="from"
                        onchange={onChange_handle}
                        errors = ""
                        value={form.from}
                    />

                    <InputGroup
                        type="date"
                        name="to"
                        placeholder="to"
                        onchange={onChange_handle}
                        errors = ""
                        value={form.to}
                    />

                    <InputGroup
                        type="text"
                        name="description"
                        placeholder="description"
                        onchange={onChange_handle}
                        errors = ""
                        value={form.description}
                    />

                    <button className="btn btn-info btn-block my-4" type="submit">
                        Save
                    </button>
                </form>
            </div>
        </div>


}
const mapStateToProps = (state)=>({
    auth: state.auth,
    profile: state.profile,
    errors: state.errors
})
export default connect(mapStateToProps, { AddEducation })(Education);
