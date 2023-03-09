 
import { Fragment } from 'react';
import Joke from '../joke';

interface ChuckJokeProps {
    jokes: Array<Joke>
}

const ChuckJoke: React.FC<ChuckJokeProps> = ({jokes}) => {

    /* As you can write any JavaScript code you want in the body of a component,
    as long as it returns a JSX.Element, this component combines requirement 3(/4)
    and the extension. Fragment is used in the array elements and filtered joke
    to make it easer to combine the various elements in the return value. */
    
    const jokeBlocks:Array<JSX.Element> = jokes.map((joke) => {
        return(
            <Fragment key={joke.id}>
            <h3>{`Joke Number: ${joke.id}`}</h3>
            <p>{joke.joke}</p>
            </Fragment>
        );
    })

    const filteredJokes: Array<Joke> = jokes.filter((joke) => joke.id === 3);

    const filteredBlock: JSX.Element = <Fragment>
            <h3>Filtered Jokes: </h3>
            <p>{filteredJokes[0].joke}</p>
        </Fragment>

    return (
        <div>{jokeBlocks}
        {filteredBlock}
        </div>
    )
}

export default ChuckJoke;
