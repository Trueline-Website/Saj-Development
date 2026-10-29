import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-black text-white px-6">
      <Container size="narrow" className="text-center">
        <span className="text-xs uppercase font-mono tracking-[0.25em] text-neutral-400">
          Error 404
        </span>
        <h1 className="mt-4 text-4xl sm:text-6xl font-bold tracking-tight text-white">
          Page Not Located.
        </h1>
        <p className="mt-6 text-base text-neutral-400 font-light leading-relaxed max-w-md mx-auto">
          The requested architectural page or development is currently
          unavailable or under planning.
        </p>
        <div className="mt-10">
          <Button variant="primary" size="md" href="/">
            Return to Homepage
          </Button>
        </div>
      </Container>
    </div>
  );
}
