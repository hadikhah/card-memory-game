import Card from "./Card";
import { cardsData } from "../cards";
import { useState } from "react";

function Game() {
  const [data, setData] = useState(cardsData);
  const [num, setNum] = useState(0);
  const [flip, setFlip] = useState([]);
  const [lock, setLock] = useState(false);
  const flipHandler = (i) => {
    const f = [...flip]
    const hello = [...data]
    setLock(true)
    if (num % 2 === 0) {
      if (lock)
        return

      hello[i].isFlipped = !hello[i].isFlipped
      f.push(hello[i])
      setFlip(f)
      setData(hello)
      setLock(false)
    }
    if (num % 2 === 1) {
      if (lock)
        return

      hello[i].isFlipped = !hello[i].isFlipped
      f.push(hello[i])
      setFlip(f)
      setData(hello)

      if (f[0].name !== f[1].name) {
        const timing = setTimeout(() => {
          hello.forEach((e, i) => {
            hello[i].isFlipped = false
          })
          setLock(false)
          setFlip([])
          clearTimeout(timing)

        }, 1500);
      }
      else {
        setFlip([])
        setLock(false)

      }

    }

    setNum(prev => prev + 1)

  }
  return (
    <section className="memory-game">
      {
        data.map((card, i) => {
          return <Card key={i} card={card} onClick={() => flipHandler(i)} />
        })

      }


    </section>
  );
}

export default Game;
