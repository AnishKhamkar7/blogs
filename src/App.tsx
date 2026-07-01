import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'

type Theme = 'light' | 'dark'

function getPreferredTheme(): Theme {
  if (typeof window === 'undefined') {
    return 'light'
  }

  const savedTheme = window.localStorage.getItem('theme')
  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function App() {
  const [theme, setTheme] = useState<Theme>(getPreferredTheme)

  useEffect(() => {
    window.localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div
      className={`min-h-screen ${
        theme === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      <Navbar theme={theme} onToggleTheme={() => setTheme(theme === 'light' ? 'dark' : 'light')} />

      <main className="mx-auto max-w-4xl px-5 py-12">
        <h1 className="text-2xl font-semibold tracking-tight">Personal documentation</h1>
        <p
          className={`mt-3 max-w-2xl text-sm leading-6 ${
            theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
          }`}
        >
          Notes, solved problems, blog drafts, and book thoughts will live here.
        </p>
      </main>
    </div>
  )
}

export default App
