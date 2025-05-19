const bbLinks = [
            {
                title: "Laudna - Critical Role",
                url: "https://drive.google.com/file/d/1p_WrvoevjBnTGTBLTPl9-cajugDPxGX6/view?usp=drive_link",
                description: "Build book for Laudna from Critical Role, competed and placed 3rd at 2024 Dokomi.",
                imageUrl: "assets/img/card_img/Laudna_NF.jpg"
            },
            {
                title: "Marcille Donato - Delicious in Dungeon",
                url: "https://drive.google.com/file/d/1fD7-P-gT0MA40vvP3u0L8dax4ZUXiO20/view?usp=drive_link",
                description: "Build book for Marcille Donato from Delicious in Dungeon, competed and placed 1st at 2025 S.a.m.t Con.",
                imageUrl: ""
            }
        ];

const helpfulLinks = [
            {
                title: "Tutorial - Sewing a Corset",
                url: "https://www.youtube.com/watch?v=alQGJQzRRFo&ab_channel=SarahSpaceman",
                description: "Easily pattern and sew a corset.",
                imageUrl: "http://img.youtube.com/vi/VIDEO-ID/hqdefault.jpg"
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

        function simpleCard(links) {
             const ul = document.createElement('ul');

        links.forEach(link => {
            const li = document.createElement('li');
            li.innerHTML = `
                <a href="${link.url}">${link.title}</a>
                <img src="${link.imageUrl}" alt="${link.title}" />
                <p>${link.description}</p>
            `;
            ul.appendChild(li);
        });
        return ul;
        }
        

export function buildbooks() {
       return simpleCard(bbLinks);
}

export function links() {
        return simpleCard(helpfulLinks);
}

export function tools() {
        const ul = document.createElement('ul');
        
        toolLinks.forEach(link => {
            const li = document.createElement('li');
            li.classList.add('tool-link');
            li.innerHTML = `
                <p>Use: ${link.use}</p>
                <a href="${link.url}">${link.title}</a>
                <img src="${link.imageUrl}" alt="${link.title}" />
                <p>${link.description}</p>
            `;
            ul.appendChild(li);
        });
        return ul;
}
