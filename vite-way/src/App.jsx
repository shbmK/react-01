import React from 'react'
import './App.css'

function Header() {
  return (
      <header>
          <nav className="navbar">
              <img src="./react-logo.png" className="imgur" />
              <ul className="nav-items">
                  <li>Pricing</li>
                  <li>About</li>
                  <li>Contact</li>
              </ul>
          </nav>
      </header>
  )
}
function Footer() {
  return (
      <footer className="foot">
          <small>© 2023 Astarte development. All rights reserved.</small>
      </footer>
  )
}
function MainContent() {
  return (
      <div>
          <h1>Reasons I'm excited to learn React</h1>
          <ol>
              <li>It's a popular library, so I'll be 
              able to fit in with the cool kids!</li>
              <li>I'm more likely to get a job as a developer
              if I know React</li>
          </ol>
      </div>
  )
}
function Page() {
  return (
      <div>
          <Header />
          <MainContent />
          <Footer />
      </div>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<Page/>)



