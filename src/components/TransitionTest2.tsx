import {createMemo, createSignal} from "solid-js";
import styles from "../App.module.css";

export default function TransitionTest2() {
  const [isClicked, setClicked] = createSignal(false)

  const handleClick = () => {
    setClicked(!isClicked())
  }

  const classes = createMemo(() => {
    return isClicked() ? "moji clicked" : "moji"
  })

  return (
      <div class={styles.app}>
        <div class={classes()}>
          AAAAAAAA!!!!!!!
        </div>
        <div>
          <button type="button" onClick={handleClick}>BUTTON</button>
        </div>
      </div>
  )
}