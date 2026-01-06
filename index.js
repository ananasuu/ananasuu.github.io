import { helpfulLinks, toolLinks, cosPortfolio } from './data.js';
import { aboutData, resumeData, skillsData, certificatesData, projectsData } from './workdata.js';

export function links() {
    const ul = document.createElement('ul');
    ul.classList.add('infolinks');
    helpfulLinks.forEach(link => {
        const li = document.createElement('li');
        li.classList.add('infocard')
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
        li.classList.add('infocard')
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
        li.classList.add('infocard')
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




export function skills() {
    const div = document.createElement('div');
    skillsData.forEach(link => {
        const innerDiv = document.createElement('div');
        innerDiv.classList.add('infocard');
        innerDiv.innerHTML = `<h3>${link.title}</h3>`;
        const ul = document.createElement('ul');
        innerDiv.classList.add(link.title.replace(/\s+/g, '-').toLowerCase());
        ul.innerHTML = `
                    ${link.skills.map(skill => {
                        if (typeof skill === 'string') {
                            return `<li>${skill}</li>`;
                        } else {
                            return `<li>${skill.skill} - ${skill.level || skill.experience}</li>`;
                        }
                    }).join('')}
            `;
        innerDiv.appendChild(ul);
        div.appendChild(innerDiv);
    });
    return div;
}

export function resume() {
    const ul = document.createElement('ul');
    resumeData.forEach(link => {
        const li = document.createElement('li');
        li.classList.add('tool-link');
        li.innerHTML = `
                <h3>${link.title}</h3>
                <p>${link.institution}, ${link.start} - ${link.end || 'Present'}</p>
                ${typeof link.description === 'string' 
                    ? `<p>${link.description}</p>` 
                    : `<ul>${link.description.map(item => `<li>${item}</li>`).join('')}</ul>`}
                ${link.grade ? `<p>Grade: ${link.grade}</p>` : ''}
            `;
        ul.appendChild(li);
    });
    return ul;
}

export function projects() {
    const ul = document.createElement('ul');
    projectsData.forEach(link => {
        const li = document.createElement('li');
        li.classList.add('tool-link');
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
    const ul = document.createElement('ul');
    certificatesData.forEach(link => {
        const li = document.createElement('li');
        li.classList.add('tool-link');
        li.innerHTML = `
                <h3>${link.title}</h3>
                <img src="/assets/img/institution_logos/${link.institution.toLowerCase()}.jpg" alt="" />
                <p>${link.institution}</p>
                <p>Issued: ${link.issued}</p>
                <a href="${link.link}">View Certificate</a>
            `;

        ul.appendChild(li);
    });
    return ul;
}

export function about() {
    const div = document.createElement('div');
    aboutData.forEach(link => {
        const innerDiv = document.createElement('div');
        innerDiv.classList.add('infocard');
        innerDiv.innerHTML = `
                <h3>${link.title}</h3>
                ${Array.isArray(link.content) 
                    ? `<ul>${link.content.map(item => `<li>${item}</li>`).join('')}</ul>` 
                    : `<p>${link.content}</p>`}
            `;
        div.appendChild(innerDiv);
    });
    return div;
}
