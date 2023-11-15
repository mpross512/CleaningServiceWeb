import { Link } from "react-router-dom";

function Error() {
    return (
        <>
            <head>404 Page Not Found</head>
            <body>
                <h1>404 Page not found</h1>
                <p>Please go back or go to the <Link to={''}>home page</Link>.</p>
            </body>
        </>
    )
}

export default Error;