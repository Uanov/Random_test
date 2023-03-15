
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

const base = [
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

const state = {
    itemList : [],
    wrongAnsw : [],   
    trueAnsw : [],
};

const pushState = () => {
    localStorage.setItem('stateItemList', state.itemList.join(" /// ")); 
    localStorage.setItem('stateTrueAnsw', state.trueAnsw.join(" /// ")); 
    localStorage.setItem('stateWrongAnsw', state.wrongAnsw.join(" /// "));
}

if(localStorage.stateItemList !== undefined) {
    state.itemList = localStorage.stateItemList.split(" /// ");
    state.wrongAnsw = localStorage.stateTrueAnsw.split(" /// ");
    state.trueAnsw = localStorage.stateWrongAnsw.split(" /// ");
} else {
    state.itemList = Object.assign([], base);
}



const showValues = () => {
    mainContent.textContent = state.itemList[Math.floor(Math.random() * state.itemList.length)];
    mainCounter.textContent = state.itemList.length;
    resMessageTrue.textContent = state.trueAnsw.length;
    resMessageFalse.textContent = state.wrongAnsw.length;
};

showValues();

const showNextItem = (userResult) => {
    state.itemList.splice(state.itemList.indexOf(mainContent.textContent), 1);

    if(userResult === true) {
        state.trueAnsw.push(mainContent.textContent);        
    }

    if(userResult === false) {
        state.wrongAnsw.push(mainContent.textContent);        
    }

    if (state.itemList.length === 0) {
        resBanner.classList.remove('hidden');
    }

    showValues();
    pushState();
}

const continueLearn = () => {
    resBanner.classList.add('hidden');
    state.itemList = Object.assign([], state.wrongAnsw);
    state.wrongAnsw = [];
    state.trueAnsw = [];
    pushState();  
}


btnTrue.addEventListener("click", () => showNextItem(true));
btnFalse.addEventListener("click", () => showNextItem(false));
// btnReload.addEventListener('click', function() {location.reload(); localStorage.clear();});
btnContinue.addEventListener('click', () => {continueLearn(), showValues()})
mainReloader.addEventListener('click', () => {location.reload(), localStorage.clear()});