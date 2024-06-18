
import './App.css'
import Joke from './jokes.jsx'

export default function App () {
  return (
    <div>
      <h1>Dana's Jokes</h1>

      <Joke 
      setup="What is my preferred type of sushi?"
      punchline="Payroll."
      />

      <Joke
      setup="What’s the most detail-oriented ocean?"
      punchline="The Pacific."
      />
          
      <Joke
      setup="What kind of bird is always getting hurt?"
      punchline="The owl."
      />

      <Joke
      setup="Why is cold water so insecure?"
      punchline="Because it’s never called hot."
      />

      <Joke
      setup="What do you call a can opener that doesn't work?"
      punchline="A can't opener."
      />

      <Joke
      setup="What do you call two monkeys that share an Amazon account?"
      punchline="Prime mates."
      />


    </div>
  )
}

