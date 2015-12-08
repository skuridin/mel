import test from 'tape';

test('Just another example', t => {
  t.ok(Date.now() > 0);
  t.notOk(Date.now() === 0);
  t.equal(1, 2 - 1);
  t.end();
});
