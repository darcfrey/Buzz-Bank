// 'use strict';

// GENERAL ELEMENTS SELECTION
const loginDate = document.querySelector('.date-now');
const lastLogin = document.querySelector('.last-date');
const userFirstName = document.querySelector('.userFN');
const userName = document.querySelector('.userName');
const userName_mobile = document.querySelector('.user-mobile');
const sapa = document.querySelector('.sapa');

const hamburger = document.querySelector('.menu-icon');
const marquee = document.querySelector('.sapa');
const user = document.querySelector('.user-icon');

const pages = document.querySelectorAll('.pages');
const homePage = document.querySelector('.home-page');
const cancel = document.querySelectorAll('.cancel');

const transferButton = document.querySelector('.transfer-button');

// MAIN SECTIONS SELECTION
const figures = document.querySelectorAll('.figures');
const transactionCont = document.querySelector('.transactions');
const containerMovements = document.querySelector('.trans-container');
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
const profileFName = document.querySelector('.profile-first-name');
const profileLName = document.querySelector('.profile-last-name');
const profileAccNo = document.querySelector('.profile-acc-no');
const profileDOB = document.querySelector('.profile-dob');
const logoutButton = document.querySelector('.logout');
const deleteButton = document.querySelector('.option');

// PASSWORD MANAGEMENT PAGE
const oldPassword = document.querySelector('.old-pword');
const newChangedPassword = document.querySelector('.new-pword');
const verifyChangedPassword = document.querySelector('.verify-new-password');
const savePasswordButton = document.querySelector('.savePword-button');
const cancelPwordButton = document.querySelector('.cancel-pword-button');

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

// MOBILE
const homeNavM = document.querySelector('.homeNavM');

// MODALS
const modalBack = document.querySelector('.modal-background');
const allModal = document.querySelectorAll('.modal');
const soonModal = document.querySelector('.coming-soon');
const logoutModal = document.querySelector('.logout-confirmation');
const deleteModal = document.querySelector('.delete-confirmation');
const cross = document.querySelectorAll('.cross-cancel');
const allAccounts = document.querySelector('.all-accounts');
const successModal = document.querySelector('.transaction-success');

// TRANSFER FORMS
const transID = document.querySelector('.transfer-id');
const transAmount = document.querySelector('.transfer-amount');
const transferDesc = document.querySelector('.trans-desc');
const transferPin = document.getElementById('transfer-pin');
const noTransAccError = document.querySelector('.trans-acc-error');
const noTransPinError = document.querySelector('.trans-pin-error');

// LOAN FORMS
const loanAmount = document.querySelector('.loan-input');
const loanButton = document.querySelector('.loan-button');
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
  const options = {
    day: 'numeric',
    year: 'numeric',
    month: 'numeric',
  };

  return new Intl.DateTimeFormat('en-NG', options).format(date);
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
  const nameUser = acct =>
    acct.username.replace(acct.username[0], acct.username[0].toUpperCase());
  userName.textContent = nameUser(acc);
  userName_mobile.textContent = nameUser(acc);

  // settings profile
  const fullName = acc.owner.split(' ');
  profileFName.value = fullName[0].replace(
    fullName[0][0],
    fullName[0][0].toUpperCase()
  );
  profileLName.value = fullName[1].replace(
    fullName[1][0],
    fullName[1][0].toUpperCase()
  );
  profileAccNo.value = acc.accountNo;

  if (!acc.dob) {
    profileDOB.value = 'N/A';
  }
};

// Formating currency
const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
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
  accBalance.textContent = `${formatCur(acc.balance, 'en-NG', 'NGN')}`;
};

// bank alert
const sapaAlert = function (acc) {
  if (acc.balance <= 1000) removeClass(sapa, 'hidden');
  else addClass(sapa, 'hidden');
};

// money in and out
const expenses = function (acc) {
  let credit = acc.movements
    .filter(acc => acc > 0)
    .reduce((acc, cur) => acc + cur, 0)
    .toFixed(2);
  let debit = Math.abs(
    acc.movements.filter(acc => acc < 0).reduce((acc, cur) => acc + cur, 0)
  ).toFixed(2);

  moneyIn.textContent = `${formatCur(credit, 'en-NG', 'NGN')}`;
  moneyOut.textContent = `${formatCur(debit, 'en-NG', 'NGN')}`;
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
  moneyIn.textContent = '₦XXXX.XX';
  moneyOut.textContent = '₦XXXX.XX';
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
  accountNo: '1128863537',
  password: 'jayjay',
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
  desc: [
    'airtime',
    'item7',
    'school fees',
    'stamp fee',
    'payee00',
    'cashier',
    'biro',
  ],
  lastLoginDate: '2021-09-05T17:05:00.000Z',
  dob: '',
};

const account2 = {
  owner: 'Olaleye Rainbow',
  username: 'olaray',
  accountNo: '5215277734',
  password: 'marshala',
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
  desc: [
    'airtime',
    'item7',
    'payee00',
    'school fees',
    'stamp fee',
    'cashier',
    'biro',
  ],
  lastLogin: '2020-05-08T14:11:59.604Z',
  dob: '',
};

const account3 = {
  owner: 'Sheenur Wango',
  username: 'shedeyplay',
  accountNo: '0829498278',
  password: 'shida11',
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
  desc: [
    'airtime',
    'item7',
    'payee00',
    'school fees',
    'stamp fee',
    'cashier',
    'biro',
  ],
  lastLogin: '2020-02-05T16:33:06.386Z',
  dob: '',
};

const account4 = {
  owner: 'Mark Smith',
  username: 'marselle',
  accountNo: '1446709730',
  password: 'marty',
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
  desc: [
    'airtime',
    'item7',
    'payee00',
    'stamp fee',
    'school fees',
    'cashier',
    'biro',
  ],
  lastLogin: '2019-12-23T07:42:02.383Z',
  dob: '',
};

const account5 = {
  owner: 'Kyu Beeg',
  username: 'kepao',
  accountNo: '0223346771',
  password: 'cantthink',
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
  desc: [
    'airtime',
    'item7',
    'payee00',
    'school fees',
    'stamp fee',
    'cashier',
    'biro',
  ],
  lastLogin: '2020-04-10T14:43:26.374Z',
  dob: '',
};

const accounts = [account1, account2, account3, account4, account5];

let curUser, toUser;
curUser = account1;

// ACCOUNT BASED FUNCTIONS
const updateNew = function () {
  // On Login, call date
  const now = updateLoginsDate(new Date());
  loginDate.textContent = `${now}`;

  // calling last login date
  updateLastLogin(curUser);

  // updating user firstname and username
  names(curUser);

  // updating dashboard datas
  dashboard(curUser);
  expenses(curUser);
};

// update transactions
const displayMovemements = function (acc) {
  containerMovements.innerHTML = '';
  acc.movements.forEach((mov, i) => {
    const movDate = acc.movementsDates[i];
    const desc = acc.desc[i];
    const formDate = updateLoginsDate(mov);

    const html = `
    <div class="transaction ${mov > 0 ? 'credit' : 'debit'}">
  <p class="type">${mov > 0 ? 'Credit' : 'Debit'}</p>

  <div class="chunk">
    <p class="desc">${desc.replace(desc[0], desc[0].toUpperCase())}</p>
    <p class="trans-date">${movDate}</p>
  </div>

  <p class="amount">${formatCur(Math.abs(mov), 'en-NG', 'NGN')}</p>
</div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const displayAllAccounts = function (accs) {
  allAccounts.innerHTML = '';
  accs.forEach((acc, i) => {
    if (acc !== curUser) {
      const html = `<div class="accDetails">
      <h4 class="accName">Account ${i}</h4>
      <p class="accNo">${acc.accountNo}</p>
    </div>`;
      allAccounts.insertAdjacentHTML('beforeend', html);
    }
  });
  allAccounts.insertAdjacentHTML('afterbegin', '<h3>ACCOUNTS</h3>');
};

const transferFunds = function () {
  let accInput = transID.value;
  toUser = accounts.find(
    acc => acc.username === accInput || acc.accountNo === accInput
  );

  const amount = Number(transAmount.value);
  const pin = Number(transferPin.value);

  if (toUser && toUser.accountNo !== curUser.accountNo) {
    addClass(noTransAccError, 'hidden');

    if (amount > 0 && amount <= curUser.balance) {
      if (curUser.pin === pin) {
        addClass(noTransPinError, 'hidden');

        toUser.movements.push(amount);
        toUser.movementsDates.push(new Date());

        curUser.movements.push(-amount);
        curUser.movementsDates.push(new Date());

        if (transferDesc.value) {
          toUser.desc.push(transferDesc.value);
          curUser.desc.push(transferDesc.value);
        } else {
          toUser.desc.push('deposit');
          curUser.desc.push('withdrawal');
        }

        transID.value =
          transAmount.value =
          transferPin.value =
          transferDesc.value =
            '';

        removeClass(modalBack, 'hidden');
        removeClass(successModal, 'hidden');

        // Update navs active
        removeAllActive();
        addClass(homeNavD, 'active');
        addClass(homeNavM, 'active');

        // return to main page
        hideFigures();
        hidePages();
        removeClass(homePage, 'hidden');
        removeClass(transactionCont, 'hidden');
        removeClass(transactionCont, 'side-transitions');
      } else removeClass(noTransPinError, 'hidden');
    }
  } else removeClass(noTransAccError, 'hidden');
};

const requestLoan = function (acc) {
  const amount = Number(loanAmount.value);

  if (amount && amount <= acc.balance * 0.5 && amount > 0) {
    curUser.movements.push(amount);
    curUser.movementsDates.push(new Date());
    curUser.desc.push('Loan');

    loanAmount.value = '';

    removeClass(modalBack, 'hidden');
    removeClass(successModal, 'hidden');

    // Update navs active
    removeAllActive();
    addClass(homeNavD, 'active');
    addClass(homeNavM, 'active');

    // return to main page
    hideFigures();
    hidePages();
    removeClass(homePage, 'hidden');
    removeClass(transactionCont, 'hidden');
    removeClass(transactionCont, 'side-transitions');
  }
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//display
updateNew();
displayMovemements(curUser);
crossEye.addEventListener('click', function () {
  toggleClass(crossEye, 'hidden');
  toggleClass(eye, 'hidden');

  // accBalance.textContent = `₦${curUser.balance}`;
  accBalance.textContent = `${formatCur(curUser.balance, 'en-NG', 'NGN')}`;
  expenses(curUser);
});

displayAllAccounts(accounts);

// TRANSFER EVENT
transferButton.addEventListener('click', function (e) {
  e.preventDefault();

  // actual transfer check and implementation
  transferFunds();

  // update dashbord balances
  dashboard(curUser);
  expenses(curUser);

  // update movements container
  displayMovemements(curUser);

  // low balance check
  sapaAlert(curUser);
});

// LOAN EVENT
loanButton.addEventListener('click', function (e) {
  e.preventDefault();

  // Loan implementation
  requestLoan(curUser);

  // update dashbord balances
  dashboard(curUser);
  expenses(curUser);

  // update movements container
  displayMovemements(curUser);

  // low balance check
  sapaAlert(curUser);
});
