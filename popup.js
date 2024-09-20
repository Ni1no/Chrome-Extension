window.onload=()=>{
    const $startButton=document.querySelector("button");

    $startButton.onclick=()=>{
        getExchangeRate();
        //gets active tab
        chrome.tabs.query({
            active: true, 
            currentWindow: true,
        }, (tabs)=>{
            chrome.tabs.sendMessage(
                tabs[0].id,
                {injectApp: true},
                
            );
        });
    };
}