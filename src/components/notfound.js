function notfound() {
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        minHeight: "90vh",
        display: "flex",
      }}
    >
      <div
        style={{ margin: "15px" }}
        className="spinner-grow text-primary"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
      <div
        style={{ margin: "15px" }}
        className="spinner-grow text-secondary"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
      <div
        style={{ margin: "15px" }}
        className="spinner-grow text-success"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
      <div
        style={{ margin: "15px" }}
        className="spinner-grow text-danger"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
      <div
        style={{ margin: "15px" }}
        className="spinner-grow text-warning"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
      <div
        style={{ margin: "15px" }}
        className="spinner-grow text-info"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default notfound;
