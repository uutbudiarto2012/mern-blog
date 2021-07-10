import React from 'react'
import { useHistory } from 'react-router-dom'
import { BGRegister } from '../../assets'
import {Button, Input, Spacer,Link} from '../../components'
import './register.scss'

const Register = () => {
    const history = useHistory()
    return (
        <div className="auth-page">
            <div className="left">
                <img src={BGRegister} className="bg-register" alt="" />
            </div>
            <div className="right">
                <h1>Register Page </h1>
                <Spacer height={30} />
                <Input label="Fullname" />
                <Spacer height={30} />
                <Input label="Username" />
                <Spacer height={30} />
                <Input label="Password" />
                <Spacer height={30} />
                <Button type="btn primary" label="REGISTER" onClick={()=>history.push('/login')} />
                <Spacer height={10} />
                <Link label="Login" onClick={()=>history.push('/login')} />
            </div>
        </div>
    )
}

export default Register
