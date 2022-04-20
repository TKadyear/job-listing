/*  Esta función equivale al setListFilter del componente
 * Por eso tiene el prev, ya que depende de el useState del componente.
*/

export const isTheJobMatchFilter = (job, filters) => {
  const relevantInfoForFilter = [job.role, job.level, ...job.languages, ...job.tools];
  const checkIfMatch = filters.map(filter => {
    return relevantInfoForFilter.includes(filter)
  });
  const isValid = checkIfMatch.every(value => value === true);
  return isValid;
}
