var contactList = [];
var sortOrder = 1;

// Submit button click event
$("#submitBtn").click(function() {
  var firstName = $("#firstName").val();
  var lastName = $("#lastName").val();
  var contactNumber = $("#contactNumber").val();

  // Validate that all inputs are filled
  if (firstName && lastName && contactNumber) {
    // Check for duplicates
    var duplicate = contactList.find(function(contact) {
      return contact.firstName === firstName &&
        contact.lastName === lastName &&
        contact.contactNumber === contactNumber;
    });

    if (!duplicate) {
      var newContact = {
        firstName: firstName,
        lastName: lastName,
        contactNumber: contactNumber
      };

      contactList.push(newContact);
      addRowToTable(newContact);
      clearInputs();
    } else {
      alert("Duplicate entry not allowed!");
    }
  } else {
    alert("All inputs are mandatory!");
  }
});

// Clear input fields
function clearInputs() {
  $("#firstName").val("");
  $("#lastName").val("");
  $("#contactNumber").val("");
}

// Add new contact to table
function addRowToTable(newContact) {
  var tableBody = $("#tableBody");
  var index = tableBody.children().length + 1;

  var row = "<tr>";
  row += "<td>" + index + "</td>";
  row += "<td>" + newContact.firstName + " " + newContact.lastName + "</td>";
  row += "<td>" + newContact.contactNumber + "</td>";
  row += "<td><button class='deleteBtn' data-index='" + (index - 1) + "'>Delete</button></td>";
  row += "</tr>";

  tableBody.append(row);

  // Delete button click event
  $(".deleteBtn").click(function() {
  var index = $(this).data("index");
  var name = contactList[index].firstName + " " + contactList[index].lastName;

  if (confirm("Are you sure you want to delete " + name + "?")) {
      contactList.splice(index, 1);
      $(this).closest("tr").remove();
      updateTableIndex();
  }
  });
// }

function updateTableIndex(){
$("#tableBody tr td:first-child").each(function(index){
  $(this).text(index+1);
});
}

$("#sortName").click(function(){
contactList.sort(function(a, b) {
  var nameA = a.firstName.toUpperCase(); // ignore upper and lowercase
  var nameB = b.firstName.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -sortOrder;
  }
  if (nameA > nameB) {
    return sortOrder;
  }
  return 0;
});
sortOrder = -sortOrder;
updateTable();
});


$("#search").on("keyup", function() {
var value = $(this).val().toLowerCase();
$("#tableBody tr").filter(function() {
  $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
});
});


function updateTable(){
$("#tableBody").html("");
contactList.forEach(function(contact, index){
  addRowToTable(contact);
});
}

}