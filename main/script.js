// 'use strict';

// GENERAL ELEMENTS SELECTION
const hamburger = document.querySelector('.menu-icon');
const marquee = document.querySelector('.sapa');
const user = document.querySelector('.user-icon');

const pages = document.querySelectorAll('.pages');
const homePage = document.querySelector('.home-page');
const cancel = document.querySelectorAll('.cancel');

// MAIN SECTIONS SELECTION
const figures = document.querySelectorAll('.figures');
const transactionCont = document.querySelector('.transactions');
const transferCont = document.querySelector('.transfers');
const loanCont = document.querySelector('.loans');
const paymentCont = document.querySelector('.payments-section');
const viewAcc = document.querySelector('.view-acc');

// DASHBOARD
const eye = document.querySelector('.eye-1');
const crossEye = document.querySelector('.eye-slash');
const accBalance = document.querySelector('.balance');

// PAYMENTS ICONS
const icons = document.querySelectorAll('.icon-container');

// ALL SETTINGS
const settingPage = document.querySelector('.setting-page');
const settingItems = document.querySelector('.setting-items');
const settingGroups = document.querySelectorAll('.settings-group');
const accDetails = document.querySelector('.account-details');
const returnArrow = document.querySelector('.return');
let check;

// ACCOUNTS PAGE
const logoutButton = document.querySelector('.logout');
const deleteButton = document.querySelector('.option');

const uiDivs = document.querySelectorAll('.colors');

// SIDE NAVS
const asideNav = document.querySelector('.aside');
const allSideNavs = document.querySelectorAll('.side-content');
const mobileAside = document.querySelector('.aside-mobile');

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
const logoutModal = document.querySelector('.logout-confirmation');
const deleteModal = document.querySelector('.delete-confirmation');
const cross = document.querySelectorAll('.cross-cancel');
const allAccounts = document.querySelector('.all-accounts');

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////A
// MAIN APP
const account1 = {
  owner: 'Julian Moses',
  username: 'jaylam',
  accountNo: 1128863537,
  movements: [300, -4000, 10000, 30, 7000, -800.5, -60],
  pin: 0000,
};

const account2 = {
  owner: 'Olaleye Rainbow',
  username: 'olaray',
  accountNo: 5215277734,
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  pin: 1111,
};

const account3 = {
  owner: 'Sheenur Wango',
  username: 'shedeyplay',
  accountNo: 0829498278,
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  pin: 2222,
};

const account4 = {
  owner: 'Mark Smith',
  username: 'marselle',
  accountNo: 1446709730,
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  pin: 3333,
};

const account5 = {
  owner: 'Kyu Beeg',
  username: 'kepao',
  accountNo: 0223346771,
  movements: [430, 1000, 700, 50, 90],
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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
    hideModal();

    addClass(id, 'active');

    const navPage = document.querySelector(`.${id.dataset.page}`);
    const navSubPage = document.querySelector(`.${id.dataset.subpage}`);

    if (id.classList.contains('settings')) {
      hideSettingsGroup();
      removeClass(settingItems, 'side-transitions-left');
      check = false;
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
  addClass(allAccounts, 'hidden');

  addClass(mobileAside, 'hidden');
};

const showSoonModal = function () {
  removeClass(modalBack, 'hidden');
  removeClass(soonModal, 'hidden');
  removeClass(soonModal, 'modal-transition');
};

///////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// IMPLEMENTATIONS
hamburger.addEventListener('click', function () {
  removeClass(modalBack, 'hidden');
  removeClass(mobileAside, 'hidden');
});

user.addEventListener('click', function () {
  addClass(homePage, 'hidden');

  removeClass(settingPage, 'hidden');

  addClass(settingItems, 'hidden');
  addClass(settingItems, 'side-transitions-left');

  removeClass(accDetails, 'hidden');
  removeClass(accDetails, 'side-transitions');

  removeAllActive();
  addClass(settingsNavD, 'active');
  check = true;
});

logoutButton.addEventListener('click', function () {
  removeClass(modalBack, 'hidden');
  removeClass(logoutModal, 'hidden');
  removeClass(logoutModal, 'modal-transition');
});

deleteButton.addEventListener('click', function () {
  removeClass(modalBack, 'hidden');
  removeClass(deleteModal, 'hidden');
  removeClass(deleteModal, 'modal-transition');
});

viewAcc.addEventListener('click', function () {
  removeClass(modalBack, 'hidden');
  removeClass(allAccounts, 'hidden');
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// DASHBOARDSSS
eye.addEventListener('click', function () {
  toggleClass(eye, 'hidden');
  toggleClass(crossEye, 'hidden');

  accBalance.textContent = '₦XXXX.XX';
});

crossEye.addEventListener('click', function () {
  toggleClass(crossEye, 'hidden');
  toggleClass(eye, 'hidden');

  accBalance.textContent = '₦300.00';
});

///////////////////////////////////////////////////////////////////////////////////////////////

//SETTINGSSS

settingItems.addEventListener('click', function (e) {
  if (e.target.closest('.available')) {
    const id = e.target.closest('.available');
    const target = document.querySelector(`.${id.dataset.subpage}`);

    addClass(settingItems, 'hidden');
    addClass(settingItems, 'side-transitions-left');

    settingGroups.forEach(el => {
      addClass(el, 'hidden');
      addClass(el, 'side-transitions');
    });

    removeClass(target, 'hidden');
    removeClass(target, 'side-transitions');
    check = true;
  }

  if (e.target.closest('.popup')) {
    const id = e.target.closest('.popup');
    const target = document.querySelector(`.${id.dataset.subpage}`);

    removeClass(modalBack, 'hidden');

    removeClass(target, 'hidden');
    removeClass(target, 'modal-transitions');
  }
});

returnArrow.addEventListener('click', function () {
  if (check) {
    hideSettingsGroup();
    removeClass(settingItems, 'hidden');
    removeClass(settingItems, 'side-transitions-left');
    check = false;
  } else {
    removeAllActive();
    hideFigures();
    hidePages();

    addClass(homeNavD, 'active');
    removeClass(homePage, 'hidden');
    removeClass(transactionCont, 'hidden');
    removeClass(transactionCont, 'side-transitions');
  }
});

//////////////////////////////////////////////////////////////////////

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

mobileAside.addEventListener('click', function (e) {
  navigations(e, 'side-content');
  addClass(mobileAside, 'hidden');
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
    showSoonModal();
  });
});

uiDivs.forEach(el => {
  el.addEventListener('click', function () {
    showSoonModal();
  });
});

cancel.forEach(el => {
  el.addEventListener('click', hideModal);
});
