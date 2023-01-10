import Hero from "./components/hero/page";

export default function Page ()
{
    return (
        <>
            <section>
                <Hero />
            </section>
            <article className="p-1 m-4">
                <h1 className="text-3xl">
                    Suspendisse ut lacinia massa, ac porta diam.
                </h1>
                <br />
                <p className="text-justify">
                    orem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis risus, ornare ac quam eget, pharetra tempus ante. Aliquam eros orci, maximus lobortis mattis sit amet, vehicula ut magna. Aenean lorem neque, hendrerit sit amet pretium eget, porttitor ac erat. Nunc quis rhoncus orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur facilisis consectetur tortor, quis dignissim leo luctus at. In neque tellus, gravida id erat eget, malesuada tempor felis. Cras non dolor mattis, pretium nisl quis, interdum lacus. In enim arcu, congue sit amet finibus quis, ullamcorper nec metus. Vestibulum in lacus vestibulum, suscipit sem eget, volutpat urna. Duis placerat diam sed lectus ullamcorper vestibulum ac tincidunt turpis. Sed elit est, maximus in luctus ac, dignissim quis ligula. Curabitur placerat non diam tincidunt feugiat. Vivamus pretium at libero sit amet tristique. Quisque vehicula, elit vel dictum sagittis, justo massa laoreet lectus, et fermentum tellus leo ut ante.
                </p>
            </article>
        </>


    );
}