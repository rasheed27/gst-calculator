# Name
Simple GST Calculator.

# Description
Simple GST Calculator for adding/removing tax from given amount.

# Installation
```sh 
npm i gst-calculator
```
# Usage
```sh
Example:
Call the function as below to add tax 18% to 1000INR
calculateTax(1000,18,"add");
The above will return as below
{ 
	base_amount: 1000,
 	with_tax: 1180,
  	without_tax: 1000,
  	tax_per: 18,
  	tax_amount: 180,
  	type: 'add'
}

Call the function as below to remove 18% from 1000INR
calculateTax(1000,18,"remove");
{ 
	base_amount: 1000,
  	with_tax: 1000,
  	without_tax: 847.457627118644,
  	tax_per: 18,
  	tax_amount: 152.54237288135596,
  	type: 'remove' 
}
```

# Authors and acknowledgment
https://www.npmjs.com/~rasheed027
