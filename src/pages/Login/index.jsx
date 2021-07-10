import React from 'react'
import { useHistory } from 'react-router-dom'
import { BGLogin } from '../../assets'
import { Button, Input, Spacer,Link } from '../../components'


const Login = () => {
    const history = useHistory()
    return (
        <div className="auth-page">
            <div className="left">
            <img src={BGLogin} alt="" className="bg-register"/>
            </div>
            <div className="right">
            <h1>Login Page </h1>
                <Spacer height={30} />
                <Input label="Username" />
                <Spacer height={30} />
                <Input label="Password" />
                <Spacer height={30} />
                <Button type="btn primary" label="LOGIN" onClick={()=> history.push('/')} />
                <Spacer height={10} />
                <Link label="Register" onClick={()=> history.push('/register')} />
            </div>
        </div>
    )
}

export default Login
