/*
Author: John Asare
Date: 2025/02/25
*/

// Overview
/* For this project, you will build a message generator program. Every time a user runs a program, they should get a new, 
randomized output. You’re welcome to take the project in a couple of different forms, like an astrology generator, 
inspirational message, or nonsensical jokes. To make your program truly random, 
the message that it outputs should be made up of at least three different pieces of data. 
Take what you know of JavaScript syntax so far to build the program and customize it to your liking. */

// function that stores the random messages
const messages = {
    message1: ['Hello', 'Hi', 'Hey', 'Good Morning', 'Good Afternoon', 'Good Evening'],
    message2: ['John', 'Jane', 'Doe', 'Smith', 'Johnson', 'Williams'],
    message3: ['How are you?', 'How is your day?', 'How is the weather?', 'How is the family?', 'How is the job?']
}

// function to pick random message from the messaages array
