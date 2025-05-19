const bbLinks = [
            {
                title: "Laudna - Critical Role",
                url: "https://drive.google.com/file/d/1p_WrvoevjBnTGTBLTPl9-cajugDPxGX6/view?usp=drive_link",
                description: "Build book for Laudna from Critical Role, competed and placed 3rd at 2024 Dokomi.",
                imageUrl: "https://scontent-dus1-1.cdninstagram.com/v/t51.29350-15/473673723_591115356866377_7776818308298947936_n.heic?stp=dst-jpg_e35_p750x750_sh0.08_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMTUyeDE0NDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=scontent-dus1-1.cdninstagram.com&_nc_cat=101&_nc_oc=Q6cZ2QGU9uvxZpYG0o3KVXq4wKnSLftCtwA2w7Gnt5p7mIsffbe1sqfqSGwqRa0COJrbTBY&_nc_ohc=ninz9eCW59IQ7kNvwGLEj94&_nc_gid=_HUDKUqfvAgDqt0jnDv1WQ&edm=ANTKIIoBAAAA&ccb=7-5&oh=00_AfKdnEiXtx7yiN_nGm9AafTe2BHyAis4-hur3evkEJT-_w&oe=6830E483&_nc_sid=d885a2"
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
