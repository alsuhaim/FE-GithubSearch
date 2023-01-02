import "./App.css";

function App() {
    return (
        <>
            <header className="header">
                <div className="container">
                    <a href="/" className="header__home">
                        <svg
                            className="header__logo"
                            width="126"
                            height="21"
                            aria-hidden="true"
                            focusable="false"
                        >
                            <use href="/svg/sprite.svg#logo"></use>
                        </svg>
                    </a>
                </div>
            </header>
            <main id="main" className="app">
                <div className="container">
                    <form className="search-form" autoComplete="on">
                        <input
                            type="text"
                            name="username"
                            id="username-input"
                            className="search-form__input"
                            placeholder=" "
                            required=""
                            autoComplete="username"
                            inputMode="search"
                            aria-labelledby="username-input-label"
                            aria-describedby="error"
                        />
                        <label
                            htmlFor="username-input"
                            className="search-form__placeholder"
                            aria-hidden="true"
                        >
                            Search GitHub username...
                        </label>
                        <button className="search-form__button" type="submit">
                            Search
                        </button>
                    </form>
                    <div>
                        <img
                            src="/images/octocat.jpg"
                            alt="@octocat"
                            width="120"
                            height="120"
                        />
                        <div>
                            <div>
                                <h2 className="result__name">The Octocat</h2>
                                <a
                                    href="https://github.com/octocat"
                                    className="result__username"
                                    rel="nofollow me"
                                >
                                    @octocat
                                </a>
                            </div>
                            <p>
                                Joined{" "}
                                <time dateTime="2011-01-25T18:44:36Z">
                                    25 Jan 2011
                                </time>
                            </p>
                        </div>
                        <p>This profile has no bio</p>
                        <ul>
                            <li>
                                <span>Repos</span>
                                <span>8</span>
                            </li>
                            <li>
                                <span>Followers</span>
                                <span>3938</span>
                            </li>
                            <li>
                                <span>Following</span>
                                <span>9</span>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <svg
                                    className="result__icon"
                                    width="14"
                                    height="20"
                                    aria-hidden="true"
                                    focusable="false"
                                >
                                    <use href="./svg/sprite.svg#location"></use>
                                </svg>
                                <span>San Francisco</span>
                            </li>
                            <li>
                                <svg
                                    className="result__icon"
                                    width="20"
                                    height="20"
                                    aria-hidden="true"
                                    focusable="false"
                                >
                                    <use href="./svg/sprite.svg#link"></use>
                                </svg>
                                <span>
                                    <a
                                        href="https://github.blog"
                                        className="result__link"
                                        rel="nofollow me"
                                    >
                                        https://github.blog
                                    </a>
                                </span>
                            </li>
                            <li>
                                <svg
                                    className="result__icon"
                                    width="20"
                                    height="18"
                                    aria-hidden="true"
                                    focusable="false"
                                >
                                    <use href="./svg/sprite.svg#twitter"></use>
                                </svg>
                                <span>
                                    <span className="result__link">
                                        Not Available
                                    </span>
                                </span>
                            </li>
                            <li>
                                <svg
                                    className="result__icon"
                                    width="20"
                                    height="20"
                                    aria-hidden="true"
                                    focusable="false"
                                >
                                    <use href="./svg/sprite.svg#office"></use>
                                </svg>
                                <span>
                                    <a
                                        href="https://github.com/github"
                                        className="result__link"
                                        rel="nofollow me"
                                    >
                                        @github
                                    </a>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
        </>
    );
}

export default App;
