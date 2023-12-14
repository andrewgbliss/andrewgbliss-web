import HTMLIntroduction from './HTML';
import CSSIntroduction from './CSS';
import JavaScriptIntroduction from './JavaScript';

export default function Introduction() {
  return (
    <section className="hidden-width">
      <div className="lud-container py-16 px-2">
        <h2 className="text-center">Start coding right away</h2>
        <HTMLIntroduction />
        <hr className="mt-24" />
        <CSSIntroduction />
        <hr className="mt-24" />
        <JavaScriptIntroduction />
        <div className="h-16" />
      </div>
    </section>
  );
}
