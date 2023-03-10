// # of tests to print
const N = 4;


// Remove non-test elements
for (const p of document.querySelectorAll("p:has(a)")) {
  p.remove()
}
let h2s = document.querySelectorAll("h2:has(span)");
for (const h2 of [...h2s].slice(0,15)) {
  h2.insertAdjacentHTML("beforebegin", `<div style="break-after:page"></div>`);
}
try {
  while (true) {
    h2s[h2s.length-1].nextSibling.remove();
  }
} catch (e) {}
h2s[h2s.length-1].remove();

try {
  while (true) {
    h2s[0].previousSibling.remove();
  }
} catch (e) {}


// Annotate each test copy
let body = document.querySelector(".mw-body");
const problemHTML = body.innerHTML;
time(body, 1);

for(let ix = 1; ix<N; ix++) {
  body.insertAdjacentHTML("afterend", `
<div style="break-after:page"></div>
<div class="mw-body foo-${ix}">
${problemHTML}
</div>`);
  body = document.querySelector(`.foo-${ix}`);
  time(body, ix+1);
}

function time(body, t){
  const h2s = body.querySelectorAll("h2:has(span)");
  for (const h2 of h2s) {
    var parent = h2.parentNode;
    var wrapper = document.createElement('div');

    parent.replaceChild(wrapper, h2);
    wrapper.appendChild(h2);
    
    wrapper.innerHTML += `(time: ${t})`;
    wrapper.style = "display: flex; justify-content: space-between;"
  }
}


window.print()