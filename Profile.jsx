//<!DOCTYPE html>
<html>
<head>
<title>Styling in React</title>
<script src="https://unpkg.com/react@15.3.2/dist/react.js"></script>
<script src="https://unpkg.com/react-dom@15.3.2/dist/react-dom.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min
.js"></script>
<style>
</style>
</head>
<body>
<div id="container">
    ReactDOM.render (
        <div>
            <h1> tell me something</h1>
        </div>,
    document.querySelector("#container");
    )
</div>



<div id="left_block">
      <h1>reply me later</h1>
</div>

<div id="right_block">
      <h1>dont talk to me</h1>
</div>
<script type="text/babel">
    var Letter = React.createClass({
        render: function() {
        return (
    <div>
        {this.props.children}
    </div>
        );
    }
});
var destination = document.querySelector("#container");
ReactDOM.render(
<div>
<Letter>A</Letter>
<Letter>E</Letter>
<Letter>I</Letter>
<Letter>O</Letter>
<Letter>U</Letter>
</div>,
destination
);
</script>
</body>
</html>