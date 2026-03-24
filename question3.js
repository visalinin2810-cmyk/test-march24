// Question 3
// Simulate an order process with the following steps:
// Order is placed after 1000 ms

// Payment is completed after 1500 ms
// Ensure that:

// The steps execute in the correct sequence
// The output appears in the correct order


function placeOrder() {
    setTimeout(() => {
      console.log("Order placed");
    }, 1000);

}

function Payment() {
    setTimeout(() => {
      console.log("Payment completed");
    }, 1500);
}

placeOrder()
Payment()


