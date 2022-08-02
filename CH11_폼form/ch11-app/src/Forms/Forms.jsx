import React from 'react'
import Fileinput from './Fileinput'
import FruitSelect from './FruitSelect'
import NameForm from './NameForm'

function Forms() {
  return (
    <div>
      <NameForm />
      <FruitSelect/>
      <Fileinput />
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12660.094714325!2d127.02568024264356!3d37.50735967694295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca15aee9ab0cb%3A0x31793fc63e0cf9d3!2z67mE7Yq47Lqg7ZSE!5e0!3m2!1sko!2skr!4v1659418935493!5m2!1sko!2skr" width="600" height="450" style={{boder:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      
    </div>
  )
}

export default Forms