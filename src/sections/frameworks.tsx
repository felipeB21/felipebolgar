import { InfiniteSlider } from "@/components/ui/infinite-slider";

export function Frameworks() {
  return (
    <InfiniteSlider speedOnHover={20} gap={24}>
      <img
        src="https://icon.icepanel.io/Technology/png-shadow-512/Next.js.png"
        alt="NextJS"
        className="aspect-square w-[80px] rounded-[4px] dark:invert"
      />
      <img
        src="https://astro.build/assets/press/astro-icon-dark.svg"
        alt="AstroJS"
        className="aspect-square w-[80px] rounded-[4px] dark:invert"
      />
      <img
        src="https://docs.nestjs.com/assets/logo-small-gradient.svg"
        alt="NestJS"
        className="aspect-square w-[80px] rounded-[4px]"
      />
      <img
        src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
        alt="React"
        className="aspect-square w-[80px] rounded-[4px]"
      />
      <img
        src="https://v7.angular.cn/assets/images/logos/angular/angular.svg"
        alt="Angular"
        className="aspect-square w-[80px] rounded-[4px]"
      />
      <img
        src="https://nodejs.org/static/logos/jsIconGreen.svg"
        alt="NodeJS"
        className="aspect-square w-[80px] rounded-[4px]"
      />
    </InfiniteSlider>
  );
}
