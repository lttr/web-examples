
let a = 1;
a = (a = a + 1, a);
console.log('a =', a);

let b = 1;
b = b + 1, b;
console.log('b =', b);

const c = 0 || 1;
console.log('c =', c);

const d = 1 || 0;
console.log('d =', d);

const e = 0 | 1;
console.log('e =', e);

const f = 1 | 0;
console.log('f =', f);

const g = 0 && 1;
console.log('g =', g);

const h = 1 && 0;
console.log('h =', h);

const i = !0;
console.log('i =', i);

const j = 0 & 1;
console.log('j =', j);

const k = 1 & 0;
console.log('k =', k);

const l = '' || 'foo';
console.log('l =', l);

const m = 'foo' || '';
console.log('m =', m);

const n = '' | 'foo';
console.log('n =', n);

const o = 'foo' | '';
console.log('o =', o);

const p = '' && 'foo';
console.log('p =', p);

const q = 'foo' && '';
console.log('q =', q);

const r = !'';
console.log('r =', r);

const s = '' & 'foo';
console.log('s =', s);

const t = 'foo' & '';
console.log('t =', t);

const u = 0 ? 'foo' : 'bar';
console.log('u =', u)

const v = 'foo' ? 1 : 0;
console.log('v =', v)

const w = !!console;
console.log('w =', w);

const x = y = 1;
console.log('x =', x)
console.log('y =', y)

const z = true + true;
console.log('z =', z)