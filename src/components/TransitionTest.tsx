import {createSignal} from "solid-js";
import styles from "../App.module.css";

export default function TransitionTest() {
  const [items, setItems] = createSignal([1, 2, 3])

  const handleClick = () => {
    setItems(items().map(item => item + 1))
  }

  return (
      <div class={styles.app}>
        <div>
          {items().map((item, i) => {
            const classList = [`item${item}`]
            if (i === 1) {
              classList.push("center")
            }

            return (
                <div class={classList.join(" ")}>{item}</div>
            )
          })}
        </div>
        <div>
          <button type="button" onClick={handleClick}>BUTTON</button>
        </div>
      </div>
  )
}