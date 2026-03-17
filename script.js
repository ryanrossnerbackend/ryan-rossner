function switchTab(tabName) {
    document.querySelectorAll('.content-section').forEach(function(s) { s.classList.remove('visible'); });
    document.querySelectorAll('.tab-btn').forEach(function(b) { b.classList.remove('active'); });
    document.getElementById(tabName + '-content').classList.add('visible');
    document.getElementById('btn-' + tabName).classList.add('active');
}

function openModal() { document.getElementById('modal').style.display = 'flex'; }
function closeModal() { document.getElementById('modal').style.display = 'none'; }

window.onclick = function(e) { if (e.target.classList.contains('modal-overlay')) closeModal(); }
