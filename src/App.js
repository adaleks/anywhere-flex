// import of styles
import '@/styles/lib/anywhere-flex.scss';
import '@/styles/lib/themes/any-blue.scss';
import 'prismjs/themes/prism.css';
import '@/styles/style.scss';
// importof scripts
import Prism from 'prismjs';
import pageNotFound from './pages/404.js';
import setup from './pages/general/setup.js';
import gridsystem from './pages/grid/grid-system.js';
import theming from './pages/general/theming.js';
import display from './pages/layout/display.js';
import overflow from './pages/layout/overflow.js';
import position from './pages/layout/position.js';
import toprightbottomleft from './pages/layout/toprightbottomleft.js';
import zindex from './pages/layout/zindex.js';
import flexdirection from './pages/flexbox/flexdirection.js';
import flexwrap from './pages/flexbox/flexwrap.js';
import flex from './pages/flexbox/flex.js';
import flexgrow from './pages/flexbox/flexgrow.js';
import flexshrink from './pages/flexbox/flexshrink.js';
import order from './pages/flexbox/order.js';
import justifycontent from './pages/flexbox/justifycontent.js';
import aligncontent from './pages/flexbox/aligncontent.js';
import alignitems from './pages/flexbox/alignitems.js';
import alignself from './pages/flexbox/alignself.js';

const pathToRegex = (path) =>
    new RegExp('^' + path.replace(/\//g, '\\/').replace(/:\w+/g, '(.+)') + '$');

const getParams = (match) => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map((result) => result[1]);

    return Object.fromEntries(keys.map((key, i) => [key, values[i]]));
};

const hasClass = (element, className) => {
    if (element) {
        if (element.classList) return element.classList.contains(className);
        else return new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
    }
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
    removeClass(document.querySelector('.layout-menu-wrapper'), 'active');
    removeClass(document.querySelector('.layout-mask'), 'layout-mask-active');
};

const onMenuButtonClick = () => {
    addClass(document.body, 'blocked-scroll');
    addClass(document.querySelector('.layout-menu-wrapper'), 'active');
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
        {
            path: '/display',
            view: display,
        },
        {
            path: '/overflow',
            view: overflow,
        },
        {
            path: '/position',
            view: position,
        },
        {
            path: '/toprightbottomleft',
            view: toprightbottomleft,
        },
        {
            path: '/zindex',
            view: zindex,
        },
        {
            path: '/flexdirection',
            view: flexdirection,
        },
        {
            path: '/flexwrap',
            view: flexwrap,
        },
        {
            path: '/flex-home',
            view: flex,
        },
        {
            path: '/flexgrow',
            view: flexgrow,
        },
        {
            path: '/flexshrink',
            view: flexshrink,
        },
        {
            path: '/order',
            view: order,
        },
        {
            path: '/justifycontent',
            view: justifycontent,
        },
        {
            path: '/aligncontent',
            view: aligncontent,
        },
        {
            path: '/alignitems',
            view: alignitems,
        },
        {
            path: '/alignself',
            view: alignself,
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
        window.scrollTo({ top: 0 });
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

    let menuButton = document.querySelector('.mobile-button');
    menuButton.onclick = function () {
        const menuWrapper = document.querySelector('.layout-menu-wrapper');
        if (hasClass(menuWrapper, 'active')) {
            hideMenu();
        } else {
            onMenuButtonClick();
        }
    };

    let mask = document.querySelector('.layout-mask');
    mask.onclick = function () {
        hideMenu();
    };

    router();
});
