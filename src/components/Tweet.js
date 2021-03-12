  function Tweet({name, tweet, tweets, status, setTweets}) {
    const deleteTweet = () => {
      setTweets(tweets.filter((item) => item !== tweet));
    }
    return (
      <div className="tweet">
        <h2>Name: {name}</h2>
        <h3>Message: {tweet}, status: {status}</h3>
        <button onClick={deleteTweet}>Delete</button>
        <button>Like</button>
      </div>
    )
  }
  export default Tweet;




