import logo from './logo.svg'
import './App.css'

function App() {
    const name = "Drilon"

    const handleNameChange = () => {
        const names = ["Dave", "Bob", "Earl", "Kevin"]
        const int = Math.floor(Math.random() * 4)

        return names[int]
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Hello {name}!
                </p>

                <p>Hello {handleNameChange()}!</p>
            </header>
        </div>
    )
}

export default App
