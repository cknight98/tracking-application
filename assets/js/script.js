
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



//these functions below should put the entered info into local storage when they are done
  function saveName() {
    for (let j = 0; j < employeeNames.length; j++) {
        var plannedName = employeeNames[j];
        var savedName = document.getElementById('emp-name');
        var storedName = JSON.parse(localStorage.getItem(`${plannedName}`));
        if (storedName !== null) {
            savedName.setAttribute("value", storedName);
        }
    }
}
saveName ();

function saveNotes() {
  for (let j = 0; j < employeeNotes.length; j++) {
      var plannedNote = employeeNotes[j];
      var savedNote = document.getElementById('emp-notes');
      var storedNote = JSON.parse(localStorage.getItem(`${plannedNote}`));
      if (storedNote !== null) {
          savedNote.setAttribute("value", storedNote);
      }
  }
}
saveNotes();

function saveTraining() {
  for (let j = 0; j < trainName.length; j++) {
      var plannedTraining = trainName[j];
      var savedTraining = document.getElementById('emp-training');
      var storedTraining = JSON.parse(localStorage.getItem(`${plannedTraining}`));
      if (storedTraining !== null) {
          savedTraining.setAttribute("value", storedTraining);
      }
  }
}
saveTraining();

function saveDate() {
  for (let j = 0; j < trainDate.length; j++) {
      var plannedDate = trainDate[j];
      var savedDate = document.getElementById('emp-date');
      var storedDate = JSON.parse(localStorage.getItem(`${plannedDate}`));
      if (storedDate !== null) {
          savedDate.setAttribute("value", storedDate);
      }
  }
}
saveDate();



// this string of functions logs the info entered in the modal to the console and adds the info to the associated arrays
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

// this function should: 
// push modal info to array(does do this) 
// logs array data to console(does do this) 
// adds info to local storage (does do this)
// generates a row of data on the webpage to display the entered info (doesnt do this yet)
document.getElementById('Submit').addEventListener('click',function (){
  pushName();
  pushNotes();
  pushTraining();
  pushDate();
  saveName();
  saveNotes();
  saveTraining();
  saveDate();
  //name local store
  var nameInput = document.getElementById('emp-name').value;
  localStorage.setItem('name', JSON.stringify(nameInput));
  //notes local store
  var noteInput = document.getElementById('emp-notes').value;
  localStorage.setItem('notes', JSON.stringify(noteInput));
  //training option local store
  var trainInput = document.getElementById('emp-training').value;
  localStorage.setItem('training option', JSON.stringify(trainInput));
  //date local store
  var dateInput = document.getElementById('emp-date').value;
  localStorage.setItem('date', JSON.stringify(dateInput));

  //add a new function here that would generate a row under the correct columns to add the info to the webpage when the button is pushed
})
 