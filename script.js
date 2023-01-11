'use strict';

// GENERAL ELEMENTS SELECTION
const marquee = document.querySelector('.sapa');
const user = document.querySelector('.user-icon');

const pages = document.querySelectorAll('.pages');
const homePage = document.querySelector('.home-page');

// MAIN SECTIONS SELECTION
const figures = document.querySelectorAll('.figures');
const transactionCont = document.querySelector('.transactions');
const transferCont = document.querySelector('.transfers');
const loanCont = document.querySelector('.loans');
const paymentCont = document.querySelector('.payments-section');

// ALL SETTINGS
const settingPage = document.querySelector('.setting-page');
const settingItems = document.querySelector('.setting-items');
const settingGroups = document.querySelectorAll('.settings-group');
const accDetails = document.querySelector('.account-details');

// SIDE NAVS
const asideNav = document.querySelector('.aside');
const allSideNavs = document.querySelectorAll('.side-content');

// DESKTOP NAVIGATIONS
const homeNavD = document.querySelector('.home-desk-nav');
const transferNavD = document.querySelector('.transfer-desk-nav');
const loanNavD = document.querySelector('.loan-desk-nav');
const payNavD = document.querySelector('.payment-desk-nav');
const settingsNavD = document.querySelector('.settings');

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// FUNCTIONS

const addClass = function (element, className) {
  element.classList.add(className);
};

const removeClass = function (element, className) {
  element.classList.remove(className);
};

const hidePages = function () {
  pages.forEach(el => addClass(el, 'hidden'));
};

const removeAllActive = function () {
  allSideNavs.forEach(el => removeClass(el, 'active'));
};

const hideFigures = function () {
  figures.forEach(el => {
    addClass(el, 'hidden');
    addClass(el, 'side-transitions');
  });
};

const hideSettingsGroup = function () {
  settingGroups.forEach(el => {
    addClass(el, 'hidden');
    addClass(el, 'side-transitions');
  });
};

const navigations = function (e, classCheck) {
  if (e.target.classList.contains(classCheck)) {
    const id = e.target;

    removeAllActive();
    hideFigures();
    hidePages();

    addClass(id, 'active');

    const navPage = document.querySelector(`.${id.dataset.page}`);
    const navSubPage = document.querySelector(`.${id.dataset.subpage}`);

    if (id.classList.contains('settings')) {
      hideSettingsGroup();
      removeClass(settingItems, 'side-transitions-left');
    }

    removeClass(navPage, 'hidden');
    removeClass(navSubPage, 'hidden');
    removeClass(navSubPage, 'side-transitions');
  }
};

///////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// IMPLEMENTATIONS
user.addEventListener('click', function () {
  addClass(homePage, 'hidden');

  removeClass(settingPage, 'hidden');

  addClass(settingItems, 'hidden');
  addClass(settingItems, 'side-transitions-left');

  removeClass(accDetails, 'hidden');
  removeClass(accDetails, 'side-transitions');

  removeAllActive();
  addClass(settingsNavD, 'active');
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// NAVIGATIONS

// homeNavD.addEventListener('click', function (e) {
//   displayHome();
//   onNav(homeNavD, transactionCont);
// });

// transferNavD.addEventListener('click', function () {
//   displayHome();
//   onNav(transferNavD, transferCont);

// document.querySelector('.transfers').classList.remove
// });

asideNav.addEventListener('click', function (e) {
  navigations(e, 'side-content');
});
