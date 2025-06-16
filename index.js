import { helpfulLinks, toolLinks, cosPortfolio } from './data.js';

export function links() {
    const ul = document.createElement('ul');
    helpfulLinks.forEach(link => {
        const li = document.createElement('li');
        li.innerHTML = `
                <h3><a href="${link.url}">${link.title}</a></h3>
                <p>${link.use}</p>
                <img src="${link.imageUrl}" alt="" />
                <p>${link.description}</p>
                <a class="button" href="${link.url}">Visit Link</a>
            `;
        ul.appendChild(li);
    });
    return ul;
}

export function cosplays() {
    console.log(cosPortfolio);
    const ul = document.createElement('ul');
    ul.classList.add('features');

    cosPortfolio.forEach(cos => {
        const li = document.createElement('li');
        li.innerHTML = `
                <h3>${cos.title}</h3>
                <p class="source">${cos.source}</p>
                <img src="${cos.imageUrl}" alt="" />
                <p class="genres">${cos.genres}</p>
                <p>${cos.description}</p>
<a class="button primary" href="${cos.buildbookUrl}">Build Book</a>
            `;
        ul.appendChild(li);
    });
    return ul;
}

export function tools() {
    const ul = document.createElement('ul');
    toolLinks.forEach(link => {
        const li = document.createElement('li');
        li.classList.add('tool-link');
        li.innerHTML = `
                <h3><a href="${link.url}">${link.title}</a></h3>
                <p>Use: ${link.use}</p>
                <img src="${link.imageUrl}" alt="" />
                <p>${link.description}</p>
                <a class="button" href="${link.url}">Visit Tool</a>
            `;
        ul.appendChild(li);
    });
    return ul;
}
