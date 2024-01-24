/**
 * 주어진 숫자 또는 숫자 형태의 문자열을 한국어 형식의 문자열로 변환합니다.
 * 숫자의 경우, 세 자리마다 콤마(,)가 찍혀서 반환됩니다.
 *
 * @param {number | string} value - 한국어 형식으로 변환할 숫자 또는 숫자 형태의 문자열.
 * @returns {string} 변환된 한국어 형식의 문자열, 숫자의 경우 세 자리마다 콤마가 찍힌 형태.
 */
function toLocaleString(value: number | string): string {

    return value.toLocaleString('ko-KR');

}

export default {toLocaleString};
