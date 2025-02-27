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

// Array of different messages
const subjects = ["You", "Your friend", "A stranger", "Your colleague", "Your neighbor"]
const verbs = ["will achieve", "can accomplish", "will conquer", "will master", "will discover"]
const objects = ["great things", "your dreams", "new heights", "success", "happiness"]

// A function to get random number using the lenght of an array
function generateRandomIndex(array) {
    return Math.floor(Math.random() * array.length) + 1
} 

function generateRandomMessage() {
    const subject = subjects[generateRandomIndex(subjects)]
    const verb = verbs[generateRandomIndex(verbs)]
    const object = objects[generateRandomIndex(objects)]

    return `${subject} ${verb} ${object}`
}

console.log(generateRandomMessage())

