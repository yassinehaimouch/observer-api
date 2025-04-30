// ############ Infinite Scroll ############

import { fetchData } from "./utils/db.js";

const [template, list, observerElement] = document.querySelectorAll(
  "#template, #list, #bottom-observer"
);

const createCardElement = (title, content) => {
  const card = template.content.cloneNode(true).firstElementChild;
  const [cardTitle, cardContent] = card.querySelectorAll(
    "#card__title, #card__content"
  );
  cardTitle.textContent = title;
  cardContent.textContent = content;
  return card;
};

let page = 1;
const observer = new IntersectionObserver(
  async ([entry]) => {
    if (entry.isIntersecting) {
      const data = await fetchData(page++);
      const fragment = new DocumentFragment();
      for (let i = 0; i < data.length; i++) {
        if (data[i]) {
          const cardEl = createCardElement(data[i].title, data[i].content);
          fragment.appendChild(cardEl);
        }
      }
      list.appendChild(fragment);
    }
  },
  { threshold: 0.2 }
);

observer.observe(observerElement);
list.appendChild(list);
