import fn from "./../imgages/fn.png"
import { Link } from 'react-router-dom'

const linkStyle = {
  textDecoration: "none",
  color: 'blue',
};

function InfoPage() {

  return (
    <>
      <section className='heading'>
        <h1>
          Info
        </h1>
      </section>
      <section>
        <h2>Formål</h2>
        <p>Formålet med denne nettsiden er å gjøre det enklere å bidra for alle som vil være med på å forme samfunnet.</p>
        <p>På denne nettsiden kan du <Link to='/idea' style={linkStyle}>sende inn ditt eget forslag</Link> eller <Link to='/suggestions' style={linkStyle}>stemme over hvilke forslag du liker best</Link>!</p>
        <br />
        <h2>Virkninger</h2>
        <img src={fn} width={700} />
      </section>
    </>
  )
}

export default InfoPage
