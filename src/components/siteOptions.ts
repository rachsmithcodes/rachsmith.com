const siteOptions = {
  darkMode: 'dark-mode',
  rainbows: 'rainbows',
  cursorTrails: 'cursor-trails',
};
const checkboxValues = {
  [siteOptions.darkMode]: false,
  [siteOptions.rainbows]: false,
  [siteOptions.cursorTrails]: false,
};

let trailsScriptsInjected = false;

function disableOption(option) {
  document.documentElement.classList.remove(option);
  if (option === siteOptions.darkMode)
    document.documentElement.style.colorScheme = 'light';
  window.localStorage.setItem(option, 'false');
}
function enableOption(option) {
  document.documentElement.classList.add(option);
  if (option === siteOptions.darkMode)
    document.documentElement.style.colorScheme = 'dark';
  window.localStorage.setItem(option, 'true');
  if (option === siteOptions.cursorTrails && !trailsScriptsInjected) {
    var pixiScript = document.createElement('script');
    pixiScript.onload = function () {
      const trailsScript = document.createElement('script');
      trailsScript.src = './assets/cursorTrails.js';
      document.head.appendChild(trailsScript);
      trailsScriptsInjected = true;
    };
    pixiScript.src =
      'https://cdnjs.cloudflare.com/ajax/libs/pixi.js/7.3.1/pixi.min.js';

    document.head.appendChild(pixiScript);
  }
}

for (const option of Object.values(siteOptions)) {
  const localStorageValue = window.localStorage.getItem(option);
  if (localStorageValue === 'true') {
    enableOption(option);
    checkboxValues[option] = true;
  } else if (localStorageValue === 'false') {
    disableOption(option);
    checkboxValues[option] = false;
  } else {
    // defaults
    switch (option) {
      case siteOptions.darkMode:
        if (
          window.matchMedia &&
          window.matchMedia('(prefers-color-scheme: dark)').matches
        ) {
          enableOption(option);
        } else {
          disableOption(option);
        }
        break;
      case siteOptions.rainbows:
        enableOption(option);
        checkboxValues[option] = true;
        break;
      case siteOptions.cursorTrails:
        // respect reduced motion
        if (
          window.matchMedia &&
          window.matchMedia('(prefers-reduced-motion: no-preference)').matches
        ) {
          enableOption(option);
          checkboxValues[option] = true;
        } else {
          disableOption(option);
        }
        break;
    }
  }
}

addEventListener('DOMContentLoaded', (event) => {
  for (const option of Object.values(siteOptions)) {
    const checkbox = document.getElementById(option) as HTMLInputElement;
    console.log(checkbox);
    if (checkbox) {
      checkbox.addEventListener('click', () => {
        if (checkbox.checked) {
          enableOption(option);
        } else {
          disableOption(option);
        }
      });
    }

    // Make sure the UI reflects the current state.
    if (checkboxValues[option]) {
      checkbox.checked = true;
    }
  }
});
