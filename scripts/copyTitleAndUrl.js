// const writeText = () => {
//   const title = document.title
//   const url = document.URL
//   const text = `[${title}](${url})`
//
//   new Promise((resolve, reject) => {
//     // Create hidden input with text
//     const el = document.createElement('textarea')
//     el.value = text
//     document.body.append(el)
//
//     // Select the text and copy to clipboard
//     el.select()
//     const success = document.execCommand('copy')
//     el.remove()
//
//     if (!success) reject(new Error('Unable to write to clipboard'))
//
//     resolve(text)
//   })
// }

// writeText(text).then(rlt => {
//   console.log('Copied content:')
//   console.log(rlt)
// })

(async function run() {
  let text
  try {
    const title = document.title
    const url = document.URL
    text = `[${title}](${url})`
  } catch (err) {
    console.log('Unable to get title or url.')
    console.log(err)
  }

  if (!text) return

  try {
    await navigator.clipboard.writeText(text)
    console.log('Copied content:')
    console.log(text)
  } catch (err) {
    console.log('Unable to write to clipboard.')
    console.log(err)
  }
})()

