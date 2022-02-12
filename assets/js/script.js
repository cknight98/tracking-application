const dateTime = document.querySelector("span")
dateTime.textContent = new Date().toLocaleDateString("en-US", {
  day: "numeric",
  month: "short",
  year: "numeric",
  hour: "numeric",
  minute: "numeric"
});

var employeeNameInputEl = $('#employee-name-input');
var employeeNotesInputEl = $('#employee-notes-input');
var trainingNameInputEl = $('#training-name-input');
var trainingDateInputEl = $('#training-date-input');
var employeeNames = [];
var employeeNotes = [];
var trainName1 = [];
var trainName2 = [];
var trainDate1 = [];
var trainDate2 = [];


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




 
  // MODAL
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("open-modal");

// Get the <span> element that closes the modal
var span = document.getElementById("close");

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// opens modal
$("#Submit").click(function(event){
  event.preventDefault()
  modal.style.display = "none";
});


$("#Cancel").click(function(event){
  event.preventDefault()
    modal.style.display = "none";
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

function saveTraining1() {
for (let j = 0; j < trainName1.length; j++) {
    var plannedTraining1 = trainName1[j];
    var savedTraining1 = document.getElementById('emp-training1');
    var storedTraining1 = JSON.parse(localStorage.getItem(`${plannedTraining1}`));
    if (storedTraining1 !== null) {
        savedTraining1.setAttribute("value", storedTraining1);
    }
}
}
saveTraining1();

function saveTraining2() {
  for (let j = 0; j < trainName2.length; j++) {
      var plannedTraining2 = trainName2[j];
      var savedTraining2 = document.getElementById('emp-training2');
      var storedTraining2 = JSON.parse(localStorage.getItem(`${plannedTraining2}`));
      if (storedTraining2 !== null) {
          savedTraining2.setAttribute("value", storedTraining2);
      }
  }
  }
  saveTraining2();

function saveDate1() {
for (let j = 0; j < trainDate1.length; j++) {
    var plannedDate1 = trainDate1[j];
    var savedDate1 = document.getElementById('emp-date1');
    var storedDate1 = JSON.parse(localStorage.getItem(`${plannedDate1}`));
    if (storedDate1 !== null) {
        savedDate1.setAttribute("value", storedDate1);
    }
}
}
saveDate1();

function saveDate2() {
  for (let j = 0; j < trainDate2.length; j++) {
      var plannedDate2 = trainDate2[j];
      var savedDate2 = document.getElementById('emp-date2');
      var storedDate2 = JSON.parse(localStorage.getItem(`${plannedDate2}`));
      if (storedDate2 !== null) {
          savedDate2.setAttribute("value", storedDate2);
      }
  }
  }
  saveDate2();



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

function pushTraining1 () {
trainvalue1 = document.getElementById('emp-training1').value;
trainName1.push(trainvalue1);
console.log(trainName1);
}

function pushTraining2 () {
  trainvalue2 = document.getElementById('emp-training2').value;
  trainName2.push(trainvalue2);
  console.log(trainName2);
  }

function pushDate1 () {
datevalue1 = document.getElementById('emp-date1').value;
trainDate1.push(datevalue1);
console.log(trainDate1);
}

function pushDate2 () {
  datevalue2 = document.getElementById('emp-date2').value;
  trainDate2.push(datevalue2);
  console.log(trainDate2);
  }

// this function should: 
// push modal info to array(does do this) 
// logs array data to console(does do this) 
// adds info to local storage (does do this)
// generates a row of data on the webpage to display the entered info (doesnt do this yet)
document.getElementById('Submit').addEventListener('click',function (event){
event.preventDefault();
pushName();
pushNotes();
pushTraining1();
pushTraining2();
pushDate1();
pushDate2();
saveName();
saveNotes();
saveTraining1();
saveTraining2();
saveDate1();
saveDate2();
console.log("hi");
//name local store
var nameInput = document.getElementById('emp-name').value;
localStorage.setItem('name', JSON.stringify(nameInput));
//notes local store
var noteInput = document.getElementById('emp-notes').value;
localStorage.setItem('notes', JSON.stringify(noteInput));
//training option 1 local store
var trainInput1 = document.getElementById('emp-training1').value;
localStorage.setItem('training option1', JSON.stringify(trainInput1));
//date 1 local store
var dateInput1 = document.getElementById('emp-date1').value;
localStorage.setItem('date1', JSON.stringify(dateInput1));
//training option 2 local store
var trainInput2 = document.getElementById('emp-training2').value;
localStorage.setItem('training option2', JSON.stringify(trainInput2));
//date 2 local store
var dateInput2 = document.getElementById('emp-date2').value;
localStorage.setItem('date2', JSON.stringify(dateInput2));

})
//add a new function here that would generate a row under the correct columns to add the info to the webpage when the button is pushed


function getFromLocal () {
 tableBody = $('#table-body');
 retrievedName = JSON.parse(localStorage.getItem('name'))
 retrievedNotes = JSON.parse(localStorage.getItem('notes'))
 retrievedTraining1 = JSON.parse(localStorage.getItem('training option1'))
 retrievedDate1 = JSON.parse(localStorage.getItem('date1'))
 retrievedTraining2 = JSON.parse(localStorage.getItem('training option2'))
 retrievedDate2 = JSON.parse(localStorage.getItem('date2'))
printModalInfo()
}

function printModalInfo () {

  //name local store
var nameInput = document.getElementById('emp-name').value;
localStorage.setItem('name', JSON.stringify(nameInput));
//notes local store
var noteInput = document.getElementById('emp-notes').value;
localStorage.setItem('notes', JSON.stringify(noteInput));
//training option 1 local store
var trainInput1 = document.getElementById('emp-training1').value;
localStorage.setItem('training option1', JSON.stringify(trainInput1));
//date 1 local store
var dateInput1 = document.getElementById('emp-date1').value;
localStorage.setItem('date1', JSON.stringify(dateInput1));
//training option 2 local store
var trainInput2 = document.getElementById('emp-training2').value;
localStorage.setItem('training option2', JSON.stringify(trainInput2));
//date 2 local store
var dateInput2 = document.getElementById('emp-date2').value;
localStorage.setItem('date2', JSON.stringify(dateInput2));

  var trainingRowEl = $('<tr>');
  var trainingNameTdEl = $('<td>').addClass('p-2').text(nameInput);
  var trainingNotesTdEl = $('<td>').addClass('p-2').text(noteInput);
  var trainingType1TdEl = $('<td>').addClass('p-2').text(trainInput1);
  var trainingDate1TdEl = $('<td>').addClass('p-2').text(dateInput1);
  var trainingType2TdEl = $('<td>').addClass('p-2').text(trainInput2);
  var trainingDate2TdEl = $('<td>').addClass('p-2').text(dateInput2);

  

trainingRowEl.append(
  trainingNameTdEl,
  trainingNotesTdEl,
  trainingType1TdEl,
  trainingDate1TdEl,
  trainingType2TdEl,
  trainingDate2TdEl
  );

  tableBody.append(trainingRowEl)

}

getFromLocal()

$('#Submit').on('click', printModalInfo)