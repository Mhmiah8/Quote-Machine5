import React, { useState } from 'react';
import './QuoteMachine.scss'; // Import your SCSS styles

const quotes = [
  "The only way to do great work is to love what you do. – Steve Jobs",
  "Life is what happens when you're busy making other plans. – John Lennon",
  "Get busy living or get busy dying. – Stephen King",
  "You have within you right now, everything you need to deal with whatever the world can throw at you. – Brian Tracy",
  "Believe you can and you're halfway there. – Theodore Roosevelt",
  "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
  "The best way to predict the future is to create it. – Peter Drucker",
  "It does not matter how slowly you go as long as you do not stop. – Confucius",
  "Success is not how high you have climbed, but how you make a positive difference to the world. – Roy T. Bennett",
  "What lies behind us and what lies before us are tiny matters compared to what lies within us. – Ralph Waldo Emerson",
  "You only live once, but if you do it right, once is enough. – Mae West",
  "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. – Ralph Waldo Emerson",
  "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
  "The way to get started is to quit talking and begin doing. – Walt Disney",
  "Dream big and dare to fail. – Norman Vaughan",
  "Your time is limited, don't waste it living someone else's life. – Steve Jobs",
  "You miss 100% of the shots you don’t take. – Wayne Gretzky",
  "Life is either a daring adventure or nothing at all. – Helen Keller",
  "To succeed in life, you need three things: a wishbone, a backbone, and a funny bone. – Reba McEntire",
  "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
  "Act as if what you do makes a difference. It does. – William James",
  "You cannot find peace by avoiding life. – Virginia Woolf",
  "In the end, we will remember not the words of our enemies, but the silence of our friends. – Martin Luther King Jr.",
  "The best revenge is massive success. – Frank Sinatra",
  "Life is 10% what happens to us and 90% how we react to it. – Charles R. Swindoll",
  "It is never too late to be what you might have been. – George Eliot",
  "The mind is everything. What you think you become. – Buddha",
  "Happiness is not something ready-made. It comes from your own actions. – Dalai Lama",
  "Success is not in what you have, but who you are. – Bo Bennett",
  "The only limit to our realization of tomorrow will be our doubts of today. – Franklin D. Roosevelt",
  "Keep your face always toward the sunshine—and shadows will fall behind you. – Walt Whitman",
  "The best way to cheer yourself is to try to cheer someone else up. – Mark Twain",
  "You can never be overdressed or overeducated. – Oscar Wilde",
  "Opportunities don't happen, you create them. – Chris Grosser",
  "Do what you can, with what you have, where you are. – Theodore Roosevelt",
  "Success is how high you bounce when you hit bottom. – George S. Patton",
  "Everything you’ve ever wanted is on the other side of fear. – George Addair",
  "Dream it. Wish it. Do it. – Unknown",
  "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. – Albert Schweitzer",
  "What we think, we become. – Buddha",
  "The only place where success comes before work is in the dictionary. – Vidal Sassoon",
  "Life is really simple, but we insist on making it complicated. – Confucius",
  "The purpose of our lives is to be happy. – Dalai Lama",
  "Life is short, and it is up to you to make it sweet. – Sarah Louise Delany",
  "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
  "If you want to lift yourself up, lift up someone else. – Booker T. Washington",
  "The only impossible journey is the one you never begin. – Tony Robbins",
  "You don’t have to be great to start, but you have to start to be great. – Zig Ziglar",
  "If you can dream it, you can do it. – Walt Disney",
  "Success is not the absence of failure; it's the persistence through failure. – Aisha Tyler",
  "What we fear doing most is usually what we most need to do. – Tim Ferriss",
  "You are braver than you believe, stronger than you seem, and smarter than you think. – A.A. Milne",
  "It is during our darkest moments that we must focus to see the light. – Aristotle",
  "Nothing is impossible, the word itself says 'I'm possible'! – Audrey Hepburn",
  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. – Christian D. Larson",
  "To live is the rarest thing in the world. Most people exist, that is all. – Oscar Wilde",
  "Your limitation—it's only your imagination. – Unknown",
  "Push yourself, because no one else is going to do it for you. – Unknown",
  "Great things never come from comfort zones. – Unknown",
  "Dream it. Wish it. Do it. – Unknown",
  "Success doesn’t just find you. You have to go out and get it. – Unknown",
  "The harder you work for something, the greater you’ll feel when you achieve it. – Unknown",
  "Dream bigger. Do bigger. – Unknown",
  "Don’t stop when you’re tired. Stop when you’re done. – Unknown",
  "Wake up with determination. Go to bed with satisfaction. – Unknown",
  "Do something today that your future self will thank you for. – Unknown",
  "Little things make big days. – Unknown",
  "It’s going to be hard, but hard does not mean impossible. – Unknown",
  "Don’t wait for opportunity. Create it. – Unknown",
];

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

const QuoteMachine = () => {
  const [currentQuote, setCurrentQuote] = useState('');
  const [currentColorIndex, setCurrentColorIndex] = useState(0); // State for color index

  // Function to generate a random quote
  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);

    // Change color
    setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  return (
    <div id="quote-box" className="quote-box" style={{ backgroundColor: colors[currentColorIndex] }}>
      <h1 id="text">{currentQuote}</h1>
      <button id="new-quote" onClick={generateRandomQuote}>
        New Quote
      </button>
    </div>
  );
};

export default QuoteMachine;
