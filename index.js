const helpfulLinks = [
    {
        title: "Tutorial - Sewing a Corset",
        url: "https://www.youtube.com/watch?v=alQGJQzRRFo&ab_channel=SarahSpaceman",
        description: "Easily pattern and sew a corset.",
        imageUrl: "http://img.youtube.com/vi/alQGJQzRRFo/hqdefault.jpg"
    }
];

const toolLinks = [
    {
        title: "Nifegun",
        use: "Scaling Tool",
        url: "https://nifegun.com/scale_tool/scale_tool.html",
        description: "Ever wondered how to actually have the right scale for your props? Use this!",
        imageUrl: "https://nifegun.com/scale_tool/images/atlas_gauntlet.png"
    }
];

const cosPortfolio = [
    {
        title: "Marcille Donato - Delicious in Dungeon",
        imageUrl: "assets/img/card_img/Marcille_Donato_NF.jpg",
        genres: "Silly, Powerful & Hungry!",
        description: "Marcille Donato is a character from Delicious in Dungeon, a manga about adventurers cooking and eating monsters. I made this cosplay for the 2025 S.a.m.t Con cosplay contest and placed 1st.",
        buildbookUrl: "https://drive.google.com/file/d/1fD7-P-gT0MA40vvP3u0L8dax4ZUXiO20/view?usp=drive_link"
    },
    {
        title: "Laudna - Critical Role",
        imageUrl: "assets/img/card_img/Laudna_NF.jpg",
        genres: "Dark, spooky & fun!",
        description: "Laudna is a character from Critical Role, a D&D show. I made this cosplay for the 2024 Dokomi cosplay contest and placed 3rd.",
        buildbookUrl: "https://drive.google.com/file/d/1p_WrvoevjBnTGTBLTPl9-cajugDPxGX6/view?usp=drive_link"
    }
]


export function links() {
    const ul = document.createElement('ul');
    helpfulLinks.forEach(link => {
        const li = document.createElement('li');
        li.innerHTML = `
                <a href="${link.url}">${link.title}</a>
                <span><img src="${link.imageUrl}" alt="${link.title}" /></span>
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
                <img src="${cos.imageUrl}" alt="${cos.title}" />
                <p>${cos.genres}</p>
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
                <span><img src="${link.imageUrl}" alt="${link.title}" /></span>
                <p>${link.description}</p>
                <a class="button" href="${link.url}">Visit Tool</a>
            `;
        ul.appendChild(li);
    });
    return ul;
}
