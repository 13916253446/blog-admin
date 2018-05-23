
function getKeys(obj) {
  var hasOwnProperty = Object.prototype.hasOwnProperty,
    list = [], key;
  for (key in obj) {
    if (hasOwnProperty.call(obj, key)) {
      list.push(key);
    }
  }
  return list;
}

function encode(v) {
  switch (typeof v) {
    case 'string':
      return encodeURIComponent(v);
    case 'boolean':
      return v ? 'true' : 'false';
    case 'number':
      return isFinite(v) ? v : '';
    case 'object':
      if (v === undefined || v === null) { return ''; }
      if (JSON && JSON.stringify) { return encodeURIComponent(JSON.stringify(v)); }
      return '';
    default:
      return '';
  }
}

//  深度序列化
export function stringify(obj, delimiter, eq) {
  delimiter = delimiter || '&';
  eq = eq || '=';

  // sanity check
  if ((typeof obj !== 'object' && typeof obj !== 'function') || obj === null) { return ''; }

  // get obj keys
  var keys = getKeys(obj);

  // sanity check
  if (!keys || !keys.length) { return ''; }

  var list = [];
  var i = 0, j, k, v;

  // enumerate key/values
  for (; i < keys.length; i++) {
    k = encode(keys[i]);
    v = obj[k];
    // check value type (ignore undefined and function)
    if (v !== undefined && typeof v !== 'function') {
      if (Array.isArray(v)) {
        for (j = 0; j < v.length; ++j) {
          list.push(k + eq + (v[j] ? encode(v[j]) : ''));
        }
      } else {
        // try to encode
        if (v !== null) {
          v = encode(v);
        }
        // check final v value and add to list
        list.push((v === null || v === undefined) ? k : k + eq + v);
      }
    }
  }
  // concatenate final string
  return list.join(delimiter);
}

export default {
  //  深度序列化
  stringify
}