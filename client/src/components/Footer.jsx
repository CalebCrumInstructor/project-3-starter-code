const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default function Footer() {
  return (
    <div style={styles.container}>
      <h5>Welcome to Guild Journeys!</h5>
    </div>
  );
}
