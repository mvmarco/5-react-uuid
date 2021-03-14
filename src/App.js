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
     "CreateTweet.js". Just to mention the "as" it is a renaming v4 as whatever we want.
  3. Since now, the tweets is an array with each tweet as mentioned here in "App.js":
     const [tweets, setTweets] = useState([]);
     What we need to do is to create an array of objects, so we go were we defined the 
     spreaded array ("CreateTweet.js") and insted of putting the array item, 
     we put each item inside of an object, as follow:
     setTweets([...tweets, {textInput}]);
     In a way that when we create a Tweet (check the console under components and clicking app)
     the state updates not anymore as an item of array but an as an object
  4. other than {message: textInput} we pass the uuid function as follow:
     {message: textInput, id: uuidv4()}
  5. Important, in "TweetList.js" under <Tweet tweet={tweet} /> this refers to each object
     so in "Tweet.js" we need to first first do find the actual message:
     <h3>Message: {tweet.message} </h3>
  5. in Tweets.js we have to fix the delete function too, in a way that we filter the tweets
     array of objects taking each item (object) and get the id from it, like:
     const deleteTweet = () => {
      setTweets(tweets.filter((item) => item.id !== tweet.id));
     }
  6. To avoid to delete just the "id" of the message. We have to associate the ID to the "tweet"
     item itself in TweetList.js as follow: 
     <Tweet 
      setTweets={setTweets} 
      tweets={tweets} 
      name={name} 
      status='Active' 
      tweet={tweet} 
      key={tweet.id} ******************'
     />
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