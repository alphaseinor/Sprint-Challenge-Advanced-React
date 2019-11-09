import {useEffect} from 'react'
import {useLocalStorage} from './useLocalStorage'

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage('false')

  useEffect(() => {
    const articles = document.querySelectorAll('article')
    if(darkMode === true){
      document.body.classList.add("dark-mode")
      articles.forEach(a => a.classList.add("dark-mode"))
    }else{
      document.body.classList.remove("dark-mode")
      articles.forEach(a => a.classList.remove("dark-mode"))
    }
  }, [darkMode])

  return [darkMode, setDarkMode]
}