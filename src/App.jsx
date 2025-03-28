import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';


function Greet(){
    return (
        <>
            <SayHello/>
            <SayHi/>
        </>
    )
}

function App() {
    return (
        <div>
            {/*<Header />
            <About />
            <Projects />
            <Contact />
            <Footer />*/}
            <div>
                <Header />
                <div id="about">
                    <About />
                </div>
                <div id="projects">
                    <Projects />
                </div>
                <div id="contact">
                    <Contact />
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default App;