import { Injectable } from '@angular/core';

interface Quiz{
    question: string;
    answer: { option: string, correct: boolean } [];
}

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  quizzes: Quiz[] = [
    {
      question: 'Inside which HTML element do we put the JavaScript?',
      answer: [
        { option: '<javascript>', correct: false },
        { option: '<script>', correct: true },
        { option: '<js>', correct: false },
        { option: '<scripting>', correct: false },
        
      ]
    },
    {
      question: 'What is the correct JavaScript syntax to change the content of the HTML element below?'

      ,
      answer: [
        { option: 'document.getElement("p").innerHTML= "Hello World!"', correct: false },
        { option: '#demo.innerHTML="Hello World!"', correct: false },
        { option: 'document.getElementById("p").innerHTML= "Hello World!"', correct: true },
        { option: 'document.getElementByName("p").innerHTML= "Hello World!"', correct: false },
      ]
    },
    {
      question: 'Is JavaScript case-sensitive?',
      answer: [
        { option: 'Yes', correct: true },
        { option: 'No', correct: false },
        
      ]
    },
    {
      question: 'Which of the following is correct about Abstract Factory design pattern',
      answer: [
        { option: ' HTMLForms', correct: false },
        { option: 'Winforms', correct: false },
        { option: 'Webforms', correct: true },
       
      ]
    },
    {
      question: 'Which of the following object is not an ASP component?',
      answer: [
        { option: 'Counter', correct: false },
        { option: 'LinkCounter', correct: true },
        { option: 'AdRotator', correct: false },
        { option: 'File Access', correct: false }
      ]
    },
    {
      question: 'The first event triggers in an aspx page is.',
      answer: [
        { option: 'Page_Load()', correct: false },
        { option: 'Page_click()', correct: false },
        { option: 'Page_Init()', correct: true },
        
      ]
    },
    {
      question: 'What will the following code return: Boolean(10 > 9)',
      answer: [
        { option: 'True', correct: false },
        { option: 'False', correct: false },
        { option: 'NaN', correct: true },
       
      ]
    },
    {
      question: 'Difference between Response.Write() andResponse.Output.Write().',
      answer: [
        { option: 'Response.Output.Write() allows you to buffer output', correct: false },
        { option: 'Response.Output.Write() allows you to flush output', correct: false },
        { option: ' Response.Output.Write() allows you to write formatted output', correct: true },
      ]
    },
    {
      question: 'Which of the following tool is used to manage the GAC?',
      answer: [
        { option: ' RegSvr.exe', correct: false },
        { option: ' GacUtil.exe ', correct: true },
        { option: 'GacSvr32.exe', correct: false },
        { option: 'GacMgr.exe', correct: false }
      ]
    },
    {
      question: 'What class does the ASP.NET Web Form class inherit from by default?',
      answer: [
        { option: ' System.Web.UI.Page', correct: true },
        { option: 'System.Web.UI.Form', correct: false },
        { option: 'System.Web.GUI.Page', correct: false },
        { option: ' System.Web.Form', correct: false }
      ]
    }
  ]



  getQuizzes(){
    return this.quizzes;
  }
}
