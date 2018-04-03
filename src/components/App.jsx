class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div>
        <h1>Movie List</h1>
        <List movies={this.props.movies} />
      </div>
    )
  }
}

window.App = App;

