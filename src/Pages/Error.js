import { useRouteError, Link } from "react-router-dom";

export default function Error(){
    const error = useRouteError();
    const styles = {
        "font-size": "20px",
        "text-align": "center"
    }
    return (
        <div style={styles}>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <Link className="link-active" to="/">Home Page</Link>
        </div>
    )
}