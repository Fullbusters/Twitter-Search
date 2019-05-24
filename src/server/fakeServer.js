import { SubmissionError } from 'redux-form'
import { actionSavePost } from '../actions/actions'


const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const  submit = (values, dispatch) => {
  return sleep(1000).then(() => {
    if (!['fullbuster'].includes(values.name)) {
      throw new SubmissionError({
        name: 'User does not exist',
        _error: 'Login failed!'
      })
    } if (!['fullbuster0033@gmail.com'].includes(values.email)) {
      throw new SubmissionError({
        email: 'Email does not exist',
        _error: 'Login failed!'
      })
    } else {
      dispatch(actionSavePost(values))
    }
  })
}

export default submit