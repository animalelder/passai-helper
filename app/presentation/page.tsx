import { type JSX } from "react";

export default function Page(): JSX.Element {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <iframe
        className="flex-1 h-auto aspect-auto basis-full"
        src="https://embed.figma.com/slides/XgCc4LPTD85WIwZco9nMpY/PASS.ai-Demo-Day-Deck?node-id=1-26&embed-host=share"
        allowFullScreen={true}
      />
    </div>
  );
}
