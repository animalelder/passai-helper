export default function Page() {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,#000000aa_0px_1px,transparent_1px_8px)]" />
      <div className="absolute inset-0 bg-linear-[225deg,_rgba(3,70,90,0.78)_17%,_rgba(204,161,51,0.7)_36%,_rgba(248,250,252,1)_68%,_rgba(196,204,51,0.61)_90%]" />
      <section className="absolute inset-0 bg-white/15 p-4 backdrop-blur-[1px]">
        <h1 className="font-heading text-4xl font-bold text-[#233237]">Settings</h1>
      </section>
    </div>
  );
}
