import React from 'react'

export default function Educations({ id }) {
  return (
    <div id={id} className="educations">
      <h3>Educations</h3>
      <ul>
        <li>
          <div className="year">2014 - 2018</div>
          <div className="list">Universitas Udayana - Major of Computer Science</div>
        </li>
        <li>
          <div className="year">2011 - 2014</div>
          <div className="list">SMA Negeri 1 Gianyar</div>
        </li>
      </ul>
    </div>
  )
}
