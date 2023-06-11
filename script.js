// 'use strict';

// GENERAL ELEMENTS SELECTION
const body = document.querySelector('body');
const mainApp = document.querySelector('.app');
const loginDate = document.querySelector('.date-now');
const lastLogin = document.querySelector('.last-date');
const userFirstName = document.querySelector('.userFN');
const userName = document.querySelector('.userName');
const userName_mobile = document.querySelector('.user-mobile');
const sapa = document.querySelector('.sapa');

const hamburger = document.querySelector('.menu-icon');
const marquee = document.querySelector('.sapa');
const user = document.querySelector('.user-icon');
const users = document.querySelector('.users');

const pages = document.querySelectorAll('.pages');
const homePage = document.querySelector('.home-page');
const cancel = document.querySelectorAll('.cancel');

const transferButton = document.querySelector('.transfer-button');

// LOGIN AND CREATE ACCOUNTS
const loginContainer = document.querySelector('.login-container');
const loginForm = document.querySelector('.login-form');
const createForm = document.querySelector('.create');

const loginID = document.querySelector('.login-id');
const loginPword = document.querySelector('.login-password');
const firstNameInput = document.querySelector('.Fname');
const lastnameInput = document.querySelector('.Lname');
const createUsername = document.querySelector('.create-username');
const secretPin = document.querySelector('.secret-pin');
const createDOB = document.querySelector('.createDOB');
const createPword = document.querySelector('.newPword');
const confirmPword = document.querySelector('.validPword');

const loginError = document.querySelector('.login-error');
const createPasswordError = document.querySelector('.create-error');
const errorUsername = document.querySelector('.username-create-error');

const loginButton = document.querySelector('.login-button');
const createButton = document.querySelector('.register-button');

const createPrompt = document.querySelector('.create-account');
const loginPrompt = document.querySelector('.back-login');

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
const verifyChangedPassword = document.querySelector('.verify-new-pword');
const savePasswordButton = document.querySelector('.savePword-button');
const cancelPwordButton = document.querySelector('.cancel-pword-button');
const changeerror = document.querySelector('.change-error');

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
const instructions = document.querySelector('.instructions');
const accInfo = document.querySelector('.acc-co-pword');
const soonModal = document.querySelector('.coming-soon');
const logoutModal = document.querySelector('.logout-confirmation');
const deleteModal = document.querySelector('.delete-confirmation');
const cross = document.querySelectorAll('.cross-cancel');
const allAccounts = document.querySelector('.all-accounts');
const successModal = document.querySelector('.transaction-success');

// MODAL CONTENTS
const accInfoDetails = document.querySelector('.acc-details');
const logoutYesButton = document.querySelector('.logout-Mbuttons');
const deleteYesButton = document.querySelector('.delete');

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

// ACCIDENTAL RELOAD OR EXIT CONFIRMATION
window.onbeforeunload = function (e) {
  return "Please click 'Stay on this Page' if you did this unintentionally";
};

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
    // addClass(el, 'modal-transition');
  });

  addClass(modalBack, 'hidden');
  addClass(allAccounts, 'hidden');

  addClass(mobileAside, 'hidden');
};

// display manual modal
const showManual = function () {
  removeClass(modalBack, 'hidden');
  instructions.style.opacity = 0;
  removeClass(instructions, 'hidden');
  setTimeout(() => {
    instructions.style.opacity = 100;
  }, 1000);
};

showManual();

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
    acc.lastLoginDate = new Date();
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

  if (acc.dob) profileDOB.value = acc.dob;
  else profileDOB.value = 'N/A';
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
  if (loginContainer.classList.contains('hidden')) {
    removeClass(modalBack, 'hidden');
    removeClass(mobileAside, 'hidden');
  }
});

user.addEventListener('click', function () {
  addClass(homePage, 'hidden');

  removeClass(settingPage, 'hidden');

  addClass(settingItems, 'hidden');
  addClass(settingItems, 'side-transitions-left');

  settingGroups.forEach(el => {
    addClass(el, 'hidden');
    addClass(el, 'side-transitions');
  });

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

    target.style.opacity = 0;

    removeClass(modalBack, 'hidden');

    removeClass(target, 'hidden');
    // removeClass(target, 'modal-transitions');
    setTimeout(() => {
      target.style.opacity = 100;
    }, 100);
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
    addClass(homeNavM, 'active');
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
let accounts = [
  {
    owner: 'Julian Moses',
    username: 'jaylam',
    accountNo: '1128863537',
    password: 'jayjay',
    movements: [300, -4000, 10000, 30, 7000, -800.5, -60],
    pin: 1515,
    movementsDates: [
      '2023-01-28T09:15:04.904Z',
      '2023-03-28T23:36:17.929Z',
      '2023-04-01T10:17:24.185Z',
      '2023-04-26T17:01:17.194Z',
      '2023-05-08T14:11:59.604Z',
      '2023-05-18T21:31:17.178Z',
      '2023-05-28T07:42:02.383Z',
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
    lastLoginDate: '2023-05-23T17:05:00.000Z',
    dob: '1992-03-01',
  },
  {
    owner: 'Olaleye Rainbow',
    username: 'olaray',
    accountNo: '5215277734',
    password: 'marshala',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    pin: 1111,
    movementsDates: [
      '2023-01-25T14:18:46.235Z',
      '2023-02-05T16:33:06.386Z',
      '2023-04-01T10:17:24.185Z',
      '2023-04-10T14:43:26.374Z',
      '2023-04-25T06:04:23.907Z',
      '2023-04-30T09:48:16.867Z',
      '2023-05-01T13:15:33.035Z',
      '2023-05-11T10:51:36.790Z',
    ],
    desc: [
      'fish',
      'voucher',
      'swimming',
      'franc',
      'milk fee',
      'cashier',
      'drink',
      'pen',
    ],
    lastLoginDate: '2023-05-11T14:11:59.604Z',
    dob: '1999-02-01',
  },
  {
    owner: 'Sheenur Wango',
    username: 'shedeyplay',
    accountNo: '0829498278',
    password: 'shida11',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    pin: 2222,
    movementsDates: [
      '2023-02-05T16:33:06.386Z',
      '2023-03-26T17:01:17.194Z',
      '2023-03-28T23:36:17.929Z',
      '2023-04-01T10:17:24.185Z',
      '2023-05-08T14:11:59.604Z',
      '2023-05-18T21:31:17.178Z',
      '2023-05-23T07:42:02.383Z',
      '2023-05-28T09:15:04.904Z',
    ],
    desc: [
      'juice',
      'spotify',
      'crunchyroll',
      'subs',
      'stamp fee',
      'giveaway',
      'biscuits',
      'pen',
    ],
    lastLoginDate: '2023-05-28T16:33:06.386Z',
    dob: '2005-03-19',
  },
  {
    owner: 'Mark Smith',
    username: 'marselle',
    accountNo: '1446709730',
    password: 'marty',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    pin: 3333,
    movementsDates: [
      '2023-01-25T14:18:46.235Z',
      '2023-02-05T16:33:06.386Z',
      '2023-04-10T14:43:26.374Z',
      '2023-05-01T13:15:33.035Z',
      '2023-05-30T09:48:16.867Z',
      '2023-05-25T06:04:23.907Z',
      '2023-05-26T10:51:36.790Z',
      '2023-05-27T10:17:24.185Z',
    ],
    desc: [
      'apples',
      'bread',
      'payee00',
      'stamp fee',
      'pies',
      'wages',
      'ink',
      'pen',
    ],
    lastLoginDate: '2023-05-27T07:42:02.383Z',
    dob: '2000-10-25',
  },
  {
    owner: 'Kyu Beeg',
    username: 'kepao',
    accountNo: '0223346771',
    password: 'cantthink',
    movements: [430, 1000, 700, 50, 90],
    pin: 4444,
    movementsDates: [
      '2023-05-18T14:11:59.604Z',
      '2023-05-23T10:17:24.185Z',
      '2023-05-26T09:15:04.904Z',
      '2023-05-27T07:42:02.383Z',
      '2023-05-28T21:31:17.178Z',
    ],
    desc: ['meat', 'clothes', 'car', 'phones', 'tty'],
    lastLoginDate: '2023-05-28T14:43:26.374Z',
    dob: '1980-12-19',
  },
];

// Saving to localStorage
const setLocalStorage = function () {
  localStorage.setItem('accounts', JSON.stringify(accounts));
};

// retrieving from localStorage
const getLocalStorage = function () {
  const data = JSON.parse(localStorage.getItem('accounts'));
  if (!data) return;

  accounts = data;
};

// retrieve item from localStorage
getLocalStorage();

let curUser, toUser;

//////////////////////////////////////////////////////////////////////////////////////////
// ACCOUNT BASED FUNCTIONS

// Update account logins modal
const allAccInfo = function () {
  accInfoDetails.innerHTML = '';
  let i = 1;
  accounts.forEach(acc => {
    const accInfoUser = acc.username;
    const accInfoPword = acc.password;
    const accInfoPin = acc.pin;

    const html = `<div class="logins">
    <h4>Account ${i}</h4>
    <p class="username-details">Username: ${accInfoUser}</p>
    <p class="password-details">Password: ${accInfoPword}</p>
    <p class="password-details">Transfer Pin: ${accInfoPin}</p>
  </div>`;
    accInfoDetails.insertAdjacentHTML('beforeend', html);
    i++;
  });
};

allAccInfo();

// update users info
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

// MOVEMENT DATE
const formatMovementDate = function (date) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  return updateLoginsDate(date);
};

// update transactions
const displayMovemements = function (acc) {
  containerMovements.innerHTML = '';
  acc.movements.forEach((mov, i) => {
    const movDate = acc.movementsDates[i];
    const desc = acc.desc[i];
    const date = new Date(movDate);
    const formDate = formatMovementDate(date);

    const html = `
    <div class="transaction ${mov > 0 ? 'credit' : 'debit'}">
  <p class="type">${mov > 0 ? 'Credit' : 'Debit'}</p>

  <div class="chunk">
    <p class="desc">${desc.replace(desc[0], desc[0].toUpperCase())}</p>
    <p class="trans-date">${formDate}</p>
  </div>

  <p class="amount">${formatCur(Math.abs(mov), 'en-NG', 'NGN')}</p>
</div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const displayAllAccounts = function (accs) {
  allAccounts.innerHTML = '';
  let i = 0;
  accs.forEach(acc => {
    if (acc !== curUser) {
      i++;
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
      if (transferPin.value && curUser.pin === pin) {
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

        // Save to localStorage
        setLocalStorage();
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

    // Save to localStorage
    setLocalStorage();
  }
};

// generate account number
const generateNum = function () {
  let num = '';
  for (let i = 0; i < 10; i++) {
    num += Math.floor(Math.random() * 9) + 1;
  }

  return num;
};

// LOGGING IN FUNC
const login = function () {
  // retrieve item from localStorage
  getLocalStorage();

  // input values check
  const log = loginID.value.toLowerCase().trim();
  const logP = loginPword.value.toLowerCase().trim();
  if (log && logP) {
    curUser = accounts.find(
      acc => acc.username === log || acc.accountNo === log
    );

    addClass(loginError, 'hidden');
    if (curUser && curUser.password === logP) {
      loginContainer.style.opacity = 0;
      mainApp.style.opacity = 0;
      loginID.value =
        loginPword.value =
        firstNameInput.value =
        lastnameInput.value =
        createUsername.value =
        secretPin.value =
        createDOB.value =
        createPword.value =
        confirmPword.value =
          '';

      updateNew();
      displayMovemements(curUser);
      displayAllAccounts(accounts);

      addClass(loginError, 'hidden');
      addClass(crossEye, 'hidden');
      removeClass(eye, 'hidden');

      // Save to localStorage
      setLocalStorage();

      setTimeout(function () {
        addClass(loginContainer, 'hidden');
        loginContainer.style.opacity = 100;
        removeClass(mainApp, 'hidden');
      }, 1000);

      setTimeout(function () {
        mainApp.style.opacity = 100;
        removeClass(user, 'hidden');
        sapaAlert(curUser);
      }, 2000);
    } else {
      removeClass(loginError, 'hidden');
    }
  } else {
    removeClass(loginError, 'hidden');
  }
};

// RETURN TO LOGIN FORM
const loginReturn = function () {
  createForm.style.transform = 'translateX(1000px)';

  addClass(loginError, 'hidden');
  addClass(errorUsername, 'hidden');
  addClass(createPasswordError, 'hidden');
  loginID.value =
    loginPword.value =
    firstNameInput.value =
    lastnameInput.value =
    createUsername.value =
    secretPin.value =
    createDOB.value =
    createPword.value =
    confirmPword.value =
      '';

  setTimeout(function () {
    addClass(createForm, 'hidden');
    removeClass(loginForm, 'hidden');
  }, 100);

  setTimeout(function () {
    loginForm.style.transform = 'translateX(0px)';
    createForm.style.transform = 'translateX(0px)';
  }, 200);
};

// CREATING ACCOUNT FUNC
const createAccount = function () {
  const f = firstNameInput.value;
  const l = lastnameInput.value;
  const u = createUsername.value;
  const p = secretPin.value;
  const cp = createPword.value;
  const vp = confirmPword.value;
  const fullName = [f.toLowerCase().trim(), l.toLowerCase().trim()].join(' ');
  const username = u.toLowerCase().trim();
  const accPin = Number(p.trim());
  const newPword = cp.toLowerCase().trim();
  const verifyNewPword = vp.toLowerCase().trim();

  // input values check
  if (f && l && username && accPin && newPword && verifyNewPword) {
    // check if username exist
    const check = [];
    accounts.forEach(acc => {
      if (acc.username == username) check.push(0);
      else check.push(1);
    });

    // check validation
    if (!check.includes(0)) {
      addClass(errorUsername, 'hidden');

      // password check
      if (newPword === verifyNewPword) {
        addClass(createPasswordError, 'hidden');

        accounts.push({
          owner: fullName,
          username: username,
          password: newPword,
          movements: [10000],
          pin: accPin,
          movementsDates: [],
          desc: ['welcome bonus'],
          lastLoginDate: '',
          dob: '',
        });

        if (createDOB.value)
          accounts[accounts.length - 1].dob = createDOB.value;
        else accounts[accounts.length - 1].dob = '';

        accounts[accounts.length - 1].movementsDates.push(new Date());

        //  account number
        let num = generateNum();

        // check if account number exist
        const checkNum = [];
        accounts.forEach(acc => {
          if (acc.accountNo == num) check.push(0);
          else check.push(1);
        });

        // check validation
        if (!checkNum.includes(0))
          accounts[accounts.length - 1].accountNo = num;
        else accounts[accounts.length - 1].accountNo = generateNum();

        curUser = accounts[accounts.length - 1];

        // toggle UI
        updateNew();
        displayMovemements(curUser);
        displayAllAccounts(accounts);

        addClass(loginError, 'hidden');
        addClass(crossEye, 'hidden');
        addClass(users, 'hidden');
        removeClass(eye, 'hidden');
        curUser.lastLoginDate = new Date();

        loginContainer.style.opacity = 0;
        mainApp.style.opacity = 0;

        setTimeout(function () {
          addClass(loginContainer, 'hidden');
          loginContainer.style.opacity = 100;
          removeClass(mainApp, 'hidden');
        }, 800);

        setTimeout(function () {
          mainApp.style.opacity = 100;
          removeClass(user, 'hidden');
        }, 1200);

        loginID.value =
          loginPword.value =
          firstNameInput.value =
          lastnameInput.value =
          createUsername.value =
          secretPin.value =
          createDOB.value =
          createPword.value =
          confirmPword.value =
            '';

        loginReturn();

        // save to localStorage
        setLocalStorage();

        // Rterieve
        getLocalStorage();
      } else removeClass(createPasswordError, 'hidden');
    } else removeClass(errorUsername, 'hidden');
  }
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//display
// LOGIN
loginButton.addEventListener('click', function (e) {
  e.preventDefault();
  login();
});

// CREATE ACCOUNT
createButton.addEventListener('click', function (e) {
  e.preventDefault();
  createAccount();
});

// LOGOUT
const logoutYes = function () {
  mainApp.style.opacity = 0;
  loginContainer.style.opacity = 0;

  // hide modals
  hideModal();
  removeClass(users, 'hidden');
  // Update navs active
  removeAllActive();
  addClass(homeNavD, 'active');
  addClass(homeNavM, 'active');

  // hide sapa alert
  addClass(sapa, 'hidden');

  // return to main page
  hideFigures();
  hidePages();
  removeClass(homePage, 'hidden');
  removeClass(transactionCont, 'hidden');
  removeClass(transactionCont, 'side-transitions');
  curUser = '';

  addClass(noTransAccError, 'hidden');
  addClass(noTransPinError, 'hidden');
  addClass(user, 'hidden');

  transAmount.value =
    transID.value =
    transferPin.value =
    transferDesc.value =
    loanAmount.value =
    oldPassword.value =
    newChangedPassword.value =
    verifyChangedPassword.value =
      '';

  setTimeout(() => {
    removeClass(loginContainer, 'hidden');
    addClass(mainApp, 'hidden');
  }, 1500);

  setTimeout(function () {
    loginContainer.style.opacity = 100;
  }, 2000);
};

logoutYesButton.addEventListener('click', logoutYes);

// DELETE ACCOUNT
deleteYesButton.addEventListener('click', function () {
  // find account index
  const index = accounts.findIndex(acc => acc.username === curUser.username);

  // delete
  accounts.splice(index, 1);

  // logout
  logoutYes();
});

// CREATE FORM
createPrompt.addEventListener('click', function () {
  loginForm.style.transform = 'translateX(-1000px)';
  createForm.style.transform = 'translateX(1000px)';

  addClass(loginError, 'hidden');
  addClass(errorUsername, 'hidden');
  addClass(createPasswordError, 'hidden');
  loginID.value =
    loginPword.value =
    firstNameInput.value =
    lastnameInput.value =
    createUsername.value =
    secretPin.value =
    createDOB.value =
    createPword.value =
    confirmPword.value =
      '';

  setTimeout(function () {
    addClass(loginForm, 'hidden');
    removeClass(createForm, 'hidden');
  }, 100);

  setTimeout(function () {
    createForm.style.transform = 'translateX(0px)';
  }, 200);
});

// LOGIN PROMPT
loginPrompt.addEventListener('click', loginReturn);

crossEye.addEventListener('click', function () {
  toggleClass(crossEye, 'hidden');
  toggleClass(eye, 'hidden');

  // accBalance.textContent = `₦${curUser.balance}`;
  accBalance.textContent = `${formatCur(curUser.balance, 'en-NG', 'NGN')}`;
  expenses(curUser);
});

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

// Updating password
savePasswordButton.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    oldPassword.value &&
    newChangedPassword.value &&
    verifyChangedPassword.value
  ) {
    addClass(changeerror, 'hidden');

    if (
      newChangedPassword.value.toLowerCase() ===
        verifyChangedPassword.value.toLowerCase() &&
      oldPassword.value.toLowerCase() === curUser.password
    ) {
      console.log(
        oldPassword.value,
        newChangedPassword.value,
        verifyChangedPassword.value,
        curUser.password
      );
      addClass(changeerror, 'hidden');
      curUser.password = verifyChangedPassword.value;
      oldPassword.value =
        newChangedPassword.value =
        verifyChangedPassword.value =
          '';
    } else removeClass(changeerror, 'hidden');
  } else removeClass(changeerror, 'hidden');
});

cancelPwordButton.addEventListener('click', function (e) {
  e.preventDefault();
  oldPassword.value =
    newChangedPassword.value =
    verifyChangedPassword.value =
      '';
  removeClass(changeerror, 'hidden');
});

// All accounts logins
users.addEventListener('click', function () {
  removeClass(modalBack, 'hidden');
  removeClass(accInfo, 'hidden');
});
