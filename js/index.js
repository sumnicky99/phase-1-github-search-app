
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        findGithubUser(e.target.search.value)
        form.reset()
    })
  })
  
  // Call API with search term and return user info
  function findGithubUser(name) {
    fetch(`https://api.github.com/search/users?q=${name}`)
    .then(response => response.json())
    .then(data => {
        //Promise returns an object containing items. Items are an array. This makes it easier to get to the array.
        let users = data.items 
        for (let i = 0; i < users.length; i++) {
            // Create friendly names for each user attribute
            userAvatar = data.items[i].document.addEventListener('DOMContentLoaded', () => {
                const form = document.querySelector('form')
                form.addEventListener('submit', (e) => {
                    e.preventDefault()
                    findGithubUser(e.target.search.value)
                    form.reset()
                })
            })
            
            // Call API with search term and return user info
            function findGithubUser(name) {
                fetch(`https://api.github.com/search/users?q=${name}`)
                .then(response => response.json())
                .then(data => {
                    //Promise returns an object containing items. Items are an array. This makes it easier to get to the array.
                    let users = data.items 
                    for (let i = 0; i < users.length; i++) {
                        // Create friendly names for each user attribute
                        userAvatar = data.items[i].avatar_url;
                        userName = data.items[i].login;
                        userGitUrl = data.items[i].html_url;
                
                        // Add user info to the page
                        const node = document.createElement("p");
                        node.innerHTML += `
                            <img src ="${userAvatar}" style="width:200px"><br>
                            <span id = "${userName}" class = "userInfo" style = "cursor:pointer">
                                ${userName} 
                            </span>
                            <br> <a href="${userGitUrl}">GitHub Profile</a>`;
                        document.getElementById("user-list").appendChild(node);
                    }
                })
                setTimeout(function() {
                    const userList = document.querySelectorAll('span.userInfo')
                    for (let x = 0; x < userList.length; x++) {
                        userList[x].addEventListener("click", function() {
                            clickedName = userList[x].innerHTML.replace(/\s+/g, '')
                            fetch(`https://api.github.com/users/${clickedName}/repos`)
                            .then(response => response.json())
                            .then(repoResponse => {
                                for (y = 0; y < repoResponse.length; y++) {
                                    let rNode = document.createElement('p')
                                    rNode.innerHTML += `${repoResponse[y].name}`
                                    document.getElementById(`${clickedName}`).appendChild(rNode);
                                }
                            })
                        })
                    }
                }, 1000)
            }
            userName = data.items[i].login;
            userGitUrl = data.items[i].html_url;
    
            // Add user info to the page
            const node = document.createElement("p");
            node.innerHTML += `
                <img src ="${userAvatar}" style="width:200px"><br>
                <span id = "${userName}" class = "userInfo" style = "cursor:pointer">
                    ${userName} 
                </span>
                <br> <a href="${userGitUrl}">GitHub Profile</a>`;
            document.getElementById("user-list").appendChild(node);
        }
    })
    setTimeout(function() {
        const userList = document.querySelectorAll('span.userInfo')
        for (let x = 0; x < userList.length; x++) {
            userList[x].addEventListener("click", function() {
                clickedName = userList[x].innerHTML.replace(/\s+/g, '')
                fetch(`https://api.github.com/users/${clickedName}/repos`)
                .then(response => response.json())
                .then(repoResponse => {
                    for (y = 0; y < repoResponse.length; y++) {
                        let rNode = document.createElement('p')
                        rNode.innerHTML += `${repoResponse[y].name}`
                        document.getElementById(`${clickedName}`).appendChild(rNode);
                    }
                })
            })
        }
    }, 1000)
  }
  
  
  