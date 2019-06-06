import React from 'react'
import card from '../assets/images/card.jpg'
import rintrip from '../assets/images/portfolios/rin-trip.png'
import eqh from '../assets/images/portfolios/eqh.png'

const Card = ({ img = card, link = '#', title = 'Unavailable', text = 'Unavailable' }) => (
  <div className="mr-2 border card shadow" style={{ width: '18rem' }}>
    <img className="card-img-top" src={img} alt="Card-cap" />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
      <a href={link} className="btn btn-primary">
        Visit
      </a>
    </div>
  </div>
)

export default function Portfolios({ id }) {
  return (
    <div id={id} className="my-3">
      <h3>Portfolios</h3>
      <div className="d-flex">
        <Card
          img={rintrip}
          title="Rin-Trip"
          text="An ongoing project that focuses to be an application for tourists who want to travel,
        discover, and experience the best places in Bali in a package of variants tour."
          link="https://rin-trip.web.app"
        />
        <Card
          img={eqh}
          title="EquineHub"
          text="EquineHub is the World 's Equine platform that leverages on blockchain technology to transform the equine world, making it more efficient, transparent, secure, and inclusive."
          link="http://demo.equincehub.com"
        />
      </div>
    </div>
  )
}
