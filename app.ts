import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import chalk from "chalk";

// Define a class called Content
class Content {
  you: string;
  response: string;

  constructor(you: string, response: string) {
    this.you = you;
    this.response = response;
  }
}

// Define an array of Content objects
let intent: Content[] = [
    // objects
  { you: "hi", response: "How can I help you?" },
  { you: "hello", response: "How can I help you?" },
  { you: "hey", response: "How can I help you?" },
  {
    you: "What is your name?",
    response:
      "My name is ChatBot, created by CH Muhammad Tayyab Gill.",
  },
  { you: "I love you", response: "I love you too! ❤️" },

  {
    you: "love",
    response:
      "Love is a good thing, but nowadays people often prioritize physical attraction and financial stability. ❤️",
  },
  {
    you: "Who created you?",
    response:
      "I was created by CH Muhammad Tayyab Gill with the help of TypeScript programming language.",
  },
  {
    you: "What can you do?",
    response:
      "I can answer your questions, provide information, and have a conversation with you.",
  },
  {
    you: "How are you doing?",
    response: "I'm doing well, thank you for asking!",
  },
  {
    you: "What is your purpose?",
    response:
      "My purpose is to assist users like you with their queries and provide a helpful conversation.",
  },
  {
    you: "What is your favorite color?",
    response: "My favorite color is blue.",
  },
  {
    you: "Can you understand me?",
    response: "Yes, I can understand your messages and respond accordingly.",
  },
  {
    you: "Are you intelligent?",
    response:
      "I'm a smart chatbot, but I'm still learning and improving my abilities.",
  },
  { you: "bad", response: "I'm sorry to hear that. Can I ask why? 👎" },
  { you: "good", response: "That's great to hear! 👍" },
  {
    you: "Can you tell me a joke?",
    response: "Why did the computer go to the doctor? It had a virus!",
  },
  {
    you: "Thanks for helping me",
    response: "You're welcome! It was my pleasure to assist you.",
  },
  { you: "I hate you", response: "I'm sorry to hear that. Can I ask why?" },
  {
    you: "I'm feeling sad",
    response: "I'm sorry to hear that.Can I offer you some advice or support? 😔",
  },
  {
    you: "I'm feeling happy",
    response:
      "That's great to hear! Do you have anything specific you'd like to talk about? 😊",
  },
  {
    you: "CH Muhammad Tayyab Gill",
    response:
      "He is a skilled developer who created a personal chatbot with the help of TypeScript programming language. He has a strong passion for AI and machine learning, and is always looking to improve his skills and create innovative projects.",
  }
    
];
// Define an asynchronous function mainMenu
async function mainMenu() {
  // Run an infinite loop
  while (true) {
    // Prompt the user for input using inquirer
    const answer = await inquirer.prompt({
      message: "You: ",
      name: "message",
      type: "input",
    });
    // Call the getIntent function to find a matching response
    const result = getIntent(answer.message);
    if (result) {
      // the bot's response
      const animation = chalkAnimation.rainbow(`Bot: ${result.response}`);
      //animation.start();
      await new Promise((resolve) => setTimeout(resolve, 2000)); // 2 mileston second
      animation.stop();
    } else {
      console.log(chalk.red(`Bot: I didn't understand. Please try again.`));
    }
  }
}
// Define a function getIntent to find a matching response
function getIntent(message: string): Content | undefined {
  // Use the find method to search the intent array
  return intent.find((result1) => message.toLowerCase().includes(result1.you.toLowerCase()));
}

mainMenu();
