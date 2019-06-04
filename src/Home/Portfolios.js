import React from 'react'
import card from '../assets/images/card.jpg'
import { Link } from 'react-router-dom'

const Card = () => (
  <div className="m-2 border card shadow" style={{ width: '18rem' }}>
    <img className="card-img-top" src={card} alt="Card-cap" />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">
        Some quick example text to build on the card title and make up the bulk of the card's
        content.
      </p>
      <Link to="#" className="btn btn-primary">
        Go somewhere
      </Link>
    </div>
  </div>
)

export default function Portfolios({id}) {
  return (
    <div id={id} className="my-3">
      <h3>Portfolios</h3>
      <div className="d-flex">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}
