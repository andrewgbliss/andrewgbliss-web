import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { Button } from "~/components/ui/button";
import { CardContent, Card } from "~/components/ui/card";
import { ScrollFadeIn } from "../ui/animations";

export function ContactSection() {
  return (
    <div id="contact" className="flex items-center justify-center p-4 sm:p-12">
      <div>
        <ScrollFadeIn>
          <Card className="dark:bg-white dark:text-black">
            <CardContent>
              <div className="space-y-8 py-5">
                <div className="space-y-2">
                  <h2 className="text-3xl font-semibold">Contact</h2>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    Fill out the form below and we&apos;ll get back to you as
                    soon as possible.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First name</Label>
                      <Input
                        id="first-name"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last name</Label>
                      <Input
                        id="last-name"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      placeholder="Enter your email"
                      type="email"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      className="min-h-[100px]"
                      id="message"
                      placeholder="Enter your message"
                    />
                  </div>
                  <Button variant={"destructive"} type="submit">
                    Send message
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </ScrollFadeIn>
      </div>
    </div>
  );
}
