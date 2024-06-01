import { useState } from 'react';
import './App.css'

function App() {
  const [randomQuote, setRandomQuote] = useState("Little things make big days. - Unknown")
  useState
  const randomQuotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
    "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
    "Your time is limited, so don’t waste it living someone else’s life. - Steve Jobs",
    "Don’t be afraid to give up the good to go for the great. - John D. Rockefeller",
    "I find that the harder I work, the more luck I seem to have. - Thomas Jefferson",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "The purpose of our lives is to be happy. - Dalai Lama",
    "Life is what happens when you’re busy making other plans. - John Lennon",
    "Get busy living or get busy dying. - Stephen King",
    "You have within you right now, everything you need to deal with whatever the world can throw at you. - Brian Tracy",
    "Believe you can and you’re halfway there. - Theodore Roosevelt",
    "The only impossible journey is the one you never begin. - Tony Robbins",
    "Success is not how high you have climbed, but how you make a positive difference to the world. - Roy T. Bennett",
    "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
    "In the end, we only regret the chances we didn’t take. - Lewis Carroll",
    "Do not wait to strike till the iron is hot; but make it hot by striking. - William Butler Yeats",
    "Whether you think you can or you think you can’t, you’re right. - Henry Ford",
    "The best way to predict the future is to create it. - Peter Drucker",
    "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
    "You miss 100% of the shots you don’t take. - Wayne Gretzky",
    "I have not failed. I've just found 10,000 ways that won't work. - Thomas Edison",
    "Don’t watch the clock; do what it does. Keep going. - Sam Levenson",
    "The harder you work for something, the greater you’ll feel when you achieve it. - Unknown",
    "Dream bigger. Do bigger. - Unknown",
    "Don’t stop when you’re tired. Stop when you’re done. - Unknown",
    "Wake up with determination. Go to bed with satisfaction. - Unknown",
    "Do something today that your future self will thank you for. - Unknown",
    "Little things make big days. - Unknown",
    "It’s going to be hard, but hard does not mean impossible. - Unknown",
    "Don’t wait for opportunity. Create it. - Unknown",
    "Sometimes we’re tested not to show our weaknesses, but to discover our strengths. - Unknown",
    "The key to success is to focus on goals, not obstacles. - Unknown",
    "Dream it. Wish it. Do it. - Unknown",
    "Success doesn’t just find you. You have to go out and get it. - Unknown",
    "The harder you work for something, the greater you’ll feel when you achieve it. - Unknown",
    "Dream bigger. Do bigger. - Unknown",
    "Don’t stop when you’re tired. Stop when you’re done. - Unknown",
    "Wake up with determination. Go to bed with satisfaction. - Unknown",
    "Do something today that your future self will thank you for. - Unknown",
    "Little things make big days. - Unknown",
    "It’s going to be hard, but hard does not mean impossible. - Unknown",
    "Don’t wait for opportunity. Create it. - Unknown",
    "Sometimes we’re tested not to show our weaknesses, but to discover our strengths. - Unknown",
    "The key to success is to focus on goals, not obstacles. - Unknown",
    "Dream it. Wish it. Do it. - Unknown",
    "Success doesn’t just find you. You have to go out and get it. - Unknown"
  ];
  
  const randomIndex = Math.floor(Math.random() * randomQuotes.length);
  function handleRandomQuotes() {
    setRandomQuote(randomQuotes[randomIndex]);
  }

  return (
    <div style={{backgroundColor:"black", color:"white", padding:"20px", borderRadius:"10px"}}>
    <h1>Random Quotes Generator</h1>
    <p style={{border:"2px solid white", padding:"10px", borderRadius:"10px"}}>{randomQuote}</p>
    <button onClick={handleRandomQuotes}>Genarate Quotes</button>
    </div>
  )
}

export default App
