function CreateTweet({textInput, setTextInput, tweets, setTweets}) {
  // the states here are lifted to the App
  // functions
  const userInputHandler = (e) => {
    setTextInput(e.target.value);
  };
  function submitTweetHandler(e) {
    e.preventDefault();
    setTweets([...tweets, textInput]);
    setTextInput("");

  }
  return (
    <form onSubmit={submitTweetHandler}>
      <textarea value={textInput} onChange={userInputHandler} name="" id="" cols="50" rows="5"></textarea>
      <button>Submit</button>
      <p> <strong> Tweet output: {textInput} </strong></p>
    </form>
  )
}

export default CreateTweet;