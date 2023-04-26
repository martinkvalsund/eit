import treningspark from "../imgages/workout.jpeg"
import pond from "../imgages/pond.jpeg"
import Upvote from "./../components/Upvote"

function OurSuggestionsPage() {

  return (
    <>
      <section className='heading'>
        <h1>
          Forslag
        </h1>
        <p>Her er en oversikt over forslag dere kan stemme på</p>
      </section>
      <section>
        <h1>Forslag 1:</h1>
        <p>Sette inn treningspark</p>
        <img src={treningspark} width={800} alt="Park" />
        <Upvote id="upvote1" count={7} />
      </section>
      <section>
        <h1>Forslag 2</h1>
        <p>Lokal park med lite vann</p>
        <img src={pond} width={800} alt="Pond" />
        <Upvote id="upvote2" count={23} />
      </section>
    </>
  )
}

export default OurSuggestionsPage
