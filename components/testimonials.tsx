import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Testimonials() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <h2 className="text-4xl font-medium lg:text-5xl">
            Build by people who care, loved by thousands who love
          </h2>
          <p>
            PASS.ai is evolving to be more than just the models. It supports entire
            calls to the APIs and platforms that deliver me the information I need.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
          <Card className="grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2">
            <CardHeader>
              <img
                className="h-6 w-fit dark:invert"
                src="/nike.svg"
                alt="Nike Logo"
                height="24"
                width="auto"
              />
            </CardHeader>
            <CardContent>
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p className="text-xl font-medium">
                  PASS.ai has transformed the way I track my son&rsquo;s school life.
                  Their extensive features, great UI, and quick automation has
                  significantly improved my personal life. The flexibility to
                  customize the dashboard gives me a unique user experiences. PASS.ai
                  is a game-changer for modern families!
                </p>

                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                  <Avatar className="size-12">
                    <AvatarImage
                      src="https://tailus.io/images/reviews/shekinah.webp"
                      alt="Shekinah Tshiokufila"
                      height="400"
                      width="400"
                      loading="lazy"
                    />
                    <AvatarFallback>ST</AvatarFallback>
                  </Avatar>

                  <div>
                    <cite className="text-sm font-medium">Shekinah Tshiokufila</cite>
                    <span className="text-muted-foreground block text-sm">
                      Parent in Ontario
                    </span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>
          <Card className="md:col-span-2">
            <CardContent className="h-full pt-6">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p className="text-xl font-medium">
                  PASS.ai is really extraordinary and very practical, no need to
                  break your own heart. This is a real gold mine for sure.
                </p>

                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                  <Avatar className="size-12">
                    <AvatarImage
                      src="https://tailus.io/images/reviews/jonathan.webp"
                      alt="Jonathan Yombo"
                      height="400"
                      width="400"
                      loading="lazy"
                    />
                    <AvatarFallback>JY</AvatarFallback>
                  </Avatar>
                  <div>
                    <cite className="text-sm font-medium">Jonathan Yombo</cite>
                    <span className="text-muted-foreground block text-sm">
                      Software Lover
                    </span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="h-full pt-6">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p>
                  I love this app. This is one of the best personal assistant tools
                  that I have ever used!
                </p>

                <div className="grid [grid-template-columns:auto_1fr] items-center gap-3">
                  <Avatar className="size-12">
                    <AvatarImage
                      src="/yucel.webp"
                      alt="Yucel Faruksahan"
                      height="400"
                      width="400"
                      loading="lazy"
                    />
                    <AvatarFallback>YF</AvatarFallback>
                  </Avatar>
                  <div>
                    <cite className="text-sm font-medium">Yucel Faruksahan</cite>
                    <span className="text-muted-foreground block text-sm">
                      Creator, Gmail
                    </span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>
          <Card className="card variant-mixed">
            <CardContent className="h-full pt-6">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p>
                  I love this app. This is one of the best personal assistant tools
                  that I have ever used!
                </p>

                <div className="grid grid-cols-[auto_1fr] gap-3">
                  <Avatar className="size-12">
                    <AvatarImage
                      src="/rodrigo.webp"
                      alt="Rodrigo Aguilar"
                      height="400"
                      width="400"
                      loading="lazy"
                    />
                    <AvatarFallback>YF</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Rodrigo Aguilar</p>
                    <span className="text-muted-foreground block text-sm">
                      Creator, The Parent Trap
                    </span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
