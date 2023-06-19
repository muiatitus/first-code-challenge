#  Student Grade Generator

This is a simple grade calculator web application that prompts the user to input student marks and displays the corresponding grade based on the input.

## How to Use

1. Clone the repository to your local machine or download the source code as a ZIP file.

2. Open the `Challenge_one.html` file in a web browser.

3. You will see a form with an input field to enter the student marks and a "Calculate" button.

4. Enter the student marks in the input field. The input should be a number between 0 and 100.

5. Click the "Calculate" button.

6. The calculated grade will be displayed below the button.

## Grade Calculation Logic

The grade calculation logic is as follows:

- A grade of A is assigned if the marks are greater than or equal to 80.
- A grade of B is assigned if the marks are between 60 and 79 (both inclusive).
- A grade of C is assigned if the marks are between 50 and 59 (both inclusive).
- A grade of D is assigned if the marks are between 40 and 49 (both inclusive).
- A grade of E is assigned if the marks are less than 40.

If the input marks are not within the valid range (0 to 100), an error message will be displayed.

## File Structure

- `index.html`: Contains the HTML structure and user interface elements for the grade calculator.
- `index.js`: Contains the JavaScript code responsible for the grade calculation and updating the user interface.

## License

This project is licensed under the [MIT License](LICENSE).