import Classnames from 'classnames';
function InputGroup({type, name, placeholder,  onchange, errors}){
    return (
    <>
        <input
          type={type}
          name={name}
          class={Classnames("form-control mb-4", {"is-invalid": errors})}
          placeholder={placeholder}
          onChange={onchange}
        />
        {
         errors && (<div class="invalid-feedback">
            {errors}
          </div>)
        }

    </>
    )
}

export default InputGroup;