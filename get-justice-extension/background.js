chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.captureVisibleTab({format: "png"}, function (dataUrl) {
        chrome.tabs.create({ url: "http://127.0.0.1:8000/create-report/"}, function (tab) {
            chrome.tabs.executeScript(tab.id, {
                code:`
                    let input = document.getElementById("new-screenshot")
                    input.src = '${dataUrl}'
                    let submit = document.getElementById("sumbit-screenshot")
                    submit.submit()
                `
                // need to add post request
            })
        })
    })
})
