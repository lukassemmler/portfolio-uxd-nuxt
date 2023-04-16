export function setupFullscreen(document) {
  document.fullscreenElement = document.fullscreenElement || document.mozFullscreenElement
    || document.msFullscreenElement || document.webkitFullscreenDocument;
  document.exitFullscreen = document.exitFullscreen || document.mozExitFullscreen
    || document.msExitFullscreen || document.webkitExitFullscreen;
}

let fullscreenManager = (function () {
  function setupFullscreenFunctionality() {
    // Attach fullscreen functionality to document object 
    document.fullscreenElement = document.fullscreenElement || document.mozFullscreenElement
      || document.msFullscreenElement || document.webkitFullscreenDocument;
    document.exitFullscreen = document.exitFullscreen || document.mozExitFullscreen
      || document.msExitFullscreen || document.webkitExitFullscreen;
    // Setup fullscreen targets 
    attachFullscreenTogglers();
  }

  function getFullscreenTargetByTogglers() {
    let targets = document.querySelectorAll('[data-fullscreen-id]');
    let togglers = document.querySelectorAll('[data-fullscreen-for]');
    // Match fullscreen toggler and target in a map 
    let targetByTogglers = new Map();
    for (let i = 0; i < togglers.length; i++) {
      let toggler = togglers[i];
      let hasMatched = false;
      for (let j = 0; j < targets.length; j++) {
        let target = targets[j];
        if (toggler.dataset.fullscreenFor !== target.dataset.fullscreenId)
          continue;
        if (!hasMatched) {
          targetByTogglers.set(toggler, target);
          hasMatched = true;
          continue;
        }
        // Check togglers that have more than one target 
        console.warn(`Fullscreen: The toggler with id '${toggler.dataset.fullscreenFor}' has multiple targets, but should only have one. `);
      }
    }
    // Check togglers that have no targets 
    let pairedTogglers = Array.from(targetByTogglers.keys());
    let potentialSoloTogglers = Array.from(togglers);
    let soloTogglers = potentialSoloTogglers.filter(key => !pairedTogglers.includes(key));
    if (soloTogglers.length > 0)
      for (let i = 0; i < soloTogglers.length; i++) {
        let toggler = soloTogglers[i];
        console.warn(`Fullscreen: The toggler with id '${toggler.dataset.fullscreenFor}' has no paired fullscreen target. `);
      }
    // Return map 
    return targetByTogglers;
  }

  function attachFullscreenTogglers() {
    let targetByTogglers = getFullscreenTargetByTogglers();
    if (targetByTogglers.size === 0)
      return;
    let togglers = Array.from(targetByTogglers.keys());
    for (let i = 0; i < togglers.length; i++) {
      let toggler = togglers[i];
      let target = targetByTogglers.get(toggler);
      toggler.addEventListener("click", toggleFullscreen.bind(event, target));
    }
  }

  function toggleFullscreen(elem) {
    elem.requestFullscreen = elem.requestFullscreen || elem.mozRequestFullscreen || elem.msRequestFullscreen || elem.webkitRequestFullscreen;
    if (!document.fullscreenElement) {
      elem.requestFullscreen().then({}).catch(err => {
        alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  return {
    setup: setupFullscreenFunctionality
  }
})();