import { MetaFunction } from "remix"
export const meta: MetaFunction = () => {
  return {
    title: "Blog",
    description:
      "This is my blog, this is the official site when eventally going to write articles",
  }
}
export default function Blog() {
  return (
    <section className="text-xl">
      <h1>Blog</h1>
      <p className="font-semibold">This section is still in development...</p>
    </section>
  )
}
