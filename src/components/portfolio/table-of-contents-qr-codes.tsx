import { FadeIn } from "../ui/animations";
import { QrCard } from "../ui/cards/qr-card";

export function TableOfContentsQrCodes() {
  return (
    <section id="portfolio" className="container mx-auto w-full p-6 sm:p-12">
      <div className="py-12 text-center">
        <FadeIn wait={1000}>
          <h2 className="text-5xl font-bold">Portfolio</h2>
        </FadeIn>
      </div>
      <div className="grid gap-4 pb-24">
        <div className="grid grid-cols-1 gap-8">
          <FadeIn wait={1500}>
            <QrCard
              title="Travel Explorer"
              imgSrc="/img/travel-explorer.png"
              tagline="Beach adventures starting at $99."
              href="/travel"
            />
          </FadeIn>
          <FadeIn wait={2000}>
            <QrCard
              title="Zero Fall Studios"
              imgSrc="/img/zero-fall-studios.png"
              tagline="Dont Fall."
              href="https://www.zerofallstudios.com"
            />
          </FadeIn>
          <FadeIn wait={2500}>
            <QrCard
              title="Abybyo"
              imgSrc="/img/abybyo-website.png"
              tagline="Study Journal."
              href="https://www.abybyo.com"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
