{
// # of tests to print
const N = 4;
const S = 15;
const rounds = {
  1: [1, 6, 15],
  2: [2, 7, 14],
  3: [3, 8, 13],
  4: [4, 9, 12],
  5: [5, 10, 11],
}


// Remove non-test elements
for (const p of document.querySelectorAll("p:has(a)")) {
  p.remove()
}
let h2s = document.querySelectorAll("h2:has(span)");
try {
  while (true) {
    h2s[S].nextSibling.remove();
  }
} catch (e) {}
h2s[S].remove();

try {
  while (true) {
    h2s[0].previousSibling.remove();
  }
} catch (e) {}


// Annotate test copies
const pageBreak = `<div style="break-after:page"></div>`;
const prbFromH2 = (h2, setTime=true, prev=1) => {
  const time = (N, ix, prev) => (setTime && `(p${prev} time: ${N-ix})` || '');
  return [...Array(N).keys()].map(ix => `
<div style="display: flex; justify-content: space-between;">${h2.outerHTML}${time(N, ix, prev)}</div>
${h2.nextElementSibling.outerHTML}
`).join(pageBreak);
}


// Set question order
h2s = document.querySelectorAll("h2:has(span)");
const prbs = new Map([...h2s].map((h2, ix) => [ix+1, h2]));
const ordered = Object.entries(rounds).map(x => {
  return x[1].map((n, ix) => prbFromH2(prbs.get(n), ix, x[1][ix-1]))
              .join(pageBreak);
});
let body = document.querySelector(".mw-body");
body.innerHTML = ordered.join(pageBreak);


window.print()
}
