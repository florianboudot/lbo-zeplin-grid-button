
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
    const container = document.getElementsByClassName('snapshotDetail')[0];
    const sidebar = document.getElementsByClassName('headerRight')[0];
    
    let toggleContainer = document.createElement("div")
    sidebar.appendChild(toggleContainer); 
    toggleContainer.innerText="LBO grid 👋";

    toggleContainer.classList.add("lbo-grid-button");
    container.classList.add("lbo-grid-common");

    toggleContainer.addEventListener("click", function() {
      console.log(container.offsetWidth)
        if(container.offsetWidth === 1086) {
          container.classList.toggle('lbo-grid-desktop');
        } else if (container.offsetWidth === 768) {
          container.classList.toggle('lbo-grid-tablet');
        } else if (container.offsetWidth === 320) {
          container.classList.toggle('lbo-grid-mobile');
        }
    }, false);
    
},500,9000);

    

   



