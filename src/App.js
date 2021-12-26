// import of styles
import '@/styles/lib/anywhere-flex.scss';
import '@/styles/lib/themes/any-blue.scss';
import 'prismjs/themes/prism.css';
import '@/styles/style.scss';
// importof scripts
import Prism from 'prismjs';
import pageNotFound from './pages/404.js';
import setup from './pages/setup/setup.js';
import gridsystem from './pages/gridsystem/gridsystem.js';
import theming from './pages/theming/theming.js';

const pathToRegex = (path) =>
    new RegExp('^' + path.replace(/\//g, '\\/').replace(/:\w+/g, '(.+)') + '$');

const getParams = (match) => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map((result) => result[1]);

    return Object.fromEntries(keys.map((key, i) => [key, values[i]]));
};

const navigateTo = (url) => {
    history.pushState(null, null, url);
    router();
};

const addClass = (element, className) => {
    if (element.classList) element.classList.add(className);
    else element.className += ' ' + className;
};

const removeClass = (element, className) => {
    if (!element) return;
    if (element.classList) element.classList.remove(className);
    else
        element.className = element.className.replace(
            new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'),
            ' '
        );
};

const hideMenu = () => {
    removeClass(document.body, 'blocked-scroll');
    removeClass(document.querySelector('.layout-sidebar'), 'active');
    removeClass(document.querySelector('.layout-mask'), 'layout-mask-active');
};

const onMenuButtonClick = () => {
    addClass(document.body, 'blocked-scroll');
    addClass(document.querySelector('.layout-sidebar'), 'active');
    addClass(document.querySelector('.layout-mask'), 'layout-mask-active');
};
const router = () => {
    const routes = [
        {
            path: '/',
            view: setup,
        },
        {
            path: '/404',
            view: pageNotFound,
        },
        {
            path: '/setup',
            view: setup,
            default: true,
        },
        {
            path: '/theming',
            view: theming,
        },
        {
            path: '/gridsystem',
            view: gridsystem,
        },
    ];

    // Test each route for potential match
    const potentialMatches = routes.map((route) => ({
        route: route,
        result: location.hash.replace('#', '').match(pathToRegex(route.path)),
    }));

    let match = potentialMatches.find((potentialMatch) => potentialMatch.result !== null);

    if (!match) {
        match = {
            route:
                location.hash === ''
                    ? routes.find((o) => o.default)
                    : routes.find((o) => o.path === '/404'),
            result: [location.pathname],
        };
        navigateTo(match.route.default ? '/#/setup' : '/#/404');
    }
    const view = new match.route.view(getParams(match));

    const menuItems = document.querySelectorAll('[data-link]');
    menuItems.forEach(function (item) {
        item.parentNode.classList.remove('active-menuitem');
        if (location.hash === '') {
            menuItems[0].parentNode.classList.add('active-menuitem');
        } else if (item.href.indexOf(location.hash.replace('#', '')) > -1) {
            item.parentNode.classList.add('active-menuitem');
        }
    });

    setTimeout(async () => {
        document.querySelector('#root').innerHTML = await view.getHtml();
        view.script();
        hideMenu();
        if (Prism) {
            Prism.highlightAll();
        }
    }, 100);
};

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', (e) => {
        if (e.target.matches('[data-link]')) {
            e.preventDefault();
            navigateTo(e.target.href);
            const menuItems = document.querySelectorAll('[data-link]');
            menuItems.forEach(function (item) {
                item.parentNode.classList.remove('active-menuitem');
            });
            e.target.parentNode.classList.add('active-menuitem');
        }
    });

    // let menuButton = document.querySelector('.menu-button');
    // menuButton.onclick = function () {
    //     onMenuButtonClick();
    // };

    // let mask = document.querySelector('.layout-mask');
    // mask.onclick = function () {
    //     hideMenu();
    // };

    router();
});
