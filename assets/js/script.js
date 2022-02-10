
var employeeNameInputEl = $('#employee-name-input');
var employeeNotesInputEl = $('#employee-notes-input');
var trainingNameInputEl = $('#training-name-input');
var trainingDateInputEl = $('#training-date-input');

var employeeNames = [];
var employeeNotes = [];
var trainName = [];
var trainDate = [];




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


  
function saveEntries () {

  function saveName() {
    for (let j = 0; j < employeeNames.length; j++) {
        var plannedEvent = employeeNames[j];
        var savedEvent = document.getElementById(`${plannedEvent}`);
        // planned event needs to be a different ID, it needs to be the ID's of the different entries
        var storedEvent = JSON.parse(localStorage.getItem(`${plannedEvent}`));
        if (storedEvent !== null) {
            savedEvent.setAttribute("value", storedEvent);
        }
    }
}
saveName ();

function saveNotes() {
  for (let j = 0; j < employeeNotes.length; j++) {
      var plannedEvent = employeeNotes[j];
      var savedEvent = document.getElementById(`${plannedEvent}`);
      // planned event needs to be a different ID, it needs to be the ID's of the different entries
      var storedEvent = JSON.parse(localStorage.getItem(`${plannedEvent}`));
      if (storedEvent !== null) {
          savedEvent.setAttribute("value", storedEvent);
      }
  }
}
saveNotes();

function saveTraining() {
  for (let j = 0; j < trainName.length; j++) {
      var plannedEvent = trainName[j];
      var savedEvent = document.getElementById(`${plannedEvent}`);
      // planned event needs to be a different ID, it needs to be the ID's of the different entries
      var storedEvent = JSON.parse(localStorage.getItem(`${plannedEvent}`));
      if (storedEvent !== null) {
          savedEvent.setAttribute("value", storedEvent);
      }
  }
}
saveTraining();

function saveDate() {
  for (let j = 0; j < trainDate.length; j++) {
      var plannedEvent = trainDate[j];
      var savedEvent = document.getElementById(`${plannedEvent}`);
      // planned event needs to be a different ID, it needs to be the ID's of the different entries
      var storedEvent = JSON.parse(localStorage.getItem(`${plannedEvent}`));
      if (storedEvent !== null) {
          savedEvent.setAttribute("value", storedEvent);
      }
  }
}
saveDate();
}
saveEntries();


function pushName (){
  namevalue = document.getElementById('emp-name').value;
  employeeNames.push(namevalue);
  console.log(employeeNames);
}

function pushNotes () {
  notevalue = document.getElementById('emp-notes').value;
  employeeNotes.push(notevalue);
  console.log(employeeNotes);
}

function pushTraining () {
  trainvalue = document.getElementById('emp-training').value;
  trainName.push(trainvalue);
  console.log(trainName);
}

function pushDate () {
  datevalue = document.getElementById('emp-date').value;
  trainDate.push(datevalue);
  console.log(trainDate);
}

document.getElementById('Submit').addEventListener('click',function (){
  pushName();
  pushNotes();
  pushTraining();
  pushDate();
})
 //this function doesn't seem to be logging to the console or saving to local 