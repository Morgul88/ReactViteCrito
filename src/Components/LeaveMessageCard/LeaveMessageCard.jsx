import React, { useState } from 'react'

const LeaveMessageCard = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] =useState('')
  const [errorname, setErrorName] =useState(false)
  const [errormail, setErrorMail] =useState(false)
  const [errormessage, setErrorMessage] =useState(false)

  const [errorstatus, setErrorStatus] =useState(true)
  
  
  
  
  
  
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('Handle submit')

    const user = {name,email,message}
    
    const userJson = JSON.stringify(user) 

    
    const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json', 
        },
        body: userJson, 
    })

    
    if(result.status === 200){
      alert('Tack ! Vi har tagit emot ditt meddelande.')
      console.log(result.statusText)
    }
    else if(result.status === 400){
      console.log('Bad Request: Används för ogiltiga begäran, till exempel om begäran är felaktigt formaterad')
    }
    else{
      console.log(result.statusText)
    }
  }

  const handleChange = (e) => {

      
      switch (e.target.name){
        case 'name':
            setName(e.target.value)
            setErrorName(validateName(e.target.value))
            
          break;
        case 'email':
          
            setEmail(e.target.value)
            setErrorMail(validateEmail(e.target.value))

          break;
        case 'message':
            setMessage(e.target.value)
            setErrorMessage(validateMessage(e.target.value))
            
            
          break;
      }
      console.log(errorname)
      console.log(errormail)
      console.log(errormessage)
      console.log(errorstatus)

      if (!errorname && !errormail && !errormessage) {
        setErrorStatus(false);
      } else {
        setErrorStatus(true);
      }
  } 


  const validateEmail = (value) => {
    if(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value))
        return false
      return true
    
  }

  const validateName = (value) => {
    if(value.length < 2 )
       return true
      return false
    
  }
  const validateMessage = (value) => {
    if(value.length < 1 )
       return true
      return false
    
  }

  

  return (
    
    <section className="leave-message-card">
        <div className="container">
            <h1>Leave us a message <br/> for any Information:</h1>

            <form onSubmit={handleSubmit} noValidate className="subcribtion-card">
              <div className='input-group-subscription'>
                <label>Namn*</label>
                <input className={errorname ? 'input-content input-error' : 'input-content'} name='name' type="text" value={name} onChange={(e) => handleChange(e)} />
                <p className='Error'>{errorname ? 'Du måste skriva ett giltigt namn' : ''}</p>
              </div> 
              
              <div className='input-group-subscription'>
                <label>Email*</label>
                <input className={errormail ? 'input-content input-error' : 'input-content'} name='email' type="email" value={email} onChange={(e) => handleChange(e)} />
                <p className='Error'>{errormail ? 'Du måste skriva en giltligt email-adress' : ''}</p>
              </div> 
              
              <div className='input-group-subscription'>
                <label>Your Message*</label>
                <input className={errormessage ? 'input-content input-error' : 'input-content'} name='message' type='message' value={message} onChange={(e) => handleChange(e)}></input>
                <p className='Error'>{errormessage ? 'Du måste skriva text' : ''}</p>
              </div> 
              
              <button type='submit' disabled={errorstatus} className={errorstatus ? 'btn-yellow submitsub error' : 'btn-yellow submitsub'} >Subscribe <i className="fa-regular fa-arrow-up-right"></i></button>

            </form>
            
        </div>
    </section> 
  )
}

export default LeaveMessageCard