import { cosPortfolio, helpfulLinks, toolLinks } from "./data.js";
import {
  aboutData,
  certificatesData,
  projectsData,
  resumeData,
  skillsData,
} from "./workdata.js";

// Bilder mit vorhandenen AVIF-Versionen
const hasAvif = new Set([
  '/assets/img/card_img/Fearne_NF.jpg',
  '/assets/img/card_img/Frieren_NF.jpg',
  '/assets/img/card_img/Haru_NF.jpg',
  '/assets/img/card_img/Laudna_NF.jpg',
  '/assets/img/card_img/Marcille_NF.jpg',
  '/assets/img/card_img/Tohru_NF.jpg',
  '/assets/img/Fun_Pfp.jpg',
  '/assets/img/Nina_Pfp.jpg'
]);

export function links() {
  const ul = document.createElement("ul");
  ul.classList.add("infolinks");
  helpfulLinks.forEach((link) => {
    const li = document.createElement("li");
    const ext = link.imageUrl.match(/\.(jpg|jpeg|png|svg|avif)$/i)?.[1]?.toLowerCase();
    const isJpg = ext === 'jpg' || ext === 'jpeg';
    const shouldUseAvif = isJpg && hasAvif.has(link.imageUrl);
    const avifUrl = link.imageUrl.replace(/\.(jpg|jpeg)$/i, '.avif');
    li.innerHTML = `
        <a class="infocard link" href="${link.url}">
                <h3>${link.title}</h3>
                <p class="use">${link.use}</p>
                <picture>
                  ${shouldUseAvif ? `<source srcset="${avifUrl}" type="image/avif">` : ''}
                  <img src="${link.imageUrl}" alt="${link.title}" loading="lazy" />
                </picture>
                <p>${link.description}</p>
</a>            
`;
    ul.appendChild(li);
  });
  return ul;
}

export function cosplays() {
  console.log(cosPortfolio);
  const ul = document.createElement("ul");
  cosPortfolio.forEach((cos) => {
    const li = document.createElement("li");
    const avifUrl = cos.imageUrl.replace(/\.(jpg|jpeg|png)$/i, '.avif');
    const isDisabled = !cos.buildbookUrl || cos.buildbookUrl.trim() === '';
    li.innerHTML = `
      <div class="infocard costume">
          <h3>${cos.title}</h3>
          <p class="source">${cos.source}</p>
          <picture>
            <source srcset="${avifUrl}" type="image/avif">
            <img src="${cos.imageUrl}" alt="${cos.title} from ${cos.source}" loading="lazy" />
          </picture>
          <p class="genres">${cos.genres}</p>
          <p>${cos.description}</p>
          <a class="button primary" href="${cos.buildbookUrl || ''}" ${isDisabled ? 'aria-disabled="true"' : ''}>Build Book</a>
      </div>
        `;
    ul.appendChild(li);
  });
  return ul;
}

export function tools() {
  const ul = document.createElement("ul");
  ul.classList.add("infolinks");
  toolLinks.forEach((link) => {
    const li = document.createElement("li");
    const ext = link.imageUrl.match(/\.(jpg|jpeg|png|svg|avif)$/i)?.[1]?.toLowerCase();
    const isJpg = ext === 'jpg' || ext === 'jpeg';
    const shouldUseAvif = isJpg && hasAvif.has(link.imageUrl);
    const avifUrl = link.imageUrl.replace(/\.(jpg|jpeg)$/i, '.avif');
    li.innerHTML = `
        <a class="infocard link" href="${link.url}">
                <h3>${link.title}</h3>
                <p class="use">${link.use}</p>
                <picture>
                  ${shouldUseAvif ? `<source srcset="${avifUrl}" type="image/avif">` : ''}
                  <img src="${link.imageUrl}" alt="${link.title}" loading="lazy" />
                </picture>
                <p>${link.description}</p>
                </a>
            `;
    ul.appendChild(li);
  });
  return ul;
}

export function skills() {
  const div = document.createElement("div");
  skillsData.forEach((link) => {
    const innerDiv = document.createElement("div");
    innerDiv.classList.add("infocard");
    innerDiv.innerHTML = `<h3>${link.title}</h3>`;
    const ul = document.createElement("ul");
    innerDiv.classList.add(link.title.replace(/\s+/g, "-").toLowerCase());
    ul.innerHTML = `
                    ${link.skills
                      .map((skill) => {
                        if (typeof skill === "string") {
                          return `<li>${skill}</li>`;
                        }
                        return `<li>${skill.skill} - ${skill.level || skill.experience}</li>`;
                      })
                      .join("")}
            `;
    innerDiv.appendChild(ul);
    div.appendChild(innerDiv);
  });
  return div;
}

export function resume() {
  const ul = document.createElement("ul");
  [...resumeData].reverse().forEach((link) => {
    const li = document.createElement("li");
    li.innerHTML = `
                <h3>${link.title}</h3>
                <p>${link.institution}, ${link.start} - ${link.end || "Present"}</p>
                ${
                  typeof link.description === "string"
                    ? `<p>${link.description}</p>`
                    : `<ul>${link.description.map((item) => `<li>${item}</li>`).join("")}</ul>`
                }
                ${link.grade ? `<p>Grade: ${link.grade}</p>` : ""}
            `;
    ul.appendChild(li);
  });
  return ul;
}

export function projects() {
  const ul = document.createElement("ul");
  projectsData.forEach((link) => {
    const li = document.createElement("li");
    li.innerHTML = `
                <h3><a href="${link.url}">${link.title}</a></h3>
                <p>${link.role}</p>
                <p>${link.description}</p>
            `;
    ul.appendChild(li);
  });
  return ul;
}

export function certificates() {
  const ul = document.createElement("ul");
  certificatesData.forEach((link) => {
    const li = document.createElement("li");
    li.innerHTML = `
        <a href="${link.link}">
                <h3>${link.title}</h3>
                <img src="/assets/img/institution_logos/${link.institution.toLowerCase()}.jpg" alt="${link.institution} logo" width="64" height="64" />
                <p>${link.institution}</p>
                <p>Issued: ${link.issued}</p>
                </a>
            `;

    ul.appendChild(li);
  });
  return ul;
}

export function about() {
  const ul = document.createElement("ul");
  ul.innerHTML = `
                ${aboutData.content.map((item) => `<li>${item}</li>`).join("")}
            `;
  return ul;
}
