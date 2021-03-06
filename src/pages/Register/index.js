import "./styles.css"
import {Input} from "../../components/Input"
import { Heading2 } from "../../components/Title"
import Button from "../../components/Button"


export default function Register() {
  return (
    <div className="wrapper__register">
        <div className="register">
            <Heading2 heading2="Register"/>
            <Input name__label="Username:" type="text" placeholder="Your username"/>
            <Input name__label="Email:" type="email" placeholder="Your email"/>
            <Input name__label="Phone" type="text" placeholder="Your phone number"/>
            <Input name__label="Password:" type="password" placeholder="Your password"/>
            <Button text="Register"/>
        </div>
    </div>
  )
}
