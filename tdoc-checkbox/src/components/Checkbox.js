import {useState} from 'react'
export default function Checkbox() {
  const [fieldOne, setFieldOne] = useState(false)
  const [fieldTwo, setFieldTwo] = useState(false)
  const [fieldThree, setFieldThree] = useState(false)
  const [fieldFour, setFieldFour] = useState(false)
  return (
    <div className="main">
        <div className="container">
          <header>
            <div className="col-5">
                <h5 tabindex="0"> Please select if you or your family member have a history of any of the below conditions:</h5>
            </div>
          </header>
          <form>
            <div className="row">
              <div className="col col-4">
                <label for="melanoma">Melanoma
                {fieldOne ? <p id="melanoma-help" className="you-checkbox">You</p>: null}
                </label>
              </div>
              <div className="col col-1">
                <input id="melanoma" aria-describedby="melanoma-help" type="checkbox" onChange={e => setFieldOne(e.target.checked)} />
              </div>
            </div>
            <div className="row">
              <div className="col col-4">
                <label for="other-skin"> Other Skin Cancers (Basal Cell, Squamous Cell)</label>
                {fieldTwo ? <p id="other-help" className="you-checkbox">You</p>: null}
              </div>
              <div className="col col-1">
                <input id="other-skin" aria-describedby="other-help" type="checkbox" onChange={e => setFieldTwo(e.target.checked)} />
              </div>
            </div>
            <div className="row">
              <div className="col col-4">
                <label for="eczema">Eczema</label>
                {fieldThree ? <p id="eczema-help" className="you-checkbox">You</p>: null}
              </div>
              <div className="col col-1">
                <input id="eczema" aria-describedby="eczema-help" type="checkbox" onChange={e => setFieldThree(e.target.checked)}/>
              </div>
            </div>
            <div className="row">
              <div className="col col-4">
              <label for="psoriasis"> Psoriasis</label>
              {fieldFour ? <p id="psoriasis-help" className="you-checkbox">You</p>: null}
              </div>
              <div className="col col-1">
              <input id="psoriasis" aria-describedby="psoriasis-help" type="checkbox" onChange={e => setFieldFour(e.target.checked)} />
              </div>
            </div>
          </form>
        </div>
    </div>
  )
}
