import test from 'tape';

test('Just another example', t => {
  t.ok(true === true);
  t.notOk(true === false);
  t.equal(1, 1);
  t.end();
});
