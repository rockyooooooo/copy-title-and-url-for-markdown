chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id }, // This field is required.
    files: ['scripts/copyTitleAndUrl.js'] // Scripts to be injected to the page.
  })
})

