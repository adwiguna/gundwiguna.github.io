import React from 'react'

export default function Licenses({ id }) {
  return (
    <div id={id} className="licenses">
      <h3>{`Licenses & Certification`}</h3>
      <ul>
        <li>
          <div className="year">Issued Mar 2019</div>
          <div className="list">SoloLearn JavaScript Fundamental</div>
          <div
            className="credential"
            onClick={() => window.open('https://www.sololearn.com/Certificate/1024-13285386/pdf/')}
          >
            Credential ID: 1024-13285386
          </div>
        </li>
        <li>
          <div className="year">Issued Mar 2019</div>
          <div className="list">SoloLearn HTML Fundamental</div>
          <div
            className="credential"
            onClick={() => window.open('https://www.sololearn.com/Certificate/1014-13285386/pdf/')}
          >
            Credential ID: 1014-13285386
          </div>
        </li>
        <li>
          <div className="year">Issued Apr 2019</div>
          <div className="list">SoloLearn CSS Fundamental</div>
          <div
            className="credential"
            onClick={() => window.open('https://www.sololearn.com/Certificate/1023-13285386/pdf/')}
          >
            Credential ID: 1023-13285386
          </div>
        </li>
        <li>
          <div className="year">Issued Sep 2018</div>
          <div className="list">IELTS Academic</div>
          <div className="credential">Band Score of 6.0</div>
        </li>
      </ul>
    </div>
  )
}
