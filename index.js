const body = document.body;
const mainContent = document.querySelector(".question");
const mainCounter = document.querySelector(".counter");
const btnFalse = document.querySelector(".btn-false");
const btnTrue = document.querySelector(".btn-true");
const btnReload = document.querySelector(".btn-reload");
const resBanner = document.querySelector(".results-banner");
const btnContinue = document.querySelector(".btn-continiue");
const resMessageTrue = document.querySelector(".res__true");
const resMessageFalse = document.querySelector(".res__false");
const mainRes = document.querySelector('.main_res');
const mainReloader = document.querySelector('.main-reloader');

let base = [
  /* "What is unit test?",
   "What is API testing?",
   "What is Perfomance testing?",
   "Discribe the QA Process?",
   "What is the Stress Testing?",
   "What is the test plan?",
   "What is the test matrix?",
   "How do you write a bug report?",
   "What is Quality?",
   "What is a Test Case?",
   "What is a functional specification?",
   "What is a product requirements document - (PRD)?",
   "What is the most important impact QA can have on the product development process?",
   "What is the use case?",
   "What is black/white/gray box testing?",
   "Describe a bug?",
   "What is the difference between Software Testing and Software QA?",
   "What is Software Quality?",
   "What is a business requirements document? (BRD)?",
   "What is Software Usability?",
   "Bug Report: components field, basic elements?",
   "What is software Quality Assurance?",
   "What is Software Testing?",
   "What is the most important part of the bug report?",
   "Besides Test Case and Test plan, What documents are required to write?",
   "Describe risk analysis?",
   "What is Negative testing, Positive?",
   "Which type of testing results in highest Number of bugs found?",
   "How Will you Write Test cases for Login and Password functionality?",
   "If The are so many settings/options to choose, how to write test cases?",
   "What is usability testing?",
   "What Does Test Plan include? List of positive Items.",
   "What is GUI(UI) testing?",
   "Define Boundary testing?",
   "What is the difference between Test Case and Test Plan?",
   "How can a tester be sure that bug was fixed?",
   "What is a bug life cycle?",
   "Write test cases for a text field?",
   "If you find a bug and the developer says it's as designed?",
   "What does the Test Case include?",
   "What is Regression Testing?",
   "Levels of testing?",
   "What is the software development life cycle (SDLC)?",
   "Is it possible to find/fix all the bugs in a Software product before it goes to the customer? Why test?",
   "Which document woud you refer to when creating Test Cases?",
   "What is an Acceptance Testing? UAT",   
   "What do you prefer: white or black box testing?",
   "How do you determine when you have done enough testing?",
   "Which tools are used to write Test Cases?",
   "What is walk-through meeting?",
   "What is Build? = release",
   "What is Test Strategy?",
   "What is ad-hoc testing",
   "What is the worst thing, which might happen...? (severity - critical)",
   "There  is no documentation. How would you test the app?",
   "Difference  between Version, Build, Release",
   "Typical  problems in software requirements are? ",
   "Where  requirements come from?",
   "Name  four levels of the seriousness of the problem? (severity)",
   "Name  3 levels of priority",
   "Who  can assign/change severity or priority in a bug report?",
   "Why  do we need Bug Tracking System?",
   "What  is the prime objective of a Bug Tracking Database",
   "On  who depends on quality of the computer software?",
   "Is  it any difference between web site and web application? Or just  different words to describe?",
   "Four  levels of testing:?",
   "What  is the difference between Cache and Cookies?",
   "Types  of applications",
   "World  Wide Web?",
   "What ia ad-hoc testing?",*/
   "What is the most frequently executed type of testing?",
   "What makes Software testing profession attractive to you? Why QA?",
   "Why software testers are needed if developers test their code anyway?",
   "What is Equivalence Class?",
   "What is API?",
   "What is URL?",
   "What is HTTP, HTTPs",
   "What is status code? Which do you know?",
   "What is JSON, XML?",
   "What is REST?",
]


let wrongAnsw = [];   
let trueAnsw = [];

// if (localStorage.trueAnswArr !== undefined) {
//    trueAnsw = localStorage.trueAnswArr.split(" /// ");
   

//    for(let i = 0; i < trueAnsw.length; i++) {
//      base = base.filter((n) => {return n != trueAnsw[i]});
//    }
// }

// if (localStorage.wrongAnswArr !== undefined) {
//    wrongAnsw = localStorage.wrongAnswArr.split(" /// ");    
   

//    for(let i = 0; i < wrongAnsw.length; i++) {
//       base = base.filter((n) => {return n != wrongAnsw[i]});
//    }
// }

const setLocStorage = () => {
   localStorage.setItem('copyBaseState' , copyBase.join(" /// "));  
}


btnContinue.disabled = false;

let copyBase = Object.assign([], base);

const showInitial = () => {
   mainContent.textContent = copyBase[Math.floor(Math.random() * copyBase.length)];
   mainCounter.textContent = copyBase.length;
   resMessageTrue.textContent = trueAnsw.length;
   resMessageFalse.textContent = wrongAnsw.length;
}

showInitial();

const showNextValue = (test) => {

   copyBase.splice(copyBase.indexOf(mainContent.textContent), 1);

   setLocStorage();

   if(test === true) {
      trueAnsw.push(mainContent.textContent);
      localStorage.setItem('trueAnswArr' , trueAnsw.join(" /// ")); 
      resMessageTrue.textContent = trueAnsw.length;     
   }

   if(test === false) {
      wrongAnsw.push(mainContent.textContent);
      localStorage.setItem('wrongAnswArr' , wrongAnsw.join(" /// "));  
      
      resMessageFalse.textContent = wrongAnsw.length;
   }

   let randArr = Math.floor(Math.random() * copyBase.length);
   
   mainContent.textContent = copyBase[randArr];  
   mainCounter.textContent = copyBase.length;

   if(copyBase.length === 0) { 
      mainRes.textContent = Math.floor((trueAnsw.length  * 100) / (trueAnsw.length + wrongAnsw.length)); 
         
      base = Object.assign([], wrongAnsw);
      setLocStorage();
      copyBase = Object.assign([], base);
      wrongAnsw = [];
      trueAnsw = [];
      resBanner.classList.remove('hidden');

      if(!base.length) {        
         btnContinue.classList.add('hidden')
      } 
   }
}

const continueLearn = () => {
   resBanner.classList.add('hidden');
}

btnTrue.addEventListener("click", function() {showNextValue(true)});
btnFalse.addEventListener("click", () => showNextValue(false));
btnReload.addEventListener('click', function() {location.reload(); localStorage.clear();});
btnContinue.addEventListener('click', function() {continueLearn(); showInitial()})
mainReloader.addEventListener('click', function() {location.reload(); localStorage.clear();});