import React from 'react'
import { Field, reduxForm, FieldArray } from 'redux-form';
import {  withRouter } from 'react-router-dom';
import submit from '../../server/fakeServer'

const validate = values => {
 const errors = {};

 if(!values.name) {
   errors.name = ' Required'
 } else if ((values.name.length > 15) || (values.name.length < 3)) {
   errors.name = ' Must be between 3 and 15 characters '
 }

 if(!values.email) {
   errors.email = ' Required'
 } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
   errors.email = 'Invalid email address'
 }

 if (!values.text) {
   errors.text = ' Required'
 } else if (values.text.length < 10) {
   errors.text = ' Must be more then 10 characters'
 } else if (values.text.length > 120 ){
  errors.text = ' Must be less then 120 characters'
 }
 return errors;
}

const warn = values => {
  const warning = {}
  if (!values.text) {
  } else if (values.text.length < 20 ){
    warning.text = ' really less than 20 characters? '
  } 
  return warning;
}

const renderField = ({ input, label, type, meta: {touched, error, warning } } ) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      <h5 className = 'red'>{touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}</h5>
    </div>
  </div>
)

const renderCategories = ({ fields, meta: {touched, error, submitFailed}}) => (
  <div>
    <button type = 'button' onClick={() => fields.push({})} >Create category</button>
    <div>
      {fields.map((category, index) => (
        <div className = 'flex' key = {index}>
          <Field
            name = {`${category}.name`}
            type = 'text'
            component = {renderField}
            label = 'category' 
          />
          <button type = 'button' title = 'remove category' onClick={() => fields.remove(index)}>X</button>
        </div>
      ))}
    </div>
  </div>
)

class CreatePost extends React.Component {

  render() {
    const { error, handleSubmit, pristine, reset, submitting } = this.props;
    return (
    	<form onSubmit = {handleSubmit(submit)}>
        <div>
          <Field
            name = 'name'
            component = {renderField}
            type = 'text'
            label = 'Name'
          />
        </div>
        <div>
          <Field
            name = 'email'
            component = {renderField}
            type = 'text'
            label = 'email'
          />
        </div>
        <div>
          <Field
            name = 'text'
            component = {renderField}
            type = 'text' 
            label = 'text'
          />
        </div>
        {error && <strong>{error}</strong>}
        <div>
          <FieldArray name = 'categories' component = {renderCategories} />
        </div>
        <div>
          <button type = 'submit' disabled = {submitting} >submit</button>
          <button type = 'button' disabled = {pristine || submitting} onClick= {reset}>clear</button>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'myPost', 
  validate,
  warn
})(withRouter(CreatePost));
