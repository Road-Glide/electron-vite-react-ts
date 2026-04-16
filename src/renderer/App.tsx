import { useState, type MouseEvent } from 'react'
import reactLogo from '/logo/react.svg'
import viteLogo from '/logo/electron-vite.animate.svg'
import '../styles/App.css'

function handleAppContentClick(e: MouseEvent<HTMLDivElement>) {
	const anchor = (e.target as HTMLElement).closest('a[href]')
	if (!anchor) return
	const href = anchor.getAttribute('href')
	if (!href?.startsWith('http://') && !href?.startsWith('https://')) return
	e.preventDefault()
	void window.electronAPI.openExternal(href)
}

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<div onClick={handleAppContentClick}>
				<a href="https://electron-vite.github.io" target="_blank" rel="noreferrer">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank" rel="noreferrer">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount(count => count + 1)}>count is {count}</button>
				<p>
					Edit <code>src/renderer/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">Click on the Vite and React logos to learn more</p>
		</>
	)
}

export default App
