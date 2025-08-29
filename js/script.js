// Application state
const state = { hearts: 0, coins: 100, copies: 0, history: [] };

// DOM elements
const heartCountEl = document.getElementById('heartCount');
const coinCountEl = document.getElementById('coinCount');
const copyCountEl = document.getElementById('copyCount');
const historyList = document.getElementById('historyList');
const clearHistoryBtn = document.getElementById('clearHistory');
let historyEmpty = document.getElementById('historyEmpty');

function updateHeader() {
  heartCountEl.textContent = state.hearts;
  coinCountEl.textContent = state.coins;

  
  copyCountEl.textContent = state.copies + ' copy';
 
}



// Get local time
function getLocalTime() {
  return new Date().toLocaleTimeString();
}

// Add call history item
function addHistory(name, number) {
  const time = getLocalTime();
  const item = document.createElement('div');
  item.className = 'history-item';
  
  item.innerHTML = `
    <div class="history-left">
      <div>${name}</div>
      <div style="font-weight:700">${number}</div>
    </div>
    <div class="history-time">${time}</div>
  `;
  // ------------------------------------------------

  if (historyEmpty) historyEmpty.style.display = 'none';
  historyList.insertBefore(item, historyList.firstChild);
  state.history.unshift({ name, number, time });
}

// Clear history button
clearHistoryBtn.addEventListener('click', () => {
  state.history = [];
  
  historyList.innerHTML = '<div class="empty" id="historyEmpty">No calls yet. Use the Call button on any card.</div>';
  historyEmpty = document.getElementById('historyEmpty'); 
  
});


document.querySelectorAll('.card').forEach(card => {
  const heartBtn = card.querySelector('.heart-btn');
  const copyBtn = card.querySelector('.copy-btn');
  const callBtn = card.querySelector('.call-btn');
  const name = card.getAttribute('data-name');
  const number = card.getAttribute('data-number');

  // Heart icon click
  heartBtn.addEventListener('click', () => {
    const liked = heartBtn.classList.toggle('liked');
    liked ? state.hearts++ : state.hearts--;
    updateHeader();
  });

  // Copy button click
  copyBtn.addEventListener('click', async () => {
    try {
      if (navigator.clipboard) await navigator.clipboard.writeText(number);
      state.copies++;
      updateHeader();
      alert(`Copied number ${number} from ${name}`);
    } catch {
      alert('Copy failed. Number: ' + number);
    }
  });

  // Call button click
  callBtn.addEventListener('click', () => {
    if (state.coins < 20) {
      alert('Not enough coins to make a call. Each call costs 20 coins.');
      return;
    }
    alert(`Calling ${name} — ${number}`);
    state.coins -= 20;
    updateHeader();
    addHistory(name, number);
  });
});

updateHeader();
