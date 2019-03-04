"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 3

   Author: Patrick M. Capuano
   Date:   3.2.19
   
   Filename: ah_report.js
   
   Functions:
   
   calcSum(donorAmt)
      A callback function that adds the current donation amount in the array to the donationTotal variable
   
   findMajorDonors(donorAmt)
      A callback function that returns the value true only if the current donation amount in the array
      is greater than or equal to 1000
      
   donorSortDescending(a, b)
      A callback function used to sort the donation amounts from the array in descending order
      
   writeDonorRow(value)
      A callback function that writes the HTML code for each table row that provides the contact
      information for the donor
      
*/


function calcSum(donorAmt) {
      donationTotal += donorAmt[9];
}

function findMajorDonors(donorAmt) {
      return donorAmt[9] >= 1000;
}

function donorSortDescending(a, b) {
      return b[9] - a[9];
}

function writeDonorRow(value) {
      donorTable += "<tr>";
      donorTable += "<td>$" + value[9].toLocaleString() + "</td>";
      donorTable += "<td>" + value[0] + "</td>";
      donorTable += "<td>" + value[10] + "</td>";
      donorTable += "<td>" + value[2] + ", " + value[1] + "</td>";
      donorTable += "<td>" + value[3] + "<br />" + value[4] + ", " + value[5] + " " + value[6] + "</td>";
      donorTable += "<td>" + value[7] + "</td>";
      donorTable += "<td>" + value[8] + "</td>";
      donorTable += "</tr>";
}

// Setting a varible of "donationTotal" to a initial value of zero, right after declaring it.
var donationTotal = 0;

// Applying the for each method to the "donors" array, using the calcSum() callback function to calculate the donation total.
donors.forEach(calcSum);

// The variable "summaryTable" is set to the following string, with each part split out into seperate adding commands, with variables put in place such as "donors" with full list length. "donationTotal" is applied with the method of "toLocaleString" so that the total amount of donations is displayed with a thousands separator.
var summaryTable = "<table>"
summaryTable += "<tr><th>Donors</th><td>" + donors.length + "</td></tr>"
summaryTable += "<tr><th>Total Donations</th><td>$" + donationTotal.toLocaleString() + "</td></tr>"
summaryTable += "</table>";

// By searching through the document and targetting any tags with the "donationSummary" ID, this will insert the value of the "summaryTable" variable within the div that contains said ID. 
document.getElementById("donationSummary").innerHTML = summaryTable;

// Creating an array named "majorDonors", and then setting it with the "donors" array with the "filter" method and a callback function of "findMajorDonors" to show a list of donors that contributed $1,000 or more. 
var majorDonors = donors.filter(findMajorDonors);

// "majorDonors" as a list is then sorted in alphebetical order with said "sort" method and the callback function of "donorSortDescending".
majorDonors.sort(donorSortDescending);

// The variable "donorTable" is then set to the string of the code provided below, with no variables needed at all.
var donorTable = "<table> <caption>Major Donors</caption> <tr> <th>Donation</th><th>Donor ID</th> <th>Date</th><th>Name</th><th>Address</th> <th>Phone</th><th>E-mail</th></tr>"

// The "majorDonors" is then used for a method of "forEach" and the callback function of "writeDonorRow" to create a HTML code for each donor row. 
majorDonors.forEach(writeDonorRow);

// The simple text string of "</table>" is then added to the end of the variable of "donorTable".
donorTable += "</table>"

// By searching the document by the element ID of "donorTable", the varaible of the same name's value is then placed in that div section tag as HTML code to be displayed.
document.getElementById("donorTable").innerHTML = donorTable