//Car Loan Calculator

function autoLoanCalculator() {
  var amount = document.getElementById("amount").value;
  while (amount == !isNaN) {
  amount = prompt("Please enter the price of vehicle. Press Enter ");
  document.getElementById("amount").value = amount; 
    if (amount === isNaN) {
    document.getElementById("amount").value = amount;  
    }   
  }
  
  var tax = document.getElementById("tax").value;
  while (tax == !isNaN) {
  tax = prompt("Please enter the tax rate");
  document.getElementById("tax").value = tax;  
    if (tax === isNaN) {
    document.getElementById("tax").value = tax; 
    }
  }

  var interest = document.getElementById("interest").value;
  while (interest == !isNaN) {
  interest = prompt("Please enter a interest");
  document.getElementById("interest").value = interest;    
    if (interest === isNaN) {
      document.getElementById("interest").value = interest;
    }
  }

  var term = document.getElementById("term").value;
  while (term == !isNaN) {
  term = prompt("Please enter a number");
  document.getElementById("term").value = term;     
    if (term === isNaN) {
      document.getElementById("term").value = term;
    }
  }  
 
  var taxRate = (amount * (tax / 100)) / term; 
  var interestRate = (amount * (interest / 100)) / term;
  var monthlyPayment = ((amount / term) + taxRate + interestRate).toFixed(2);
  document.getElementById("monthlyPayment").innerHTML = "Monthly Payment = $" + monthlyPayment; 
 }
 

 
 //end