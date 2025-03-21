// ┬  ┬┌─┐┌┬┐┌─┐
// │  │└─┐ │ └─┐
// ┴─┘┴└─┘ ┴ └─┘
// Functions for printing both lists

document.addEventListener('DOMContentLoaded', () => {
	const lists_1 = document.getElementById('lists_1');
	const lists_2 = document.getElementById('lists_2');

	const generateFirstListsContainer = () => {
		if (!lists_1) return;
		
		for (const list of CONFIG.firstlistsContainer) {
			let iconHtml = list.icon.endsWith('.svg') 
				? `<img src="${list.icon}" alt="Icon" class="listIcon">` 
				: `<i class="listIcon" icon-name="${list.icon}"></i>`;
				
			let item = `
				<div class="card list list__${list.id}" id="list_${list.id}">
					${iconHtml}
					<a target="${CONFIG.openInNewTab ? '_blank' : ''}" href="${list.links[0].link}" class="listItem">${list.links[0].name}</a>
					<a target="${CONFIG.openInNewTab ? '_blank' : ''}" href="${list.links[1].link}" class="listItem">${list.links[1].name}</a>
					<a target="${CONFIG.openInNewTab ? '_blank' : ''}" href="${list.links[2].link}" class="listItem">${list.links[2].name}</a>
					<a target="${CONFIG.openInNewTab ? '_blank' : ''}" href="${list.links[3].link}" class="listItem">${list.links[3].name}</a>
				</div>
			`;
			lists_1.insertAdjacentHTML('beforeend', item);
		}
	};

	const generateSecondListsContainer = () => {
		if (!lists_2) return;
		
		for (const list of CONFIG.secondListsContainer) {
			let item = `
				<div class="card list list__${list.id}" id="list_${list.id}">
					<i class="listIcon" icon-name="${list.icon}"></i>
					<a target="${CONFIG.openInNewTab ? '_blank' : ''}" href="${list.links[0].link}" class="listItem">${list.links[0].name}</a>
					<a target="${CONFIG.openInNewTab ? '_blank' : ''}" href="${list.links[1].link}" class="listItem">${list.links[1].name}</a>
					<a target="${CONFIG.openInNewTab ? '_blank' : ''}" href="${list.links[2].link}" class="listItem">${list.links[2].name}</a>
					<a target="${CONFIG.openInNewTab ? '_blank' : ''}" href="${list.links[3].link}" class="listItem">${list.links[3].name}</a>
				</div>
			`;
			lists_2.insertAdjacentHTML('beforeend', item);
		}
	};

	const generateLists = () => {
		switch (CONFIG.bentoLayout) {
			case 'bento':
				generateFirstListsContainer();
				break;
			case 'lists':
				generateFirstListsContainer();
				generateSecondListsContainer();
				break;
			default:
				break;
		}
	};

	generateLists();
});
