import './Card.css'
import catPhoto from '../assets/Cat.png'
import { useState } from 'react'
const Card = (props) => {
  let cardClasses = ''
  if (props.selected && !props.disabled) cardClasses = 'card_selected'
  else if (props.disabled) cardClasses = 'card_disabled'
  const [textOnTop, setTextOnTop] = useState(props.description.companyName)
  let changeText = (text) => {
    if (props.selected) {
      setTextOnTop(text)
    }
  }
  return (
    <div className="cardWrapper">
      <div
        className={`card ${cardClasses}`} //card_disabled
        onClick={(e) => {
          let listener = (event) => {
            props.toggleSelItem(props.id)
            event.target.removeEventListener('mouseleave', listener, false)
          }
          e.currentTarget.addEventListener('mouseleave', listener, false)
        }}
        onMouseEnter={() => changeText('Котэ не одобряет?')}
        onMouseLeave={() => changeText(props.description.companyName)}
      >
        <div className="card__top">
          <p className="card__p card__companyName">{textOnTop}</p>
          <div className="card__p card__productName">
            <p className="card__p card__productNameBig">
              {props.description.productNameBig}
            </p>
            <p className="card__p card__productNameSmall">
              {props.description.productNameSmall}
            </p>
          </div>
          <div className="card__description">
            <p className="card__p card__amount">
              <b>{props.description.amount.match(/\d/g)}</b>
              {props.description.amount.match(/\D/g)}
            </p>
            <p className="card__p card__gift">
              <b>{props.description.gift.match(/\d/g)}</b>
              {props.description.gift.match(/\D/g)}
            </p>
            <p className="card__p card__feedback">
              {props.description.feedback}
            </p>
          </div>
        </div>
        <div className="card__cat">
          <img src={catPhoto} alt="Cat" />
        </div>
        <div className="card__circleWrapper">
          <div className="card__circle">
            <p className="card__p card__weight">{props.description.weight}</p>
            <p className="card__p card__kg">кг</p>
          </div>
        </div>
      </div>
      {props.selected && (
        <p className="card_p card__link">{props.description.dopText}</p>
      )}
      {props.disabled && (
        <p className="card_p card__link card__link-disabled">
          Печалька, {props.description.productNameSmall} закончился.
        </p>
      )}
      {!(props.disabled || props.selected) && (
        <p className="card_p card__link">
          Чего сидишь? Порадуй котэ,{' '}
          <span onClick={() => props.toggleSelItem(props.id)}>купи.</span>
        </p>
      )}
    </div>
  )
}
export default Card
