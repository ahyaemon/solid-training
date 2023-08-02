import {createSignal, For} from "solid-js";
import styles from "../App.module.css";
import {TransitionGroup} from "solid-transition-group";

export default function TransitionTest3() {
  const [items, setItems] = createSignal([1, 2, 3])

  const handleClick = () => {
    setItems(items().map(item => item + 1))
  }

  return (
      <div class={styles.app}>
        <div>
          <ul>
            <TransitionGroup name="slide">
              <For each={items()}>{item => <li>{item}</li>}</For>
            </TransitionGroup>
          </ul>
        </div>
        <div>
          <button type="button" onClick={handleClick}>BUTTON</button>
        </div>
      </div>
  )
}