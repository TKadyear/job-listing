/*  Esta función equivale al setListFilter del componente
 * Por eso tiene el prev, ya que depende de el useState del componente.
*/
const addToListFilter = (value, prev = []) => {
  return !prev.includes(value) && (value.constructor === String)
    ? [...prev, value]
    : [...prev];
};
const isTheJobMatchFilter = (job, filters) => {
  const relevantInfoForFilter = [job.role, job.level, ...job.languages, ...job.tools];
  const checkIfMatch = filters.map(filter => {
    return relevantInfoForFilter.includes(filter)
  });
  const isValid = checkIfMatch.every(value => value === true);
  return isValid;
}
const filterAllJobs = (state, filters) => {
  if (filters.length > 0) {
    const filtered = [...state].filter(job => {
      if (isTheJobMatchFilter(job, filters)) {
        return job;
      }
    })
    return filtered;
  }
  return state;
}
module.exports = { addToListFilter, filterAllJobs, isTheJobMatchFilter }
