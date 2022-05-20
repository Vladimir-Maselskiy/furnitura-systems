import { numberAfterDecimalPoint } from '../const';
import { getTotalPriceCoefficient } from '../calcFuncs/getTotalPriceCoefficient';
import { makeTotalOrderValue } from '../calcFuncs/getTotalOrderValue';
import { refs } from '../refs';
import { createSmallOrderTable } from './createSmallOrderTable';
import { createNormalOrderTable } from './createNormalOrderTable';

export function makeRenderOrder(order) {
  const screenExtansion = window.screen.availWidth;
  let markup = '';
  if (screenExtansion < 400) {
    markup = createSmallOrderTable(order);
  }

  if (screenExtansion > 400) {
    markup = createNormalOrderTable(order);
  }

  const tableRef = document.querySelector('table');
  if (tableRef) tableRef.remove();

  refs.table = document.createElement('table');
  refs.table.innerHTML = markup;
  refs.form.insertAdjacentElement('afterend', refs.table);
}