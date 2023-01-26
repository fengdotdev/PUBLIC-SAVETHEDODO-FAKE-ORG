export default function JoinForm ()
{

    return (
        <>
            <h1>join form</h1>

            <div className="p-3 flex flex-col text-light bg-dark">
                <form action="/api/form" method="post">
                    <label htmlFor="first">First name:</label>
                    <input type="text" id="first" name="first" />
                    <label htmlFor="last">Last name:</label>
                    <input type="text" id="last" name="last" />
                    <button type="submit">Submit</button>
                </form>
            </div>

        </>
    );
}