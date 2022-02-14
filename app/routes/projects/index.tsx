import { MetaFunction } from "remix";
export const meta: MetaFunction = () => {
    return {
        title: "Projects",
        description: "Here I'm going to show you some of my projects",
    };
};
export default function Projects() {
    return (
        <section className="text-xl">
            <h1>Projects</h1>
            <p className="font-semibold">
                This section is still in development...
            </p>
        </section>
    );
}
