var React = require('react');
var fomrStyle ={
    display: "inline-block"
};
var CollectionExportForm = React.createClass({
    render: function(){
        return(
            <form action="http://codepen.io/pen/define" method="POST" target="_blank" style={fomrStyle}>
                <input type="hidden" name="data" value={this.props.htmlMarkup}/>
                <button type="submit" className="btn btn-default">Exportas HTML </button>
            </form>
        );
    }
});
module.exports = CollectionExportForm;