import { useState } from 'react'
import { Form } from 'react-router-dom'
import tw from 'twin.macro'

export const LOGIN = 'login'
export const SIGNUP = 'signup'

export default function AuthForm() {
  const [formType, setFormType] = useState(LOGIN)

  const toggle = () => setFormType(prev => (prev === LOGIN ? SIGNUP : LOGIN))

  return {
    [LOGIN]: (
      <>
        <Title>Login</Title>
        <Form method='POST'>
          <label htmlFor='usernameOrEmail'>Username</label>
          <input type='text' name='usernameOrEmail' />
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' />
          <button type='submit'>Submit</button>
          <input className='hidden' name='type' value={LOGIN} />
        </Form>
        <ToggleButton text='Sign Up' toggle={toggle} />
      </>
    ),
    [SIGNUP]: (
      <>
        <Title>Sign Up</Title>
        <Form method='POST'>
          <label htmlFor='username'>Username</label>
          <input type='text' name='username' />
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' />
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' />
          <button type='submit'>Submit</button>
          <input className='hidden' name='type' value={SIGNUP} />
        </Form>
        <ToggleButton text='Login' toggle={toggle} />
      </>
    ),
  }[formType]
}

const ToggleButton = ({ text, toggle }) => (
  <button onClick={toggle}>{text}</button>
)

const Title = tw.h1`text-white text-5xl`
