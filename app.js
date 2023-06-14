//init GitHub
const github = new GitHub;
//init ui
const ui = new UI;

//search input
const searchUser = document.getElementById('searchUser');

//search input even listener
searchUser.addEventListener('keyup', (e) => {
    //get input text
    const userText = e.target.value;

    if(userText !== ''){
        github.getUser(userText)
            .then(data => {
                if(data.profile.message === 'Not Found') {
                    // alert
                    ui.showAlert('User not found', 'alert');
                } else {
                    //show profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            })
    } else {
        //clear profile
        ui.clearProfile();
    }
});