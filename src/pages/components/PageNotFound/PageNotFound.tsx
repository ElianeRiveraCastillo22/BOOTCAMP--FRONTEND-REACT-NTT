import "./PageNotFound.css";
export function PageNotFound() {

    return (
        <section className="error-page">
            <h1 className="error-page__code">404</h1>
            <h2 className="error-page__title">Oops! Page Not Found</h2>
            <p className="error-page__description">
                Sorry, the page you're looking for doesn't exist or has been
                moved.
            </p>
        </section>
    );
}
