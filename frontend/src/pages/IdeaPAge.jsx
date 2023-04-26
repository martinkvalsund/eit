function IdeaPage() {

  return (
    <>
      <section className='heading'>
        <h1>Kom med din idé</h1>
      </section>
      <p>Her kan du skrive hva ideen din er<br></br>
       Du kan også legge ved et illustrerende bilde eller en fil hvor du har implementert ideen selv</p><br></br>
      <form>
        <div className='form-group'>
          <textarea
            type='text'
            className='form-control'
            id='name'
            name='name'
            placeholder='Skriv inn din idé'
          />
        </div>
        <div className="form-group">
          <input type="file" id="file-input" name="ImageUpload" />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-block">Send inn</button>
        </div>
      </form>
    </>
  )
}

export default IdeaPage
