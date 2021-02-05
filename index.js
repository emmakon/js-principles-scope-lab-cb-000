var customerName = 'bob'; 

function upperCaseCustomerName() {
  customerName = "BOB";
  return customerName;
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer(bestCustomer) {
  bestCustomer = 'maybe bob';
  return bestCustomer;
}