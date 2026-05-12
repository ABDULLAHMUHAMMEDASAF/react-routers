function NoMatch() {
  const style = {
    width: "100%",
    height: "100%",
    display: "Flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    color: "crimson",
  };
  return (
    <div style={style}>
      <h1>There is nothing here: 404!</h1>
    </div>
  );
}

export default NoMatch;
