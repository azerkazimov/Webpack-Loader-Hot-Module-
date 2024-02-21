import './profile.scss'

export function render({ name, location }) {
  const nameElem = document.querySelector(".profile__name");
  const locationElem = document.querySelector(".profile__location");

  nameElem.textContent = name;
  locationElem.textContent = `from ${location}`;
}
