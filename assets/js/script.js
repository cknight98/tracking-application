var now = moment()

$("#1a").text(now.format("MMM Do, YYYY"));

var personName = $('#name')
var notes = $('#notes')
var training1 = $('#training1')
var training2 = $('#training2')
// need to set all of these above id's to the input given from the modal



// should set rows in local storage, may need fixing
// need to make sure it saves the info given from the modal
function setHistory() {
    if(localStorage.getItem('searchHistory') === null) {
      localStorage.setItem('searchHistory', JSON.stringify([]))
    }
    var searchHistory = JSON.parse(localStorage.getItem('searchHistory'));
  for (let i = 0; i < searchHistory.length; i++) {
    const element = searchHistory[i];
    if (element.city === cityName) {
        // ^change this above row, this is leftover from the homework I copied this from, not sure how it should be changed for this
      return;
    }
  }
    searchHistory.push({notes, training1, training2, personName})
    // need to set these above variables as global variables
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory))
  }

  //runs the setHistory function
  setHistory ();



  

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
