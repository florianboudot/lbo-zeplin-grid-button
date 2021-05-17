
function waitForElementToDisplay(selector, callback, checkFrequencyInMs, timeoutInMs) {
  var startTimeInMs = Date.now();
  (function loopSearch() {
    if (document.querySelector(selector) != null) {
      callback();
      return;
    }
    else {
      setTimeout(function () {
        if (timeoutInMs && Date.now() - startTimeInMs > timeoutInMs)
          return;
        loopSearch();
      }, checkFrequencyInMs);
    }
  })();
}




waitForElementToDisplay(".tabContent",function(){
    const container = document.getElementsByClassName('snapshotDetail');
    const sidebar = document.getElementsByClassName('headerRight');
    
    let toggleContainer = document.createElement("div")
    sidebar[0].appendChild(toggleContainer); 
    toggleContainer.innerText="LBO grid 👋";

    toggleContainer.classList.add("lbo-grid-button");
    container[0].classList.add("lbo-grid");

    toggleContainer.addEventListener("click", function() {
        container[0].classList.toggle('lbo-grid');
    }, false);
    
},500,9000);

    

   



