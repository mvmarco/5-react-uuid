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
  integrated. So when you use APIs, you don't need them.

  In order to use UUID:
  1. you gotta go here: https://www.npmjs.com/package/uuid and run in the terminal:
     npm install uuid
  2. import { v4 as uuidv4 } from 'uuid'; where you need it. In out case it would be in
     "CreateTweet.js"
  3. Since now, the tweets is an array with each tweet as mentioned here in "App.js":
     const [tweets, setTweets] = useState([]);
     What we need to do is to create an array of objects, so we go were we defined the 
     spreaded array ("CreateTweet.js") and insted of putting the array item, 
     we put each item inside of an object, as follow:
     setTweets([...tweets, {textInput}]);
     In a way that when we create a Tweet (check the console under components and clicking app)
     the state updates not anymore as an item of array but an as an object
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