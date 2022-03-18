const msTms = (ms) => {
  let m = Math.floor(ms.time / 60000)
  let s = ((ms.time % 60000) / 1000).toFixed(0)
  return `${m}:${s < 10 ? '0' : ''}${s}`
}

export default msTms
