/* const el1=(<div>
    <img src="./react-logo.png" width="40px"></img>
    <h1>Fun facts about React</h1>
    <ul>
    <li>Was first released in 2013</li>
    <li>Was originally created by Jordan Walke</li>
    <li>Has well over 100K starts in Github</li>
    <li>Is Maintained by facebook</li>
    <li>Powers many apps mobile and web apps</li>
    </ul>
    </div>
    )
/* function Page1(){
    return (
    <>
    <img src="./react-logo.png" width="40px"></img>
    <h1>Fun facts about React</h1>
    <ul>
    <li>Was first released in 2013</li>
    <li>Was originally created by Jordan Walke</li>
    <li>Has well over 100K starts in Github</li>
    <li>Is Maintained by facebook</li>
    <li>Powers many apps mobile and web apps</li>
    </ul>
    </>
     )
    } 
ReactDOM.createRoot(document.getElementById("root")).render(el1) */
function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}
function Footer() {
    return (
        <footer>
            <small>© 2023 Astarte development. All rights reserved.</small>
        </footer>
    )
}
function MainContent() {
    return (
        <div>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol>
        </div>
    )
}
function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<Page/>)
