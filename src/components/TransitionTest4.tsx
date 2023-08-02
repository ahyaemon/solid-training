import {createEffect, createSignal, For} from "solid-js";
import styles from "../App.module.css";
import {TransitionGroup} from "solid-transition-group";
import anime from "animejs";


type ItemProps = {
  i: number
  isDelete: boolean
  onDelete: (ref: any) => void
}

function Item(props: ItemProps) {

  let ref: any

  createEffect(() => {
    console.log(props.isDelete)
    if (props.isDelete) {
      props.onDelete(ref)
    }
  })

  return (
      <div ref={ref}>{props.i}</div>
  )
}

export default function TransitionTest4() {
  const [items, setItems] = createSignal([1, 2, 3])
  const [isDeletes, setDeletes] = createSignal([false, false, false])

  const handleClick = () => {
    setDeletes([true, false, false])
  }

  const onDelete = (ref: any) => {
    console.log(ref)
    anime({
      targets: ref,
      translateX: 250,
      rotate: '1turn',
      backgroundColor: '#FFF',
      duration: 800
    })
  }

  createEffect(() => {
    console.log(isDeletes())
  })

  return (
      <div class={styles.app}>
        <div>
            <For each={items()}>{(item, i) =>
                <Item i={item} onDelete={onDelete} isDelete={isDeletes()[i()]}/>
            }</For>
        </div>
        <div>
          <button type="button" onClick={handleClick}>BUTTON</button>
        </div>
      </div>
  )
}
