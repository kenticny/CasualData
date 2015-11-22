var React = require('react');
var antd = require('antd');

var Datepicker = antd.Datepicker;

module.exports = React.createClass({
    render: function() {
        return (
            <Datepicker defaultValue="2015-12-12" />
        );
    }
});