import React from 'react';

export default class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="SideBar">
        <Roster {...this.props.roster} />
      </div>
    );
  }
}