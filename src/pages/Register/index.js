import "./styles.css"
import {Input} from "../../components/Input"
import Title from "../../components/Title"
import Button from "../../components/Button"


export default function Register() {
  return (
    <div className="wrapper__register">
        <div className="register">
            <Title title="Register"/>
            <Input name="Username:" type="text" placeholder="Your username"/>
            <Input name="Email:" type="email" placeholder="Your email"/>
            <Input name="Phone" type="text" placeholder="Your phone number"/>
            <Input name="Password:" type="password" placeholder="Your password"/>

            <Button text="Register"/>
        </div>
    </div>
  )
<<<<<<< HEAD
}
=======
}
>>>>>>> main
