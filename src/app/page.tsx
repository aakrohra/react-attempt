function Header({text}: {text: string}) {
  return <h1>{text}</h1>
}

export default function Main() {
  return (
    <section>
      <Header text="hello"/>
    </section>
  )
}