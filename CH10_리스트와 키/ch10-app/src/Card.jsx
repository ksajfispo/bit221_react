import React from 'react'

const styles ={
  card : {
    width : '18rem'
    
  },
  cardBody : {
    fontFamily : "Hi Melody"
  }
}

function Card(props) {
  const title = props.title;
  const content = props.content;
  const img = props.img;

  return (
    <div>
      <div class="card" style={styles.card}>
        <img src={`./imgs/${img}`} class="card-img-top" alt="..." />
          <div class="card-body" style={styles.cardBody}>
            <h5 class="card-title">{title}</h5>
            <p class="card-text">{content}</p>
            <a href="#" class="btn btn-primary">GO detail</a>
          </div>
      </div>
    </div>
  )
}

export default Card