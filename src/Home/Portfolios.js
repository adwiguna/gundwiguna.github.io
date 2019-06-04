import React from 'react'
import card from '../assets/images/card.jpg'
import { Link } from 'react-router-dom'

const Card = () => (
  <div class="card" className="m-2 border shadow" style={{ width: '18rem' }}>
    <img class="card-img-top" src={card} alt="Card-cap" />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">
        Some quick example text to build on the card title and make up the bulk of the card's
        content.
      </p>
      <Link to="#" class="btn btn-primary">
        Go somewhere
      </Link>
    </div>
  </div>
)

export default function Portfolios() {
  return (
    <div className="my-3">
      <h3>Portfolios</h3>
      <div className="d-flex">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}
