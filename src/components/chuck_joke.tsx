 
import { JsxElement } from 'typescript';
import Joke from '../joke';

interface ChuckJokeProps {
    jokes: Array<Joke>
}

const ChuckJoke: React.FC<ChuckJokeProps> = ({jokes}) => {
/*    const jokeBlocks:string = jokes.reduce((oldJokes:string,joke:Joke) => {
        return oldJokes +=`<h3>Joke Number: ${joke.id}</h3><p>${joke.joke}</p>`
    }, "");
*/
    const jokeBlocks:Array<JSX.Element> = jokes.map((joke) => {
        return(
            <div>
            <h3>{`Joke Number: ${joke.id}`}</h3>
            <p>{joke.joke}</p>
            </div>
        )
    })

    return (
        <p>{jokeBlocks}</p>
    )
}

export default ChuckJoke;
