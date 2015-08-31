import React from 'react';
import Repos from '../Github/Repos';
import UserProfile from '../Github/UserProfile';
import Notes from '../Notes/Notes';
import helpers from '../../utils/helpers';

class Rankings extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      notes: ['note1', 'note2'],
      bio: {name: 'Pooja'},
      repos: [1, 2, 3]
    };
  }

  init() {
    helpers.getGithubInfo(this.router.getCurrentParams().username)
      .then((dataObj) => {
        this.setState({
          bio: dataObj.bio,
          repos: dataObj.repos
        })
      });
  }

  componentWillMount() {
    this.router = this.context.router;
  }
  componentDidMount() {
    //ajax requests
    this.init();
  }

  // componentWillUnmount: function(){
  //   this.unbind('notes');
  // },

  componentWillReceiveProps() {
    this.init();
  }

  handleAddNote(newNote) {
    this.state.notes.push(newNote)
    this.setState({
      notes: this.state.notes
    })

  }

  render() {
    var username = this.router.getCurrentParams().username;

    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={username} bio={this.state.bio}/>
        </div>
        <div className="col-md-4">
          <Repos username={username} repos={this.state.repos}/>
        </div>
        <div className="col-md-4">
          <Notes username={username} notes={this.state.notes} addNote={this.handleAddNote}/>
        </div>
      </div>
    )
  }
};

Rankings.contextTypes = {
  router: React.PropTypes.func.isRequired
}

export default Rankings;
