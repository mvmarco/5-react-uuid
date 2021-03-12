//####################################
// UUID
//####################################

/*
  UUID is literally a package you can add in React to generate you a random
  ID. In fact, in the previous notes we were deleting a tweet referencing only to the message 
  itself. The problem was that we were relaying on the message to delete the tweet.
  What if we had 4 equal messages. We delete all of them then. Because we delete things
  based on the text and not some sort of ID. In fact, UUID, is the solution.

  So we want to tell React what exactly we are deleting, example whether it is a tweet or
  youtube video. And we need something concrete there. Not a title or description but something
  concrete there. We need a "Universally Unique Identifiers". Usually APIs, have ID data
  integrated. But when you do not use APIs for instance, you gonna need them.

  */

import './App.css';
import TweetList from './components/TweetList.js'
import CreateTweet from './components/CreateTweet.js'
import { useState } from 'react';

function App() {
  //states
  const [name, setName] = useState("Marco");
  // lifted states from CreateTweet, you gotta pass them as props
  const [textInput, setTextInput] = useState("");
  const [tweets, setTweets] = useState([]);
  return (
    <div>
      <h1>Hello {name}</h1>
      <CreateTweet
        textInput={textInput}
        setTextInput={setTextInput}
        tweets={tweets}
        setTweets={setTweets}
      />
      <TweetList
        setName={setName}
        name={name}
        tweets={tweets}
        setTweets={setTweets}
      />
    </div>
  );
}

export default App;