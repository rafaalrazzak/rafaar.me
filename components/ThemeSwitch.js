import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import { FaMoon, FaSun } from 'react-icons/fa'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  return (
    <motion.button
      className="flex h-11 w-11 items-center justify-center bg-transparent p-0 text-lg"
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.5 },
      }}
      aria-label="Toggle Dark Mode"
      type="button"
      onClick={() => setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      {mounted && (theme === 'dark' || resolvedTheme === 'dark') ? (
        <FaSun size={15} />
      ) : (
        <FaMoon size={15} />
      )}
    </motion.button>
  )
}

export default ThemeSwitch
