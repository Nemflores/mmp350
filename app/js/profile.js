const uid = location.search.split('=') [1];
const db = firebase.database();
const ref = db.ref('users').child(uid);

// firebase event, any chabge to database//
ref.on('value' , updateUser)

const profileDisplayName = document.getElementById('profile-display-name');
function updateUser(snapshot) {
    const user = snapshot.val();
    profileDisplayName.textContent = user.displayName;
}

/* update data */
const editButton = document.getElementById('edit');
const editProfile = document.getElementById('edit-profile');
const profileNameInput = document.getElementById('edit-display-name');
const profileEditButton = document.getElementById('submit-display-name');

editButton.onclick = function(){
    editButton.style.display = 'block';
};

profileEditButton.onclick = updateProfile;

function updateProfile() {