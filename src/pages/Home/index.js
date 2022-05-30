import React from 'react'
import Button from '../../components/Button'

function HomePage() {
    function showMessages() {
        window.alert('Mesage');
    }
  return (
    <div>
        <h1>HomePage</h1>
        <Button handleOnClick={showMessages} text="Primary" type={'primary'} />
        <Button handleOnClick={showMessages} text="Danger" type={'danger'} />
    </div>
  )
}

export default HomePage