// Question 2
// Create a function that returns student data after a delay of 1000 ms.

// Handle both success and failure cases
// Display a success message when data is received
// Display an error message if something goes wrong

function getStudentData(success = true) {
    return Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve("Student data received successfully");
            } else {
                reject("Error: Failed to get student data");
            }
        }, 1000);
    });
}

