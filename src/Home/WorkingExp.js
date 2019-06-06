import React from 'react'

export default function WorkingExp({ id }) {
  return (
    <div id={id} className="working-exp">
      <h3>Working Experiences</h3>
      <ul>
        <li>
          <div className="year">Aug 2018 - Present</div>
          <div className="list">Technical Associate - BlockchainZoo</div>
        </li>
        <li>
          <div className="year">Sep 2017 - Nov 2017</div>
          <div className="list">Intern as Staff of Networking and Infrastructure</div>
        </li>
      </ul>
    </div>
  )
}
