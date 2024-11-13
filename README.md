# Employee Management App

## Project Overview

The **Employee Management App** is a web application designed to manage employee data, including adding, updating, and viewing employee information. The application supports features such as employee CRUD (Create, Read, Update, Delete) operations, validation of employee details, and the handling of employee creation dates.

## Features

- **Add Employee**: Allows users to add new employees to the system with details like name, position, and date of creation.
- **Update Employee**: Allows users to update existing employee data, including name, position, and other details.
- **Delete Employee**: Allow users to delete an existing employee data, from database.
- **View Employees**: Displays a list of all employees with their details, including their position and date of creation.
- **Validation**: Includes input validation for fields such as the employee's creation date and updates to ensure proper data entry.
  
## Technologies Used

- **Frontend**: HTML, CSS, JavaScript , React
- **Backend**: [Node.js]
- **Database**: [MongoDB]
- **Version Control**: Git, GitHub for source code management

## Setup Instructions

To set up the **Employee Management App** locally, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/Adnan-hamid-wani/Employee-Management-Web-App.git
```
### 2. Install Dependencies:
Navigate to the project folder and install the necessary dependencies for both frontend and backend:

For Node.js / Express (if used in your project):
  npm install

For Python / Django (if used in your project):
  pip install -r requirements.txt

### 3. Run the Application:
To start the application, run the following commands:

For Frontend:
Navigate to the frontend folder and start the frontend app:
  npm start

For Backend:
Navigate to the backend folder and start the backend server:
If using Node.js:
  npm run dev


### 4. Access the App:
Once the application is running, open your browser and visit:
For Node.js: http://localhost:3000

## Known Issues:
- Employee Update Fails: When attempting to update an employee's information, the update operation fails with an error message "Failed to update." This issue needs investigation to ensure proper handling of employee updates.
- Creation Date Invalid: When adding a creation date for an employee, the date is marked as "Invalid," even though it's in the correct format. Validation and date handling need to be improved.

## Future Enhancements:
- Implement authentication and authorization for secure employee data management.
- Improve the UI/UX with modern design practices and frameworks like Bootstrap or Material UI.
- Add more detailed validation and error handling for employee data.
- Implement a search and filter functionality for viewing employee details.

## Contributing:
We welcome contributions to this project! If you'd like to contribute, please fork the repository, make your changes, and submit a pull request.

## Steps to Contribute:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive messages.
4. Push the changes to your fork.
5. Submit a pull request.

## License:
This project is licensed under the MIT License - see the LICENSE file for details.

## Author:
Adnan Hamid Wani<br>
GitHub:``` https://github.com/Adnan-hamid-wani```


## Acknowledgements:
Thanks to all the open-source libraries and resources used in this project.


