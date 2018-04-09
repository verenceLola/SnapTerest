var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header.react');
var Button = require('./Button.react');
var inputStyle ={
    marginRight: '5px'
};
var CollectionRenameForm = React.createClass({
    getIntialState: function(){
        return{
            inputValue: this.props.name
        };
    },
    setInputValue: function(inputValue){
        this.setState({
            inputValue: inputValue
        });
    },
    handleInputvalueChange: function(event){
        var inputValue = event.target.value;
        this.setInputValue(inputValue);
    },
    handleFromSubmit: function(event){
        event.preventDefault();
        var collectionName = this.state.inputValue;
        this.props.onChangeCollectionName(collectionName);
    },
    handleFromCancel: function(event){
        event.preventDefault();
        var collectionName= this.props.name;
        this.setInputValue(collectionName);
        this.props.onCancelCollectionNameChange();
    },
    componentDidMount: function(){
        this.refs.collectionName.focus();
    },
    render: function(){
        return(
            <form className="form-inline" onSubmit={this.handleFromSubmit}>
                <Header text="Collection name:"/>
                <div className="form-group">
                    <input
                        className="form-control" style={inputStyle} onChange={this.handleInputvalueChange} value={this.state.inputValue} ref="collectionName"/>
                </div>
                <Button label="Change" handleClick={this.handleFromSubmit}/>
                <Button label="Cancel" handleClick={this.handleFromCancel}/>
            </form>
        );
    }
});
module.exports = CollectionRenameForm;