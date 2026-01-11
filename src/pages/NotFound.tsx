import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { PageTransition } from "../components/PageTransition";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <PageTransition key={location.pathname}>
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="mb-4 text-6xl font-display font-bold text-primary">404</h1>
          <p className="mb-4 text-xl text-muted-foreground">Beklager! Siden ble ikke funnet</p>
          <Link to="/" className="text-primary underline hover:text-primary/90">
            Tilbake til forsiden
          </Link>
        </div>
      </div>
    </PageTransition>
  );
};

export default NotFound;