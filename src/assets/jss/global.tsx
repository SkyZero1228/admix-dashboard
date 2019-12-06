const blackColor = '#000';
const whiteColor = '#FFF';
const sidebarColor = '#063A77';
const statusLabelColor = '#8693a1';
const statusBlueColor = '#c62828';
const statusYellowColor = '#f1ac13';
const statusGreenColor = '#59a800';
const grayColor = [
    '#999',
    '#777',
    '#3C4858',
    '#AAAAAA',
    '#D2D2D2',
    '#DDD',
    '#b4b4b4',
    '#555555',
    '#333',
    '#a9afbb',
    '#eee',
    '#e7e7e7'
];
const pageFontColor = '#0b3a5e';
const pageBackColor = '#f0f3f7';

const drawerWidth = 100;

const container = {
    paddingRight: '15px',
    paddingLeft: '15px',
    marginRight: 'auto',
    marginLeft: 'auto'
  };

const hexToRgb = (input: any) => {
    input = input + '';
    input = input.replace('#', '');
    let hexRegex = /[0-9A-Fa-f]/g;
    if (!hexRegex.test(input) || (input.length !== 3 && input.length !== 6)) {
        throw new Error('input is not a valid hex color.');
    }
    if (input.length === 3) {
        let first = input[0];
        let second = input[1];
        let last = input[2];
        input = first + first + second + second + last + last;
    }
    input = input.toUpperCase(input);
    let first = input[0] + input[1];
    let second = input[2] + input[3];
    let last = input[4] + input[5];
    return (
        parseInt(first, 16) +
        ', ' +
        parseInt(second, 16) +
        ', ' +
        parseInt(last, 16)
    );
};

const transition = {
    transition: 'all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)'
};

const defaultFont = {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 300,
    lineHeight: '1.5em'
};

const pageTitleFont = {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 700,
    fontSize: '26px',
    letterSpacing: '1px'
}

const boxShadow = {
    boxShadow:
        '0 10px 30px -12px rgba(' +
        hexToRgb(blackColor) +
        ', 0.42), 0 4px 25px 0px rgba(' +
        hexToRgb(blackColor) +
        ', 0.12), 0 8px 10px -5px rgba(' +
        hexToRgb(blackColor) +
        ', 0.2)'
};

export {
    hexToRgb,
    defaultFont,
    pageTitleFont,
    blackColor,
    whiteColor,
    sidebarColor,
    grayColor,
    pageFontColor,
    pageBackColor,
    statusLabelColor,
    statusBlueColor,
    statusYellowColor,
    statusGreenColor,
    boxShadow,
    drawerWidth,
    transition,
    container
}