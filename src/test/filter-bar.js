/*  Esta función equivale al setListFilter del componente
 * Por eso tiene el prev, ya que depende de el useState del componente.
*/
const addToListFilter = (value, prev = []) => {
  return !prev.includes(value) && (value.constructor === String)
    ? [...prev, value]
    : [...prev];
};

module.exports = { addToListFilter }
