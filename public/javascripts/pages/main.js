var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <div id="casual-data-app">
                <div>KKK</div>
                <div>{this.props.children}</div>
            </div>
        );
    }
});