#!/usr/bin/env node

const conversions = [
    'Conversions:\n',
    '  1rem            16px\n',
    '  2rem            32px\n',
    '  3rem            48px\n',
    '  4rem            64px\n',
    '  5rem            80px\n',
    '  6rem            96px\n',
    '  7rem           112px\n',
    '  8rem           128px\n',
    '  9rem           144px\n',
    ' 10rem           160px\n',
    '\n',
].join("")


function convert(num) {
    if (num == "") {
        console.log(conversions);
        process.exit(1);
    }
    else {
        console.log(`${num / 16}rem`);
    }

}

module.exports.convert = convert;