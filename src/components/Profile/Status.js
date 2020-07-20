import React, { Component } from 'react';

export default class Status extends Component {
  state = {
    editorMode: false,
    status: this.props.status,
  };

  enableEditorMode() {
    this.setState({
      editorMode: true,
    });
  }

  disableEditorMode = () => {
    if (!this.state.status) {
      alert('Status cannot be empty');
      return;
    }
    this.setState({
      editorMode: false,
    });
    this.props.updateStatus(this.props.profile.id, this.state.status);
  };

  onChangeHanlder = (e) => {
    this.setState({
      status: e.target.value,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }

  render() {
    return (
      <div
        style={{
          marginTop: 10,
        }}
      >
        {!this.state.editorMode ? (
          <div
            style={{
              fontStyle: 'italic',
            }}
            onDoubleClick={this.enableEditorMode.bind(this)}
          >
            <span>{this.props.status}</span>
          </div>
        ) : (
          <div onBlur={this.disableEditorMode}>
            <input
              type='text'
              onChange={this.onChangeHanlder}
              autoFocus
              value={this.state.status}
            />
          </div>
        )}
      </div>
    );
  }
}
