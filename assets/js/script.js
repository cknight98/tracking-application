var timeDisplayEl = $('#time-display');
var employeeNameInputEl = $('#employee-name-input');
var employeeNotesInputEl = $('#employee-notes-input');
var trainingNameInputEl = $('#training-name-input');
var trainingDateInputEl = $('#training-date-input');

// displays current time and date in header
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY hh:mm a');
    timeDisplayEl.text(rightNow);
}

setInterval(displayTime, 1000);

// printing employee data to the page
function printEmployeeData(name, notes, trainingTaken, trainingDate) {

}

// project form submission 
function handleProjectFormSubmit(event) {
    event.preventDefault();
  
    var employeeName = employeeNameInputEl.val().trim();
    var employeeNotes = employeeNotesInputEl.val().trim();
    var trainingName = trainingNameInputEl.val().trim();
    var trainingDate = trainingDateInputEl.val().trim();
  
    printEmployeeData(employeeName, employeeNotes, trainingName, trainingDate);
  
}


// opens modal
$('#new-trainee-button').on('click', function() {
    console.log("button works")
    $('#training-modal').show();
});

// closes modal
$('#close-button').on('click', function() {
    console.log("button works")
    $('#training-modal').hide();
});
