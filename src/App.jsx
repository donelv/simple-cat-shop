import { useState } from 'react'
import './App.css'
import Card from './Card/Card'

let items = [
  {
    description: {
      companyName: 'Сказочное заморское яство',
      productNameBig: 'Нямушка',
      productNameSmall: 'с фуа-гра',
      amount: '10 порций',
      gift: 'мышь в подарок',
      feedback: 'заказчик доволен',
      weight: '0,5',
      dopText: 'Печень утки разварная с артишоками.',
    },
    id: 'id-1',
  },
  {
    description: {
      companyName: 'Сказочное заморское яство',
      productNameBig: 'Нямушка',
      productNameSmall: 'с рыбой',
      amount: '40 порций',
      gift: '2 мыши в подарок',
      feedback: '',
      weight: '2',
      dopText: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
    },
    id: 'id-2',
  },
  {
    description: {
      companyName: 'Сказочное заморское яство',
      productNameBig: 'Нямушка',
      productNameSmall: 'с курой',
      amount: '100 порций',
      gift: '5 мышей в подарок',
      feedback: 'заказчик доволен',
      weight: '5',
      dopText: 'Филе из цыплят с трюфелями в бульоне.',
    },
    id: 'id-3',
  },
]

function App() {
  const [selList, setSelList] = useState([])
  const toggleSelItem = (id) => {
    if (selList.includes(id)) {
      setSelList(selList.filter((it) => it !== id))
    } else {
      setSelList([...selList, id])
    }
  }
  return (
    <div className="main">
      <h1 className="header">Ты сегодня покормил кота?</h1>
      <div className="cardswrapper">
        {items.map((i, index) => {
          return (
            <Card
              key={`card_${index}`}
              description={i.description}
              selected={selList.includes(i.id)}
              toggleSelItem={toggleSelItem}
              id={i.id}
              disabled={index === 2}
            />
          )
        })}
      </div>
    </div>
  )
}

export default App
