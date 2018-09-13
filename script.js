$(document).ready(function(){

  var $tweetContainer = $('#tweetContainer');
  var allTweets = streams.home;

  //function to show tweets
  function showTweet(arr) {
    for (var i = 0; i < arr.length; i++) {
      var tweet = arr[i];
      var $tweet = $(`<div id = 'tweetWrap'></div>`);

      //Get timeStamp
      var $timestamp = $('<div class="timestamp"></div>');
      $timestamp.text($.timeago(tweet.created_at));
      $tweet.html(`<span id = "user"> @  ${tweet.user} </span>: ${tweet.message} `);

      //append elements to page
      $tweet.prependTo($tweetContainer);
      $timestamp.prependTo($tweet);

    }
  }

  //when page loads, showTweet will be called
  showTweet(allTweets)

  //refres all tweets
  $('.btn').on('click',function(){
    $tweetContainer.html('')
    showTweet(allTweets)
  })

  //Get tweets of specific user
  $($tweetContainer).on('click', '#user', function(event){
    var userName = event.target.innerHTML.slice(2).trim();//get the author name
    var tweetsOfClickedName = streams.users[userName] //get the author tweets
    $tweetContainer.html('')
    showTweet(tweetsOfClickedName)
  })
});
