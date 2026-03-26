import NotFoundState from "../components/NotFoundState";

export default function NotFound() {
  return (
    <main className="container">
      <NotFoundState description="The address does not point to a page in the RetroFocus archive." />
    </main>
  );
}
