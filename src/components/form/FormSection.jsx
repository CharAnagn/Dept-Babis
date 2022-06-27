import { FormContainer, FormSection } from "../styles/form/FormSection.styled"
import { useState } from "react"

export const Form = () =>{
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleChange =(e)=>{
        setName(e.target.value);
      }

      const handleEmailChange =(e)=>{
        setEmail(e.target.value);
      }

      const handleMessageChange = (e) =>{
        setMessage(e.target.value)
      }
       
      const handleSubmit = (e) => {
        alert('A form was submitted with Name : "' + name + '", Email: "' + email +'" and Message :"' + message + '"');
        e.preventDefault();
      }

    return(
        <>
        <FormContainer>
            <h1>Question? <br />We are here <br/> to help!</h1>
            <FormSection>
                <div>
                <label>
                    NAME:
                </label><br/>
                <input type="text" value={name} required onChange={(e) => {handleChange(e)}} /><br/>

                </div>
                <div>
                <label>
          EMAIL:
        </label><br/>
        <input type="email" value={email} required onChange={(e) => {handleEmailChange(e)}} /><br/>
                </div>
               <div>
               <label>
          MESSAGE:
        </label><br />
        <input type="text" value={message} required onChange={(e) => {handleMessageChange(e)}} /><br/>
               </div>
      
        <button type="submit" value="Submit" onSubmit={(e)=> {handleSubmit(e)}}/>
            </FormSection>
        </FormContainer>
        </>
    )


}