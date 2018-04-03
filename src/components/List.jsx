const List = (props) => (
  <div id="list">
    {props.movies.map(movie =>
      <ListEntry movie={movie} />
    )}
  </div>
);

