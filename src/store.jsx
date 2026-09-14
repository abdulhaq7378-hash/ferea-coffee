import { createContext, useCallback, useContext, useMemo, useRef, useState } from 'react'

const StoreContext = createContext(null)

export const formatINR = (n) => `₹${n.toLocaleString('en-IN')}`

/**
 * Lightweight app state: demo order bag, which overlay is open, and toasts.
 * No backend — orders are simulated in the browser.
 */
export function StoreProvider({ children }) {
  const [cart, setCart] = useState([])
  const [overlay, setOverlay] = useState(null) // { type: 'order' | 'menu' | 'article' | 'journal', payload }
  const [toast, setToast] = useState(null)
  const toastTimer = useRef()

  const notify = useCallback((message) => {
    clearTimeout(toastTimer.current)
    setToast({ message, key: Date.now() })
    toastTimer.current = setTimeout(() => setToast(null), 3200)
  }, [])

  const addItem = useCallback((item, { open = true } = {}) => {
    setCart((prev) => {
      const found = prev.find((l) => l.id === item.id)
      if (found) return prev.map((l) => (l.id === item.id ? { ...l, qty: l.qty + 1 } : l))
      return [...prev, { id: item.id, name: item.name, price: item.price, photo: item.photo, qty: 1 }]
    })
    if (open) setOverlay({ type: 'order' })
  }, [])

  const setQty = useCallback((id, qty) => {
    setCart((prev) => (qty <= 0 ? prev.filter((l) => l.id !== id) : prev.map((l) => (l.id === id ? { ...l, qty } : l))))
  }, [])

  const value = useMemo(
    () => ({
      cart,
      count: cart.reduce((s, l) => s + l.qty, 0),
      total: cart.reduce((s, l) => s + l.qty * l.price, 0),
      addItem,
      setQty,
      clearCart: () => setCart([]),
      overlay,
      open: (type, payload) => setOverlay({ type, payload }),
      close: () => setOverlay(null),
      toast,
      notify,
    }),
    [cart, overlay, toast, addItem, setQty, notify],
  )

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export const useStore = () => useContext(StoreContext)
