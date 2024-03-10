// Get all elements with the faq-item class
var faqItems = document.querySelectorAll('.faq-item');

// Loop through each faq-item element
faqItems.forEach(function (item) {
  // Add a click event listener to each faq-item
  item.addEventListener('click', function () {
    // Toggle the expanded class on click
    this.classList.toggle('expanded');
    // Find the expand button and answer elements within this faq-item
    const button = this.querySelector('.expand-btn');
    const answer = this.querySelector('.answer');
    // Change the button icon and toggle the answer display based on the expanded class
    if (this.classList.contains('expanded')) {
      button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"><path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/></svg>';
      answer.style.display = 'block';
    } else {
      button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"><path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"/></svg>';
      answer.style.display = 'none';
    }
  });
});
// Get all elements with the question class
var questions = document.querySelectorAll('.question');

// Loop through each question element
questions.forEach(function (question) {
  // Add a click event listener to each question
  question.addEventListener('click', function () {
    // Simulate a click event on the corresponding expand button
    var expandButton = this.parentElement.querySelector('.expand-btn');
    expandButton.click();
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const faqItems = document.querySelectorAll('.faq-item');

  // toggle answer vis
  function toggleAnswer(item) {
    const answer = item.querySelector('.answer');
    answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
  }

  // func handle keydwon events
  function handleKeydown(event) {
    const key = event.key;
    const activeElement = document.activeElement;

    if (activeElement.classList.contains('question')) {
      const item = activeElement.closest('.faq-item');
      if (key === 'Enter' || key === ' ') {
        toggleAnswer(item);
      }
    }
  }

  // Add event listeners for keydown events
  document.addEventListener('keydown', handleKeydown);

  // Add click event listeners to toggle answers when questions are clicked
  faqItems.forEach(function (item) {
    const question = item.querySelector('.question');
    question.addEventListener('click', function () {
      toggleAnswer(item);
    });
  });
});