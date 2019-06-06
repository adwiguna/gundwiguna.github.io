import React from 'react'

export default function Information() {
  return (
    <div className="information border-bottom border-top pt-4">
      <ul className="fa-ul">
        <li>
          <span className="fa-li">
            <i className="far fa-calendar" />
          </span>
          Gianyar, 11 July 1996
        </li>
        <li>
          <span className="fa-li">
            <i className="fas fa-home" />
          </span>
          Bukit Jati, Gianyar
        </li>
        <li onClick={() => window.open('mailto:gundwiguna@gmail.com')}>
          <span className="fa-li">
            <i className="far fa-envelope" />
          </span>
          <div className="hover">gundwiguna@gmail.com</div>
        </li>
        <li>
          <span className="fa-li">
            <i className="fas fa-phone" />
          </span>
          085-639-46424
        </li>
        <li onClick={() => window.open('https://fb.com/gundwiguna')}>
          <span className="fa-li">
            <i className="fab fa-facebook" />
          </span>
          <div className="link hover">fb.com/gundwiguna</div>
        </li>
        <li onClick={() => window.open('https://linkedin.com/in/anggun-dwiguna-53197511a/')}>
          <span className="fa-li">
            <i className="fab fa-linkedin" />
          </span>
          <div className="link hover">linkedin.com/in/anggun-dwiguna-53197511a/</div>
        </li>
      </ul>
    </div>
  )
}
