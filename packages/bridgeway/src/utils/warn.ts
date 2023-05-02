export default function warn(message: string): void {
  const isProd = process.env.NODE_ENV === 'production'
  const hasConsole = typeof console !== 'undefined'
  if (hasConsole && !isProd) {
    console.warn(`[Warn]: ${message}`)
  }
}
