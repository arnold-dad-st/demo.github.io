function createInfoList(info) {
  const ul = document.createElement('ul');

  for (const [key, value] of Object.entries(info)) {
    console.log(`${key}: ${value}`);

    const li = document.createElement("li");
    li.innerText = `${key}: ${value}`

    ul.appendChild(li);
  }

  document.body.appendChild(ul)
}

createInfoList({
  language: navigator.language,
  name: navigator.userAgent
});

