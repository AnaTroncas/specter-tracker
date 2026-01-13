/* --- DATA --- */
const evidences = [
    "EMF 5", "Spirit Box", "Fingerprints", "Ghost Orbs", 
    "Ghost Writing", "Freezing Temperature", "Paranormal Motion"
];

const evidenceIcons = {
    "EMF 5": '<span class="icon-group"><i class="fa-solid fa-circle-exclamation"></i><i class="fa-solid fa-5"></i></span>',
    "Spirit Box": '<i class="fa-solid fa-walkie-talkie"></i>',
    "Fingerprints": '<i class="fa-solid fa-fingerprint"></i>',
    "Ghost Orbs": '<i class="fa-solid fa-glasses"></i>',
    "Ghost Writing": '<i class="fa-solid fa-book-open"></i>',
    "Freezing Temperature": '<i class="fa-regular fa-snowflake"></i>',
    "Paranormal Motion": '<i class="fa-solid fa-person-walking"></i>'
};

const ghosts = [
    // TORMENTOR
    { name: "Afarit", cat: "Tormentor", spd: "Fast", ev: ["Paranormal Motion", "Ghost Orbs", "Freezing Temperature"], desc: "Gains movement speed if a player looks at it during a hunt." },
    { name: "Banshee", cat: "Tormentor", spd: "Normal", ev: ["EMF 5", "Freezing Temperature", "Fingerprints"], desc: "Targets and hunts players one at a time, more likely to make noises." },
    { name: "Haint", cat: "Tormentor", spd: "Fast", ev: ["Paranormal Motion", "Spirit Box", "Ghost Orbs"], desc: "Looking away will make it become faster." },
    { name: "Oni", cat: "Tormentor", spd: "Normal", ev: ["Paranormal Motion", "Ghost Writing", "Spirit Box"], desc: "Appears in the ghost room; jumpscares frequently before hunting." },
    { name: "Wendigo", cat: "Tormentor", spd: "Fast", ev: ["Paranormal Motion", "Spirit Box", "Freezing Temperature"], desc: "Speed increases as the player’s sanity drops." },
    { name: "Yurei", cat: "Tormentor", spd: "Normal", ev: ["Freezing Temperature", "Ghost Writing", "Ghost Orbs"], desc: "Drains player sanity 25% faster than other ghosts." },

    // FLICKER
    { name: "Demon", cat: "Flicker", spd: "Fast", ev: ["Freezing Temperature", "Spirit Box", "Ghost Writing"], desc: "Initiates hunts much more frequently, speeds up progressively each hunt." },
    { name: "Jinn", cat: "Flicker", spd: "Variable", ev: ["EMF 5", "Paranormal Motion", "Ghost Orbs"], desc: "Moves at high speeds and it's faster when the power is off." },
    { name: "Mare", cat: "Flicker", spd: "Variable", ev: ["Freezing Temperature", "Spirit Box", "Ghost Orbs"], desc: "Becomes stronger and more active when the lights are off, keep lights, flashlight or candle on to slow her down." },
    { name: "Revenant", cat: "Flicker", spd: "Fast", ev: ["EMF 5", "Ghost Writing", "Fingerprints"], desc: "Moves at high speed if they see you while hunting." },
    { name: "Spirit", cat: "Flicker", spd: "Normal", ev: ["Fingerprints", "Spirit Box", "Ghost Writing"], desc: "Targets anyone who stays inside the house for too long." },
    { name: "Wisp", cat: "Flicker", spd: "Variable", ev: ["Ghost Orbs", "Ghost Writing", "Fingerprints"], desc: "Moves faster if the lights, the flashlight and the candle are turned on and frequently turns on the light switches." },

    // TRICKSTER
    { name: "Douen", cat: "Trickster", spd: "Normal", ev: ["Paranormal Motion", "Ghost Writing", "Fingerprints"], desc: "Has a significantly higher chance of slamming doors during a hunt, making you unable to open them for a few seconds." },
    { name: "Duppy", cat: "Trickster", spd: "Normal", ev: ["Spirit Box", "EMF 5", "Ghost Orbs"], desc: "Creates an identical clone of itself during the first hunt; clones are able to see hiding players; If a clone catches you, it give a permanent speed debuff to the player." },
    { name: "Egui", cat: "Trickster", spd: "Normal", ev: ["Ghost Orbs", "Spirit Box", "Ghost Writing"], desc: "Targets the player holding a specific 'liked' item (ghost goggles, book, spirit box)." },
    { name: "Poltergeist", cat: "Trickster", spd: "Normal", ev: ["Spirit Box", "Fingerprints", "Ghost Orbs"], desc: "Capable of throwing up to three items at once." },
    { name: "Thaye", cat: "Trickster", spd: "Fast", ev: ["Freezing Temperature", "Fingerprints", "Ghost Orbs"], desc: "After a while they give less evidence and the chance of starting a hunt decreases but they become faster during hunts." },
    { name: "Yokai", cat: "Trickster", spd: "Normal", ev: ["Fingerprints", "Freezing Temperature", "Paranormal Motion"], desc: "Aggression levels increase based on the amount of active electricity/electronics." },

    // IMITATOR
    { name: "Blair", cat: "Imitator", spd: "Normal", ev: ["EMF 5", "Freezing Temperature", "Spirit Box"], desc: "They avoid rooms with the lights turned on; more likely to turn off the fusebox." },
    { name: "Mimic", cat: "Imitator", spd: "Variable", ev: ["Spirit Box", "Ghost Writing", "EMF 5"], desc: "Every two minutes, it switches its behavior to imitate the traits of a different ghost type." },
    { name: "Myling", cat: "Imitator", spd: "Variable", ev: ["Paranormal Motion", "EMF 5", "Spirit Box"], desc: "If the fusebox is off, they will kill only one player but they move fast; if the fusebox is on they have a normal behavior." },
    { name: "O Tokata", cat: "Imitator", spd: "Normal", ev: ["EMF 5", "Fingerprints", "Ghost Orbs"], desc: "Initiates a hunt immediately if it hears a player talking while it wanders." },
    { name: "Shade", cat: "Imitator", spd: "Normal", ev: ["EMF 5", "Ghost Writing", "Ghost Orbs"], desc: "Shy ghost, they give less evidence when too many players are around; hunts less than other ghosts." },
    { name: "Wraith", cat: "Imitator", spd: "Normal", ev: ["Ghost Writing", "Paranormal Motion", "EMF 5"], desc: "Teleports to a new target if it has been hunting one player for too long." },

    // LEECH
    { name: "Aswang", cat: "Leech", spd: "Normal", ev: ["EMF 5", "Fingerprints", "Spirit Box"], desc: "Targets the player with the lowest sanity." },
    { name: "Bhuta", cat: "Leech", spd: "Normal", ev: ["Paranormal Motion", "Ghost Writing", "Freezing Temperature"], desc: "Targets movement and electronics; stand still and drop items to avoid detection." },
    { name: "Phantom", cat: "Leech", spd: "Normal", ev: ["Freezing Temperature", "EMF 5", "Ghost Orbs"], desc: "Drains sanity rapidly when looked at during hunts and more likely to appear when using the Ouija Board." },
    { name: "Preta", cat: "Leech", spd: "Variable", ev: ["Paranormal Motion", "Fingerprints", "EMF 5"], desc: "Becomes progressively slower as the number of dead players increases." },
    { name: "Upyr", cat: "Leech", spd: "Fast", ev: ["EMF 5", "Freezing Temperature", "Paranormal Motion"], desc: "They become faster and more likely to hunt with each kill." }
];

// 1. GLOBAL SORT: Ensure ghosts are alphabetical by name at all times
ghosts.sort((a, b) => a.name.localeCompare(b.name));

/* --- STATE --- */
let state = {
    included: [], 
    excluded: [], 
    trait: null, 
    excludedTraits: [],
    speed: null
};

/* --- INITIALIZATION --- */
const ghostContainer = document.getElementById('ghost-container');
const evidenceList = document.getElementById('evidence-list');
const infoContainer = document.getElementById('info-container');

function init() {
    renderEvidenceControls();
    renderGhosts();
    renderInfo();
}

/* --- RENDER FUNCTIONS --- */

function renderEvidenceControls() {
    evidenceList.innerHTML = '';
    evidences.forEach(ev => {
        const row = document.createElement('div');
        row.className = 'evidence-row';

        const isExcluded = state.excluded.includes(ev);
        const isIncluded = state.included.includes(ev);

        row.innerHTML = `
            <div class="check-box exclude ${isExcluded ? 'active' : ''}" onclick="toggleEvidence('${ev}', 'exclude')">✕</div>
            <div class="evidence-name">${ev}</div>
            <div class="check-box include ${isIncluded ? 'active' : ''}" onclick="toggleEvidence('${ev}', 'include')">✓</div>
        `;
        evidenceList.appendChild(row);
    });
}

// 2. RENDER GHOSTS: New Logic
// Pass 1: Render Valid Categories at the Top
// Pass 2: Render Invalid (Rejected) Categories at the Bottom
function renderGhosts() {
    ghostContainer.innerHTML = '';
    
    const categories = ["Tormentor", "Flicker", "Trickster", "Imitator", "Leech"];
    
    // --- PASS 1: VALID GHOSTS (TOP) ---
    categories.forEach(cat => {
        // Filter for this category AND valid status
        const validGhosts = ghosts.filter(g => g.cat === cat && checkGhostStatus(g) !== 'dimmed');
        
        // Only render header if there are ghosts in it
        if (validGhosts.length > 0) {
            // Blue Header
            const header = document.createElement('div');
            header.className = 'category-header';
            header.innerText = cat.toUpperCase();
            ghostContainer.appendChild(header);

            // Render Ghosts
            validGhosts.forEach(g => {
                const isSuccess = state.included.length === 3;
                createGhostEl(g, isSuccess ? 'success' : '');
            });
        }
    });

    // --- PASS 2: INVALID GHOSTS (BOTTOM) ---
    categories.forEach(cat => {
        // Filter for this category AND invalid status
        const invalidGhosts = ghosts.filter(g => g.cat === cat && checkGhostStatus(g) === 'dimmed');
        
        // Only render header if there are ghosts in it
        if (invalidGhosts.length > 0) {
            // Red Header (Rejected)
            const header = document.createElement('div');
            header.className = 'category-header rejected'; // Red styling class
            header.innerText = cat.toUpperCase();
            ghostContainer.appendChild(header);

            // Render Ghosts (Dimmed)
            invalidGhosts.forEach(g => {
                createGhostEl(g, 'dimmed');
            });
        }
    });
}

// Helper function to create DOM element for ghost
function createGhostEl(g, status) {
    const el = document.createElement('div');
    el.className = `ghost-row ${status}`;
    const icons = g.ev.map(e => evidenceIcons[e]).join(' ');
    el.innerHTML = `
        <span class="ghost-name">${g.name}</span>
        <span class="ghost-icons">${icons}</span>
    `;
    ghostContainer.appendChild(el);
}

// 3. Render Info Panel
// Keeps Valid ghosts at the top, Invalid at the bottom
function renderInfo() {
    infoContainer.innerHTML = '';
    
    const validGhosts = ghosts.filter(g => checkGhostStatus(g) !== 'dimmed');
    const invalidGhosts = ghosts.filter(g => checkGhostStatus(g) === 'dimmed');

    const sortedGhosts = [...validGhosts, ...invalidGhosts];

    sortedGhosts.forEach(g => {
        const status = checkGhostStatus(g);
        const card = document.createElement('div');
        card.className = `info-card ${status === 'dimmed' ? 'dimmed-card' : ''}`;
        card.id = `info-${g.name}`;
        card.innerHTML = `
            <div class="info-name">${g.name}</div>
            <div class="info-meta">${g.cat} | ${g.spd} Speed</div>
            <div class="info-desc">${g.desc}</div>
        `;
        infoContainer.appendChild(card);
    });
}

/* --- LOGIC --- */

function toggleEvidence(ev, type) {
    if (type === 'include') {
        if (state.included.includes(ev)) {
            state.included = state.included.filter(e => e !== ev);
        } else {
            state.included.push(ev);
            state.excluded = state.excluded.filter(e => e !== ev);
        }
    } else {
        if (state.excluded.includes(ev)) {
            state.excluded = state.excluded.filter(e => e !== ev);
        } else {
            state.excluded.push(ev);
            state.included = state.included.filter(e => e !== ev);
        }
    }
    renderEvidenceControls();
    renderGhosts();
    renderInfo();
}

function setTrait(traitName, btnElement) {
    state.excludedTraits = state.excludedTraits.filter(t => t !== traitName);
    
    if (state.trait === traitName) {
        state.trait = null;
        btnElement.classList.remove('active');
    } else {
        state.trait = traitName;
        document.querySelectorAll('#trait-filters button').forEach(b => {
            b.classList.remove('active');
            if(b.innerText === traitName) b.classList.remove('excluded');
        });
        btnElement.classList.add('active');
    }
    renderGhosts();
    renderInfo();
}

function excludeTrait(traitName, btnElement) {
    state.trait = null;
    document.querySelectorAll('#trait-filters button').forEach(b => b.classList.remove('active'));

    if (state.excludedTraits.includes(traitName)) {
        state.excludedTraits = state.excludedTraits.filter(t => t !== traitName);
        btnElement.classList.remove('excluded');
    } else {
        state.excludedTraits.push(traitName);
        btnElement.classList.add('excluded');
    }
    
    renderGhosts();
    renderInfo();
}

function setSpeed(speedName, btnElement) {
    if (state.speed === speedName) {
        state.speed = null;
        btnElement.classList.remove('active');
    } else {
        state.speed = speedName;
        document.querySelectorAll('#speed-filters button').forEach(b => b.classList.remove('active'));
        btnElement.classList.add('active');
    }
    renderGhosts();
    renderInfo();
}

function checkGhostStatus(ghost) {
    if (state.excludedTraits.includes(ghost.cat)) return 'dimmed';
    if (state.trait && ghost.cat !== state.trait) return 'dimmed';
    
    // Speed Logic: Allow 'Variable' to pass any filter
    if (state.speed && ghost.spd !== state.speed && ghost.spd !== "Variable") return 'dimmed';

    for (let ex of state.excluded) {
        if (ghost.ev.includes(ex)) return 'dimmed';
    }

    for (let inc of state.included) {
        if (!ghost.ev.includes(inc)) return 'dimmed';
    }

    if (state.included.length === 3) {
        return 'success';
    }

    return '';
}

function resetAll() {
    state = { included: [], excluded: [], trait: null, excludedTraits: [], speed: null };
    document.querySelectorAll('button').forEach(b => {
        b.classList.remove('active');
        b.classList.remove('excluded');
    });
    renderEvidenceControls();
    renderGhosts();
    renderInfo();
}

// Run
init();