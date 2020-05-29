import React from 'react'
import { connect } from 'react-redux'
class Modal extends React.Component {

  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }
      // The modal "window"
    const modalStyle = {
      display: "block",
      paddingRight: "17",
      backgroundColor: 'rgba(0,0,0,0.3)',
    };
    return (
      <div className="modal fade show" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" style={modalStyle}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button onClick={this.props.onClose} type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {this.props.children}
            </div>
            <div className="modal-footer">
              <button onClick={this.props.onClose} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(null, null)(Modal);