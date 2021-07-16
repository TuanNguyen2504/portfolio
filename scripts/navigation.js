/// <reference path="D:\tips\typings\jquery\globals\jquery\index.d.ts" />

const NAV_LINKS = {
	HOME: 'home',
	ABOUT: 'about',
	PORTFOLIO: 'portfolio',
	CONTACT: 'contact',
	CV: 'cv',
};

const NAV_LIST = [
	{
		link: NAV_LINKS.HOME,
		iconClass: 'fas fa-home',
		label: 'Home',
	},
	{
		link: NAV_LINKS.ABOUT,
		iconClass: 'fas fa-user-alt',
		label: 'About Me',
	},
	{
		link: NAV_LINKS.PORTFOLIO,
		iconClass: 'fas fa-briefcase',
		label: 'Portfolio',
	},
	{
		link: NAV_LINKS.CONTACT,
		iconClass: 'fas fa-envelope',
		label: 'Contact',
	},
	{
		link: NAV_LINKS.CV,
		iconClass: 'fas fa-file-contract',
		label: 'My CV',
	},
];

const LINK_KEY = 'data-link';

let currentLink = NAV_LINKS.PORTFOLIO;

// get initial component
function getComponent(link = NAV_LINKS.HOME) {
	// remove current
	$(`.nav-link[data-link=${currentLink}]`).removeClass('active');
	$(`.nav-link[data-link=${link}]`).addClass('active');

	// add new component
	$(`#${currentLink}`).fadeOut(750).css('display', 'none');
	$(`#${link}`).fadeIn(750);
	currentLink = link;
}

// render navigation
function renderNavigation() {
	let mobileXml = '',
		desktopXml = '';

	NAV_LIST.forEach((item) => {
		mobileXml += `<li class="nav-link" ${LINK_KEY}="${item.link}"><i class="${item.iconClass}"></i></li>`;

		desktopXml += `<li class="nav-link" ${LINK_KEY}="${item.link}">${item.label}</li>`;
	});

	$('#mobileNavLinks').html(mobileXml);
	$('#desktopNavLinks').html(desktopXml);
}

$(document).ready(function () {
	// render mobile navigation
	renderNavigation();

	// get home
	getComponent(currentLink);

	// link & render component
	$('.nav-link').click(function () {
		const link = $(this).attr('data-link');
		getComponent(link);
	});
});