const fs = require('fs');

const file = 'i18n_backup.txt'; // use original backup to start fresh
let source = fs.readFileSync(file, 'utf8');

const newTrans = JSON.parse(fs.readFileSync('new_translations.json', 'utf8'));

// 1. Update the Translation interface
const newInterfaceS4 = `  s4: {
    tag: string;
    title1: string;
    title2: string;
    sub2: string;
    b1: string;
    b2: string;
    b3: string;
    b4: string;
    b5: string;
    b6: string;
    choose: string;
    c1_name: string;
    c1_price: string;
    c1_desc: string;
    includes: string;
    c1_i1: string;
    c1_i2: string;
    c1_i3: string;
    c1_i4: string;
    c1_i5: string;
    c1_i6: string;
    c1_i7: string;
    c1_i8: string;
    c1_note: string;
    c1_btn: string;
    c2_name: string;
    c2_price: string;
    c2_desc: string;
    c2_i1: string;
    c2_i2: string;
    c2_i3: string;
    c2_i4: string;
    c2_i5: string;
    c2_i6: string;
    c2_i7: string;
    c2_i8: string;
    c2_i9: string;
    c2_i10: string;
    c2_i11: string;
    c2_note: string;
    c2_btn: string;
    also_title: string;
    a1: string;
    a2: string;
    a3: string;
    a4: string;
    a5: string;
    close_title: string;
    disclaimer: string;
  };`;

const oldInterfaceS4Regex = /s4:\s*\{\s*(?:[a-zA-Z0-9_]+:\s*string;\s*)+\};/;
source = source.replace(oldInterfaceS4Regex, newInterfaceS4);

const newInterfaceS5 = `  s5: {
    title_new: string;
    sub_new: string;
    desc1_new: string;
    desc2_new: string;
    p_new: string;
    tag_new: string;
  };`;
const oldInterfaceS5Regex = /s5:\s*\{\s*(?:[a-zA-Z0-9_]+:\s*string;\s*)+\};/;
source = source.replace(oldInterfaceS5Regex, newInterfaceS5);

const newInterfaceS7 = `  s7: {
    title_new: string;
    sub_new: string;
    desc_new: string;
    btn_new: string;
    note_new: string;
    micro_new: string;
  };`;
const oldInterfaceS7Regex = /s7:\s*\{\s*(?:[a-zA-Z0-9_]+:\s*string;\s*)+\};/;
source = source.replace(oldInterfaceS7Regex, newInterfaceS7);

// Add badge_lux to hero in interface
source = source.replace(/subtitle:\s*string;\s*cta:\s*string;\s*micro:\s*string;\s*\};/, 'subtitle: string;\n    cta: string;\n    micro: string;\n    badge_lux: string;\n  };');


const languages = ['es', 'pt', 'en', 'fr', 'de', 'pl', 'uk', 'ru', 'nl', 'sv', 'no'];

languages.forEach(lang => {
  const trans = newTrans[lang];
  if (!trans) return;
  
  // badge_lux injection
  const heroRegex = new RegExp("(\\s*" + lang + ": \\{\\s*hero: \\{[\\s\\S]*?micro: )(\".*?\")(.*?)(\\},)");
  source = source.replace(heroRegex, (match, before, microVal, afterMicro, endBrace) => {
    return before + microVal + ",\n        badge_lux: " + JSON.stringify(trans.badge_lux) + afterMicro + endBrace;
  });
  
  const s4Str = JSON.stringify(trans.s4, null, 2)
    .replace(/\n/g, '\n    ')
    .replace(/\s+"(\w+)":/g, '\n      $1:');
  const s5Str = JSON.stringify(trans.s5, null, 2)
    .replace(/\n/g, '\n    ')
    .replace(/\s+"(\w+)":/g, '\n      $1:');
  const s7Str = JSON.stringify(trans.s7, null, 2)
    .replace(/\n/g, '\n    ')
    .replace(/\s+"(\w+)":/g, '\n      $1:');
  
  // replace s4 completely
  const regexS4 = new RegExp("(\\s*" + lang + ": \\{[\\s\\S]*?s3: \\{[\\s\\S]*?\\},\\s*)s4: \\{[\\s\\S]*?\\}(,\\s*s5:)");
  source = source.replace(regexS4, (m, before, after) => before + "s4: " + s4Str + after);
  
  // replace s5 completely
  const regexS5 = new RegExp("(\\s*" + lang + ": \\{[\\s\\S]*?s4: \\{[\\s\\S]*?\\},\\s*)s5: \\{[\\s\\S]*?\\}(,\\s*s6:)");
  source = source.replace(regexS5, (m, before, after) => before + "s5: " + s5Str + after);

  // replace s7 completely
  const regexS7 = new RegExp("(\\s*" + lang + ": \\{[\\s\\S]*?s6: \\{[\\s\\S]*?\\},\\s*)s7: \\{[\\s\\S]*?\\}(,\\s*selector:)");
  source = source.replace(regexS7, (m, before, after) => before + "s7: " + s7Str + after);

});

fs.writeFileSync('src/lib/i18n.tsx', source);
console.log('Update complete!');
