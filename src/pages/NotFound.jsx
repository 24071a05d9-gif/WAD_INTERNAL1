import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="card page-card">
      <h2>Page not found</h2>
      <p>We couldn't find the page you're looking for.</p>
      <Link to="/" className="button button-secondary">Return to login</Link>
    </div>
  );
}

export default NotFound;
