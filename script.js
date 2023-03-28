// 'use strict';

// GENERAL ELEMENTS SELECTION
const loginDate = document.querySelector('.date-now');
const lastLogin = document.querySelector('.last-date');
const userFirstName = document.querySelector('.userFN');
const userName = document.querySelector('.userName');

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
const fullName = document.querySelector('.uName');
const accNumber = document.querySelector('.aNo');
const accBalance = document.querySelector('.balance');
const moneyIn = document.querySelector('.inLabel');
const moneyOut = document.querySelector('.outLabel');

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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// FUNCTIONS

// includes class to an element
const addClass = function (element, className) {
  element.classList.add(className);
};

// removes class from an element
const removeClass = function (element, className) {
  element.classList.remove(className);
};

// togles classs on an element
const toggleClass = function (element, className) {
  element.classList.toggle(className);
};

// hides pages on a section
const hidePages = function () {
  pages.forEach(el => addClass(el, 'hidden'));
};

// removes active from all nav item
const removeAllActive = function () {
  allSideNavs.forEach(el => removeClass(el, 'active'));
};

// hide figures
const hideFigures = function () {
  figures.forEach(el => {
    addClass(el, 'hidden');
    addClass(el, 'side-transitions');
  });
};

// hide settings subgroup
const hideSettingsGroup = function () {
  settingGroups.forEach(el => {
    addClass(el, 'hidden');
    addClass(el, 'side-transitions');
  });
};

// primary page navigation
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

// hide all modals on page
const hideModal = function () {
  allModal.forEach(el => {
    addClass(el, 'hidden');
    addClass(el, 'modal-transition');
  });

  addClass(modalBack, 'hidden');
  addClass(allAccounts, 'hidden');

  addClass(mobileAside, 'hidden');
};

// show coming soon modal
const showSoonModal = function () {
  removeClass(modalBack, 'hidden');
  removeClass(soonModal, 'hidden');
  removeClass(soonModal, 'modal-transition');
};

// updating logins dates
const updateLoginsDate = function (date) {
  const locale = navigator.language;

  const options = {
    hour: 'numeric',
    minute: 'numeric',
    day: 'numeric',
    year: 'numeric',
    month: 'long',
    weekday: 'long',
  };

  return new Intl.DateTimeFormat(locale, options).format(date);
};

// last login dates
const updateLastLogin = function (acc) {
  if (acc.lastLoginDate) {
    const date = new Date(acc.lastLoginDate);
    const formattedDate = updateLoginsDate(date);
    lastLogin.textContent = `${formattedDate}`;
    acc.lastLogin = new Date();
  } else {
    lastLogin.textContent = 'N/A';
  }
};

// updating name and username
const names = function (acc) {
  let firstName = acc.owner.split(' ');
  firstName = firstName[0];

  // firstname
  userFirstName.textContent = `${firstName}`;

  // username
  userName.textContent = `${acc.username.replace(
    acc.username[0],
    acc.username[0].toUpperCase()
  )}`;
};

// dashboard info
const dashboard = function (acc) {
  // update fullname in dashboard
  fullName.textContent = `${acc.owner
    .split(' ')
    .map(val => val.replace(val[0], val[0].toUpperCase()))
    .join(' ')}`;

  // update account number in dashboard
  accNumber.textContent = `${acc.accountNo}`;

  // account balance
  acc.balance = acc.movements.reduce((acc, cur) => acc + cur, 0).toFixed(2);
  accBalance.textContent = `₦${acc.balance}`;

  // money in and out
  moneyIn.textContent = `₦${acc.movements
    .filter(acc => acc > 0)
    .reduce((acc, cur) => acc + cur, 0)
    .toFixed(2)}`;
  moneyOut.textContent = `₦${Math.abs(
    acc.movements.filter(acc => acc < 0).reduce((acc, cur) => acc + cur, 0)
  ).toFixed(2)}`;
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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MAIN APP ALGORITHM
const account1 = {
  owner: 'Julian Moses',
  username: 'jaylam',
  accountNo: 1128863537,
  movements: [300, -4000, 10000, 30, 7000, -800.5, -60],
  pin: 0000,
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-07-26T17:01:17.194Z',
    '2020-07-28T23:36:17.929Z',
  ],
  lastLoginDate: '2021-09-05T17:05:00.000Z',
};

const account2 = {
  owner: 'Olaleye Rainbow',
  username: 'olaray',
  accountNo: 5215277734,
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  pin: 1111,
  movementsDates: [
    '2020-04-01T10:17:24.185Z',
    '2020-08-01T10:51:36.790Z',
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
  ],
  lastLogin: '2020-05-08T14:11:59.604Z',
};

const account3 = {
  owner: 'Sheenur Wango',
  username: 'shedeyplay',
  accountNo: 0829498278,
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  pin: 2222,
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-07-26T17:01:17.194Z',
    '2020-07-28T23:36:17.929Z',
  ],
  lastLogin: '2020-02-05T16:33:06.386Z',
};

const account4 = {
  owner: 'Mark Smith',
  username: 'marselle',
  accountNo: 1446709730,
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  pin: 3333,
  movementsDates: [
    '2020-04-01T10:17:24.185Z',
    '2020-08-01T10:51:36.790Z',
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
  ],
  lastLogin: '2019-12-23T07:42:02.383Z',
};

const account5 = {
  owner: 'Kyu Beeg',
  username: 'kepao',
  accountNo: 0223346771,
  movements: [430, 1000, 700, 50, 90],
  pin: 4444,
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-07-26T17:01:17.194Z',
    '2020-07-28T23:36:17.929Z',
  ],
  lastLogin: '2020-04-10T14:43:26.374Z',
};

const accounts = [account1, account2, account3, account4];

let curUser;
curUser = account1;

// On Login, call date
const now = updateLoginsDate(new Date());
loginDate.textContent = `${now}`;

// calling last login date
updateLastLogin(curUser);

// updating user firstname and username
names(curUser);

// updating dashboard datas
dashboard(curUser);
