const tweets = [
    { user: "maksszaszkow", text: "I will have today a big day full of #webstack, #teaching and #coding", likes: 1429, retweet: 85, hashtags : ["webstack", "teaching", "coding"] },
    { user: "lev.dream", text: "Doing some tasks for #westack. Feels #exciting!", likes: 315, retweet: 19, hashtags : ["webstack", "exciting"] },
    { user: "realJakubNajman", text: "Having a day full of #work and #coding", likes: 329, retweet: 22, hashtags : ["work", "coding"] },
    { user: "vibing", text: "#vibing all day and night long! Friendly #reminder: you should visit my #spotify and #youtube to be ;)", likes: 2621, retweet: 152, hashtags : ["vibing", "reminder", "spotify", "youtube"] },
    { user: "maizyy", text: "Just created a new #awesome #webhook for guys from #webstack!", likes: 415, retweet: 39, hashtags : ["awesome", "webhook", "webstack"] }
];




var users = tweets.filter(function(user) {
    return user.hashtags.indexOf("webstack") > -1;
 });

for (let i in users) {
    console.log (users[i].user);
}