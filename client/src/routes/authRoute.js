import { redirect } from 'react-router-dom'
import AuthAPI from '../api/AuthAPI'
import { LOGIN } from '../pages/AuthForm'

export const authAction = async ({ request }) => {
  const formData = await request.formData()
  const { username, email, usernameOrEmail, password, type } =
    Object.fromEntries(formData.entries())

  const { user, token, error } =
    type === LOGIN
      ? await AuthAPI.login({ usernameOrEmail, password })
      : await AuthAPI.signup({ username, email, password })
  if (error) throw new Error(error)

  localStorage.setItem('token', token)
  return redirect('/')
}
