var React = require('react');
var moment = require('moment');
var LocationItem = require('./LocationItem.react');

var LocationItem = React.createClass({

  handleClick: function() {
    this.props.onClick(this.props.address);
  },

  render: function() {
    var classname = "list-group-item";

    if (this.props.active) {
      classname += " active-location";
    }

    return (
      <a className={classname} onClick={this.handleClick}>
        {this.props.address}
        <span className="createdAt">{ moment(this.props.timestamp).fromNow() }</span>
        <span className="glyphicon glyphicon-menu-right"></span>
      </a>
    )
  }

});

module.exports = LocationItem;
