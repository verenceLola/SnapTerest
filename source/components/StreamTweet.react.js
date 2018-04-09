var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header.react');
var Tweet = require('./Tweet.react');
var StreamTweet = React.createClass({
    getInitialState: function(){
        console.log('[Snapterest] StreamTweet: 1. Running getIntialState()');
        return {
            numberOfCharactersIsIncreasing: null,
            headerText: null
        };
    },
    componentWillMount: function(){
        console.log('[Snapterest] StreamTweet: 2. Running componentWillMount()');
        this.setState({
            numberOfCharactersIsIncreasing: true,
            headerText: 'Latest public photos from Twitter'
        });
        window.snapterest={
            numberOfReceivedTweets: 1,
            numberOfDisplayedTweets: 1
        };
    },
    componentDidMount: function(){
        console.log('[Snapterest] StreamTweet: 3. Running componentDidMount()');
        var componentDOMRepresentation = ReactDOM.findDOMNode(this);
        windows.snapterest.headerHtml = componentDOMRepresentation.children[0].outerHTML;
        window.snapterest.tweetHtml= componentDOMRepresentation.children[1].outerHTML;
    },
    componentWillReceivePops: function(nextProps){
        console.log('[Snapterest] StreamTweet: 4. Running componentWillReceiveProps()');
        var currentTweetLength = this.props.tweet.text.length;
        var nextTweetLength = nextProps.tweet.text.length;
        var isNUmberOfCharactersIncreasing = (nextTweetLength > currentTweetLength);
        var headerText;
        this.setState({
            numberOfCharactersIsIncreasing: isNUmberOfCharactersIncreasing
        });
        if (isNUmberOfCharactersIncreasing) {
            headerText= 'Number of charcters is increasing';
        }else{
            headerText='Latest public photo from Twitter';
        }
        this.setState({
            headerText: headerText
        });
        window.snapterest.numberOfReceivedTweets++;
    },
    shouldComponentUpdate: function(nextProps, nextState){
        console.log('[Snapterest] StreamTweet: 5. Running shouldComponentUpdate()');
        return (nextProps.tweet.text.length > 1);
    },
    componentWillUpdate: function(nextProps, nextState){
        console.log('[Snapterest] StreamTweet: 6. Running componentWillUpdate()');
    },
    componentDidUpdate: function(prevProps, prevState){
        console.log('[Snapterest] StreamTweet: 7. Running componentDidUpdate()');
        window.snapterest.numberOfDisplayedTweets++;
    },
    componentWillUnmount: function(){
        console.log('[Snapterest] StreamTweet: 8. Running componentWillUnmount()');
        delete windows.snapterest;
    },
    render: function(){
        console.log('[Snapterest] StreamTweet: Running render()');
        return (
            <section>
                <Header text={this.state.headerText} />
                <Tweet tweet={this.props.tweet} onImageClick={this.props.onAddTweetToCollection} />
            </section>
        );
    }
});
module.exports = StreamTweet;