const bbLinks = [
            {
                title: "Laudna - Critical Role",
                url: "https://example.com/link1",
                description: "Build book for Laudna from Critical Role, competed and placed 3rd at 2024 Dokomi.",
                imageUrl: "https://example.com/image1.jpg"
            },
            {
                title: "Marcille Donato - Delicious in Dungeon",
                url: "https://example.com/link2",
                description: "Build book for Marcille Donato from Delicious in Dungeon, competed and placed 1st at 2025 S.a.m.t Con.",
                imageUrl: "https://example.com/image2.jpg"
            }
        ];

const helpfulLinks = [
            {
                title: "Tutorial - How to tech",
                url: "https://example.com/link1",
                description: "Light up your cosplay with this tutorial on how to tech your cosplay.",
                imageUrl: "https://example.com/image1.jpg"
            }
        ];

const toolLinks = [
            {
                title: "Nifegun",
                use: "Measuring tool for cosplay",
                url: "https://example.com/link1",
                description: "Ever wondered how to actually have the right skale for your props?",
                imageUrl: "https://example.com/image1.jpg"
            }
        ];


export function buildbooks() {
        const ul = document.createElement('ul');
        

        bbLinks.forEach(link => {
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

export function links() {
        const ul = document.createElement('ul');
        
        helpfulLinks.forEach(link => {
            const li = document.createElement('li');
            li.innerHTML = `
                <a href="${link.url}" target="_blank">${link.title}</a>
                <img src="${link.imageUrl}" alt="${link.title}" />
                <p>${link.description}</p>
            `;
            ul.appendChild(li);
        });
        return ul;
}

export function tools() {
        const ul = document.createElement('ul');
        
        toolLinks.forEach(link => {
            const li = document.createElement('li');
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
