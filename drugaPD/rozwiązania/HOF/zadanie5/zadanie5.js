const tweets = [
    { text: "I will have today a big day full of #webstack, #teaching and #coding", likes: 1429, retweet: 85, hashtags : ["webstack", "teaching", "coding"] },
    { text: "Doing some tasks for #westack. Feels #exciting!", likes: 315, retweet: 19, hashtags : ["webstack", "exciting"] },
    { text: "Having a day full of #work and #coding", likes: 329, retweet: 22, hashtags : ["work", "coding"] },
    { text: "#vibing all day and night long! Friendly #reminder: you should visit my #spotify and #youtube to be ;)", likes: 2621, retweet: 152, hashtags : ["vibing", "reminder", "spotify", "youtube"] },
    { text: "Just created a new #awesome #webhook for guys from #webstack!", likes: 415, retweet: 39, hashtags : ["awesome", "webhook", "webstack"] }
];

var initialValue = 0;

const likes = tweets.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue.likes;
}, initialValue);

console.log (likes);