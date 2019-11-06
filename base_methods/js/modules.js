export function addElement(element) {
  const div = document.createElement('div');
  div.textContent = element;
  document.body.appendChild(div);
}

export function speak() {
  console.log(this);
}