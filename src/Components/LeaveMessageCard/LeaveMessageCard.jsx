import React, { useEffect, useState } from 'react'

const LeaveMessageCard = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [nameIsValid, setNameIsValid] = useState(false)              // namnändring gjord för att tydliggöra
  const [mailIsValid, setMailIsValid] = useState(false)              // namnändring gjord för att tydliggöra
  const [messageIsValid, setMessageIsValid] = useState(false)        // namnändring gjord för att tydliggöra

  const [formTouched, setFormTouched] = useState(false)             // kontrollerar om man har ändrat något i formuläret
  const [errorStatus, setErrorStatus] = useState(true)              
  
  // använder en useEffect för att få ut det sanna/korrekta värdet från loggningen samt
  // att jag bara gör en kontroll och ändrar errorStatus om det är så att vi faktiskt har gjort ändringar i formuläret
  // detta behövs för att du ska få att knappen är inaktiverad från början och bara blir aktiverad när allt är validerat
  useEffect(() => {
    if (formTouched)
      if (!nameIsValid || !mailIsValid || !messageIsValid)
      setErrorStatus(true)
    else
      setErrorStatus(false)

    console.log('name: ' + nameIsValid)
    console.log('mail: ' + mailIsValid)
    console.log('message: ' + messageIsValid)
    console.log('errorStatus: ' + errorStatus)
  })


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
      setName('')
      setEmail('')
      setMessage('')
      setErrorStatus(true)
      
    }
    else if(result.status === 400){
      console.log('Bad Request: Används för ogiltiga begäran, till exempel om begäran är felaktigt formaterad')
    }
    else{
      console.log(result.statusText)
    }
  }

  const handleChange = (e) => {
      setFormTouched(true)                      // om det är så att man har ändrat i ett fält så blir formTouched = true

      switch (e.target.name){
        case 'name':
            setName(e.target.value)
            setNameIsValid(validateName(e.target.value)) 
          break;

        case 'email':
            setEmail(e.target.value)
            setMailIsValid(validateEmail(e.target.value))
          break;

        case 'message':
            setMessage(e.target.value)
            setMessageIsValid(validateMessage(e.target.value))  
          break;
      }



  } 

  const validateName = (value) => {
    if(value.length >= 2 )
      return true
    else
      return false
  }

  const validateEmail = (value) => {
    if(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value))
      return true
    else  
      return false
  }

  const validateMessage = (value) => {
    if(value.length > 1 )
      return true
    else
      return false
  }

  

  return (
    
    <section className="leave-message-card">
        <div className="container">
            <h1>Leave us a message <br/> for any Information:</h1>

            <form onSubmit={handleSubmit} noValidate className="subcribtion-card">
              <div className='input-group-subscription'>
                <label>Namn*</label>
                <input className={formTouched &!nameIsValid ? 'input-content input-error' : 'input-content' } name='name' type="text" value={name} onChange={(e) => handleChange(e)} />
                <p className='Error'>{formTouched &!nameIsValid ? 'Du måste skriva ett giltigt namn' : ''}</p>
              </div> 
              
              <div className='input-group-subscription'>
                <label>Email*</label>
                <input className={formTouched & !mailIsValid ? 'input-content input-error' : 'input-content'} name='email' type="email" value={email} onChange={(e) => handleChange(e)} />
                <p className='Error'>{formTouched &!mailIsValid ? 'Du måste skriva en giltligt email-adress' : ''}</p>
              </div> 
              
              <div className='input-group-subscription'>
                <label>Your Message*</label>
                <input className={formTouched &!messageIsValid ? 'input-content input-error' : 'input-content'} name='message' type='message' value={message} onChange={(e) => handleChange(e)}></input>
                <p className='Error'>{formTouched &!messageIsValid ? 'Du måste skriva text' : ''}</p>
              </div> 
              
              <button type='submit' disabled={errorStatus} className={errorStatus ? 'btn-yellow submitsub error' : 'btn-yellow submitsub'} >Subscribe <i className="fa-regular fa-arrow-up-right"></i></button>

            </form>
            
        </div>
    </section> 
  )
}

export default LeaveMessageCard