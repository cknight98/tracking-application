
var employeeNameInputEl = $('#employee-name-input');
var employeeNotesInputEl = $('#employee-notes-input');
var trainingNameInputEl = $('#training-name-input');
var trainingDateInputEl = $('#training-date-input');

// displays current time and date in header
// const day = document.createElement("h1");
// day.textContent = new Date(utcTime).toLocaleDateString("en-US",{day:"numeric", month: "short", year:"numeric"});




// printing employee data to the page
function printEmployeeData(name, notes, trainingTaken, trainingDate) {

}


// project form submission 
( function() {
    ( "trainingDate" ).datepicker();
  } );

function handleProjectFormSubmit(event) {
    event.preventDefault();
    const 
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
/* CALENDER API  */

document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
      },
      initialDate: '2022-02-01',
      editable: true,
      navLinks: true, // can click day/week names to navigate views
      dayMaxEvents: true, // allow "more" link when too many events
      events: {
        url: 'php/get-events.php',
        failure: function() {
          document.getElementById('script-warning').style.display = 'block'
        }
      },
      loading: function(bool) {
        document.getElementById('loading').style.display =
          bool ? 'block' : 'none';
      }
    });

    calendar.render();
  });
