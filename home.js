const issueCount = document.getElementById("issueCount");

// init
document.addEventListener("DOMContentLoaded", function () {
  loadAllIssues();
});

// issue fetch
function loadAllIssues(){
    fetch ("https://phi-lab-server.vercel.app/api/v1/lab/issues").then(res => res.json()).then(data => {
    issueCount.textContent = data.data.length
  })
}

