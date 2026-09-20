Travel India
Project Overview

Travel India is a simple web application developed using HTML, CSS, and JavaScript. It provides information about popular Indian destinations along with a Home page and Contact Us page. The project demonstrates collaborative development using Git and GitHub.

Technologies Used
HTML5
CSS3
JavaScript
Git & GitHub
Visual Studio Code
Project Features
Home page
Popular destinations
Kerala and Goa destination cards
Contact Us page
Contact form
Basic JavaScript functionality
Responsive UI
Project Structure

travel-india-team-2/

├── index.html

├── style.css

├── script.js

├── contact.html

├── tajmahal.jpg

├── kerala.jpg

├── goa.jpeg

└── README.md

Team Roles

Student 1 – Team Lead / Developer

Repository management
Initial application
Integration and Pull Requests

Student 2 – UI Developer

HTML/CSS improvements
Home page UI
Contact Us page

Student 3 – JavaScript Developer

JavaScript functionality
Merge conflict resolution
Git Branching Strategy
main
├── feature/student-2
├── feature/contact
├── feature/student-3
├── feature/student-2-conflict
└── feature/student-3-conflict

Each student works on a separate feature branch and uses Pull Requests to merge changes into main.

Pull Requests
feature/student-2 → main – Home page UI
feature/student-3 → main – JavaScript functionality
feature/contact → main – Contact Us page
feature/student-2-conflict → main – Conflict exercise
feature/student-3-conflict → main – Conflict resolution
Merge Conflict

A conflict was intentionally created by Student 2 and Student 3 modifying the same heading in index.html differently.

The conflict was resolved by Student 3 using:

git merge main
git add index.html
git commit -m "Resolve merge conflict in Travel India title"
git push origin feature/student-3-conflict

The resolved Pull Request was then merged into main.

Learning Outcomes
Git configuration and repository management
Feature-based branching
Meaningful commits
Pull Requests and merging
Merge conflict creation and resolution
Collaborative development using GitHub
How to Run

Clone the repository:

git clone https://github.com/xavieramith-wq/travel-india-team-2.git

Open index.html in a web browser to run the application.
