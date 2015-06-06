var React = require('react');

var Search = React.createClass({

  getInitialState: function() {
    return { value: '' };
  },

  handleChange: function(event) {
    this.setState({ value: event.target.value });
  },

  handleSubmit: function(event) {
    event.preventDefault();

    this.props.onSearch(this.state.value);
    this.getDOMNode().querySelector('input').blur();
  },

  render: function() {
    return (
      <form id="geocoding_form" className="form-horizontal" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <div className="col-xs-12 col-md-6 col-md-offset-3">
            <div className="input-group">
              <input type="text" className="form-control" id="address" placeholder="Find a location..."
              value={this.state.value} onChange={this.handleChange} />

              <span className="input-group-btn">
                <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
              </span>
            </div>
          </div>
        </div>
      </form>
    );

  }
});

module.exports = Search;
