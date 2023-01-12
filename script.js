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

// DASHBOARD
const eye = document.querySelector('.eye-1');
const crossEye = document.querySelector('.eye-slash');
const accNo = document.querySelector('.aNo');

// PAYMENTS ICONS
const icons = document.querySelectorAll('.icon-container');

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

// MODALS
const modalBack = document.querySelector('.modal-background');
const allModal = document.querySelectorAll('.modal');
const soonModal = document.querySelector('.coming-soon');
const cross = document.querySelectorAll('.cross-cancel');

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// FUNCTIONS

const addClass = function (element, className) {
  element.classList.add(className);
};

const removeClass = function (element, className) {
  element.classList.remove(className);
};

const toggleClass = function (element, className) {
  element.classList.toggle(className);
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

const hideModal = function () {
  allModal.forEach(el => {
    addClass(el, 'hidden');
    addClass(el, 'modal-transition');
  });

  addClass(modalBack, 'hidden');
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

// DASHBOARDSSS
eye.addEventListener('click', function () {
  toggleClass(eye, 'hidden');
  toggleClass(crossEye, 'hidden');

  accNo.textContent = '**********';
});

crossEye.addEventListener('click', function () {
  toggleClass(crossEye, 'hidden');
  toggleClass(eye, 'hidden');

  accNo.textContent = '0123456789';
});

///////////////////////////////////////////////////////////////////////////////////////////////

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

/////////////////////////////////////////////////////////////////////////////////////////

// MODAL
modalBack.addEventListener('click', hideModal);
cross.forEach(el => {
  el.addEventListener('click', hideModal);
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') hideModal();
});

icons.forEach(el => {
  el.addEventListener('click', function () {
    removeClass(modalBack, 'hidden');
    removeClass(soonModal, 'hidden');
    removeClass(soonModal, 'modal-transition');
  });
});
