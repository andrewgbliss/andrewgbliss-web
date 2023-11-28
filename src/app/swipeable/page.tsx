import { SwipeCards } from "~/components/swipe/swipe-cards";
import { QrCard } from "~/components/ui/cards/qr-card";

export default function Page() {
  return (
    <SwipeCards>
      <QrCard
        title="Travel Explorer"
        imgSrc="/img/travel-explorer.png"
        tagline="Beach adventures starting at $99."
        href="/travel"
      />
      <QrCard
        title="Travel Explorer"
        imgSrc="/img/travel-explorer.png"
        tagline="Beach adventures starting at $99."
        href="/travel"
      />
      <QrCard
        title="Travel Explorer"
        imgSrc="/img/travel-explorer.png"
        tagline="Beach adventures starting at $99."
        href="/travel"
      />
    </SwipeCards>
  );
}
