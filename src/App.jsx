import { useButton } from "./Button/Button"

function App() {
  const Button = useButton()
  return (
    <>
      <main>
        <Button primary>Primary</Button>
        <br />
        <br />
        <Button secondary>Secondary</Button>
        <br />
        <br />
        <Button destructive>Destructive</Button>
        <br />
        <br />
        <Button outline>Outline</Button>
        <br />
        <br />
        <Button ghost>Ghost</Button>
      </main>
    </>
  )
}

export default App
