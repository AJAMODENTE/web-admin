const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  let currentDate = new Date();
  let currentMonth = currentDate.getMonth();
  let currentYear = currentDate.getFullYear();
  
  function renderCalendar(month, year) {
    const monthYear = document.getElementById('monthYear');
    monthYear.textContent = `${months[month]} ${year}`;
  
    const firstDay = new Date(year, month).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();
  
    let daysHtml = '';
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
    // Display day names
    daysOfWeek.forEach(day => {
      daysHtml += `<div class="day-name">${day}</div>`;
    });
  
    // Empty space before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      daysHtml += `<div class="day"></div>`;
    }
  
    // Display days of the month
    for (let day = 1; day <= lastDate; day++) {
      const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      daysHtml += `<div class="day" data-date="${dateStr}" onclick="selectDate('${dateStr}')">${day}</div>`;
    }
    
  
    document.getElementById('calendarDays').innerHTML = daysHtml;
  }
  
  document.getElementById('prevMonth').addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }
    renderCalendar(currentMonth, currentYear);
  });
  
  document.getElementById('nextMonth').addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
    renderCalendar(currentMonth, currentYear);
  });
  
  // Initialize calendar
  renderCalendar(currentMonth, currentYear);
  

  let selectedDate = null;

function selectDate(dateStr) {
  selectedDate = dateStr;

  // Remove previous selections
  document.querySelectorAll('.calendar-days .day').forEach(day => {
    day.classList.remove('selected');
  });

  // Highlight selected day
  const selectedDayElement = document.querySelector(`.day[data-date="${dateStr}"]`);
  if (selectedDayElement) {
    selectedDayElement.classList.add('selected');
  }

  console.log('Selected date:', selectedDate);
  // You can now use selectedDate to link it to the event form
  document.getElementById('selected-date').value = selectedDate;
}


