// let i = document.querySelector('#text');
// let spanContent = document.querySelector("span");
// let arr = ['design', 'frontend', 'backend'];
// let arrVide = [];

// arr[0].split('');
// console.log(arr);
// arrVide.push(arr);
// console.log(arrVide);

let sentences = ["design", "frontend", "backend", "testing"];
let currentSentence = 0;
let currentSentenceChar = 0;
let intervalValue;
let textElement = document.querySelector("span");
let myCursor = document.querySelector(".cursor");

function TypingEffect()
{
  let text = sentences[currentSentence].substring(0, currentSentenceChar +1);
  textElement.innerHTML = text;
  currentSentenceChar++;
  
  if(text === sentences[currentSentence])
  {
    clearInterval(intervalValue);
    setTimeout(function()
    {
      intervalValue = setInterval(DeletingEffect, 60);
    }, 800);
  }
}

function DeletingEffect()
{
  let text = sentences[currentSentence].substring(0, currentSentenceChar -1);
  textElement.innerHNTML = text;
  currentSentenceChar--;
  
  if(text === '')
  {
    clearInterval(intervalValue);
    if(currentSentence === (sentences.length-1))
       currentSentence = 0;
    else
      currentSentence++;
    
    currentSentenceChar = 0;
    
    setTimeout(function()
    {
      myCursor.style.display = 'inline-block';
      intervalValue = setInterval(TypingEffect,50);
    }, 100);
    
  }
}

intervalValue = setInterval(TypingEffect, 180);