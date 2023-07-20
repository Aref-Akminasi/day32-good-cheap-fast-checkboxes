const toggles = document.querySelectorAll('.toggle');
const good = document.querySelector('#good');
const cheap = document.querySelector('#cheap');
const fast = document.querySelector('#fast');

toggles.forEach((toggle) =>
  toggle.addEventListener('change', (e) => doTheTrick(e.target))
);

//Toggle the checks so only 2 are checked
function doTheTrick(theClickedOne) {
  if (good.checked && cheap.checked && fast.checked) {
    if (good === theClickedOne) {
      fast.checked = false;
    }
    if (cheap === theClickedOne) {
      good.checked = false;
    }
    if (fast === theClickedOne) {
      cheap.checked = false;
    }
  }
}
