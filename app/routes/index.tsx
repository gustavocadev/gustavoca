import { MetaFunction } from "remix"

export const meta: MetaFunction = () => {
  return {
    title: "Home ",
    description: "This is my website, I'm Gustavo, Welcome here!",
  }
}

export default function Index() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-7 xl:px-[76px] items-center gap-[40px]">
      <section className="flex flex-col items-center col-span-1 lg:col-span-4">
        <h1 className="text-[34px] lg:text-[68px]">@gustavocadev</h1>
        <article className="text-[22px]">
          <p>I’m a web developer learning the web funtamentals.</p>
          <p>I like learning something new everyday, always doing my best.</p>
          <p>
            I'm passionate about software and I use it to get up and push
            through everything.
          </p>
          <p>I really like helping people through software.</p>
        </article>
      </section>
      <figure className="flex flex-col items-center col-span-1 lg:col-span-3">
        <img src="/bclover.png" alt="" />
      </figure>
    </section>
  )
}
