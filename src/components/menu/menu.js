/**
 *
 *
 * @author Tatevosyan Artem (@teqst)
 */

(() => {
    let headerMenu = document.querySelector('.side-menu');
    let menuButton = document.querySelector('.top-bar__burger');
    let exitButton = document.querySelector('.side-menu__burger');

    if (!headerMenu || !menuButton || !exitButton) return false;

    menuButton.addEventListener('click', function () {
        headerMenu.classList.add('side-menu--active');
    });

    exitButton.addEventListener('click', function () {
        headerMenu.classList.remove('side-menu--active');
    });
})();