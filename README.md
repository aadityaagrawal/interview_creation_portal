# Interview Scheduler App

This is a simple app that allows administrators to create and manage interviews with participants. The app includes a variety of features, including the ability to schedule interviews, view upcoming interviews, and edit existing interviews.

### Features

The Interview Scheduler App includes the following features:

1. Interview Creation Page: This page allows admins to create new interviews by selecting participants, start time, and end time. The backend includes error handling to ensure that:
    * All participants are available during the scheduled time (i.e., no other interviews are scheduled)
    * The number of participants is at least 2
2. Interview List Page: This page allows admins to view a list of all upcoming interviews.
3. Interview Edit Page: This page allows admins to edit existing interviews with the same validation checks as the creation page.

### Installation
To use the Interview Scheduler App, follow these steps:

1. Clone the repository.
2. Install the required dependencies using npm install.
3. Start the server using npm start.
4. Open the app in your browser at http://localhost:9000.

### Technologies
The Interview Scheduler App is built using the following technologies:

* Node.js
* Express
* MongoDB
* Bootstrap
