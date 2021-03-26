import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function login(){
  const [userName, setUserName] = useState('login plz')
  const router = useRouter()

  const registerUser = async event => {
    event.preventDefault()
    const fetchMethod ={
      body: JSON.stringify({
        id: event.target.id.value,
        pw: event.target.password.value
      }),
      headers: {'Content-Type': 'application/json'},
      method: 'POST'
    }
    const res = await fetch('http://192.168.219.106:33333/login', fetchMethod)
    const result = await res.json()
    if(res.redirected){
      document.getElementById('id').value='';
      document.getElementById('password').value='';
      setUserName('LOGINFAIL');
    }else{
      router.push('/')
    }
  }

  return(
    <div>
      <Head>
      </Head>
      <header>
      </header>
      <main>
        <h1>{userName}</h1>
        <form onSubmit={registerUser}>
          <label htmlFor="id">ID</label>
          <input type="text" name="id" id="id" placeholder="id" required /><br />
          <label htmlFor="Password">Password</label>
          <input type="password" name="password" id="password" placeholder="pw" required /><br />
          <button type="submit">Submit</button>
        </form>
      </main>
    </div>
  )
}