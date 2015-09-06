import React from 'react';
import { Typeahead } from 'react-typeahead';

export default class FestivalTypeahead extends React.Component {
  //
  // <Typeahead
  //   defaultValue=Coachella
  //   options=someTotalList
  //   maxVisible=5
  //   value=this links back to a callback that is passed in
  //   placeholder="Search"
  //   onOptionSelected=

  _getFestivalNames(option) {
    return option.name;
  }

  render() {

    return (  <Typeahead
                options = {this.props.festivals}
                displayOption = {this._getFestivalNames}
                filterOption = "name"
                maxVisible = { 5 }
                onOptionSelected = {this.props.onOptionSelected}/>
                )


  }

}
