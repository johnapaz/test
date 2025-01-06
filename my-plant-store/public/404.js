import Link from 'next/link';
import './styles/global.css'; // Adjust based on your structure

export default function Custom404() {
  return (
    <div className="error-page">
      <h1>Oops! Page Not Found</h1>
      <p>It looks like the page you’re looking for doesn’t exist.</p>
      <Link href="/">
        <button className="back-home-button">Back to Home</button>
      </Link>
    </div>
  );
}