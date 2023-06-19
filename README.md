# Challenge 1: Student Grade Generator (Toy Problem)

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

- `Challenge_one.html`: Contains the HTML structure and user interface elements for the grade calculator.
- `Challenge_one.js`: Contains the JavaScript code responsible for the grade calculation and updating the user interface.

# Challenge 2: Speed Detector (Toy Problem)

This is a simple speed checker web application that takes input of the speed of a car and determines the demerit points based on the speed.

## How to Use

1. Clone the repository to your local machine or download the source code as a ZIP file.

2. Open the `index.html` file in a web browser.

3. You will see a form with an input field to enter the speed of the car (in km/h) and a "Check" button.

4. Enter the speed of the car in the input field.

5. Click the "Check" button.

6. The demerit points or a status message will be displayed below the button.

## Demerit Points Calculation Logic

The demerit points calculation logic is as follows:

- If the speed is less than 70 km/h, it displays "OK".
- If the speed is 70 km/h or above, for every 5 km/h above the speed limit (70 km/h), it assigns one demerit point.
- If the driver accumulates more than 12 demerit points, the function displays "License suspended".

## File Structure

- `Speed-detector.js`: Contains the HTML structure and user interface elements for the speed checker.
- `Speed-detector.html`: Contains the JavaScript code responsible for the speed checking and displaying the demerit points or status.




## License

This project is licensed under the [MIT License](https://github.com/muiatitus/first-code-challenge/blob/main/LICENSE).