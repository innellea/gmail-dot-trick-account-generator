let counterLabel = document.getElementById('counter');
let count = 0;
let username = document.getElementById('username').value;
function* generate(e) {
  if (e.length <= 1) yield e;
  else {
    let t = e[0];
    let n = e.slice(1);
    for (let e of generate(n)) yield t + e, yield t + '.' + e;
  }
}
function updateEmails(e) {
  (document.getElementById('emails').value = ''), (count = 0);
  let t = new Date();
  for (let t of generate(e))
    (document.getElementById('emails').value += t + '@gmail.com\r\n'),
      (count += 1),
      (counterLabel.innerText = 'Generated: ' + count);
  document.getElementById('emails').value = document
    .getElementById('emails')
    .value.slice(0, -1);
  new Date();
}
(document.getElementById('generate').onclick = () => {
  let e = document.getElementById('username').value;
  let t = document.getElementById('username').value;
  /@gmail\.com$/.test(t)
    ? username !== e &&
      ((username = e.split('@gmail.com')[0].replace(/[^a-zA-Z0-9]/g, '')),
      console.log(username),
      username.length > 1 && setTimeout(updateEmails(username), 150))
    : alert('Please enter a valid Email Address');
}),
  (document.getElementById('save').onclick = () => {
    (blob = new Blob([document.getElementById('emails').value], {
      type: 'text/plain;charset=utf-8',
      endings: 'transparent',
    })),
      FileSaver.saveAs(
        blob,
        document.getElementById('username').value + '.txt'
      );
  });
