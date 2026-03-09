const issueCount = document.getElementById("issueCount");
const allIssues = document.getElementById("allIssues");

// init
loadAllIssues();
displayIssues();

// issue fetch
function loadAllIssues(){
    fetch ("https://phi-lab-server.vercel.app/api/v1/lab/issues").then(res => res.json()).then(data => {
    const issues = data.data;
    issueCount.textContent = issues.length;
    console.log(issues);
  })
}

//show issues
function displayIssues(){
    fetch ("https://phi-lab-server.vercel.app/api/v1/lab/issues").then(res => res.json()).then(json => {
        allIssues.innerHTML = ""
        json.data.forEach((issues)=>{
            const issueCard = document.createElement("div")
            issueCard.innerHTML =`
            <div class="issue-card ${issues.isOpen ? 'open-card' : 'closed-card'}">
                <div>
                    <div class="issue-up">
                        ${getStatusLabel(issues)}
                        <p>${issues.priority}</p>
                    </div>
                    <div>
                        <h2>${issues.title}</h2>
                        <p class = "issue-subtitle"> ${issues.description}</p>
                        <p>${issues.labels[0]}</p>
                    </div>
                </div>
                <div>
                    <p>${issues.author}</p>
                    <p>${issues.createdAt}</p>
                </div>
            </div>`
            function getStatusLabel(issues) {
                if (issues.status === 'open'){
                    return '<img src="assets/Open-Status.png" alt="">';}
                else if (issues.status === 'closed'){
                    return '<img src="assets/Closed- Status .png" alt="">'
                };
            }
            allIssues.append(issueCard)
        })
    })
}
