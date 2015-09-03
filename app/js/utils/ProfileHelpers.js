import axios from 'axios';

function getRepos(username) {
  // return axios.get(`https://api.blah/${usernmae}/repos`); //string literals
  return { data: [{name: "Pooja"}, {name: "Shauny"}]
   }
};

function getUserInfo(username){
// return axios.get(`https://api.blah/${usernmae}/repos`);
  return { data: {name: "NewName"}}
};


var ProfileHelpers = {
  getGithubInfo(username){
    return axios.all([getRepos(username), getUserInfo(username)])
      .then((arr) => {
        return {
          repos: arr[0].data,
          bio: arr[1].data
        }
      });
  }
};

export default ProfileHelpers;
