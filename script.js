// script.js
document.addEventListener("DOMContentLoaded", () => {
  const notices = [
      {
          title: "Task 1: lol Website",
          description: "Update the company website with the latest news and announcements.",
          link: "https://example.com/task1"
      },
      {
          title: "Task 2: Team Meeting",
          description: "Attend the team meeting to discuss the project progress and next steps.",
          link: "https://example.com/task2"
      },
      {
          title: "Task 3: Code Review",
          description: "Review the latest code commits and provide feedback.",
          link: "https://example.com/task3"
      }
  ];

  const noticesContainer = document.getElementById("notices");

  notices.forEach(notice => {
      const noticeElement = document.createElement("div");
      noticeElement.classList.add("notice");

      noticeElement.innerHTML = `
          <h2>${notice.title}</h2>
          <p>${notice.description}</p>
          <a href="${notice.link}" target="_blank">Read More</a>
      `;

      noticesContainer.appendChild(noticeElement);
  });
});
