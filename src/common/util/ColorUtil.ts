/**
 * 주어진 기본 색상(baseColor)의 밝기를 주어진 퍼센트(amount)만큼 감소시켜 어둡게 조절하여 RGB 또는 RGBA 문자열 형태로 반환합니다.
 * amount는 각 RGB 컴포넌트의 최대값(255)에 대한 퍼센트로 적용됩니다. RGBA 형식의 경우 알파 값은 변경되지 않습니다.
 *
 * @param {string} baseColor - 'rgb(x, y, z)' 또는 'rgba(x, y, z, a)' 형태의 색상 문자열입니다. 여기서 x, y, z는 각각 빨강, 초록, 파랑 색상의 밝기를, a는 알파(투명도) 값을 나타냅니다.
 * @param {number} amount - 기본 색상을 어둡게 할 퍼센트입니다. 이 값은 각 RGB 컴포넌트 값을 기준으로 밝기를 감소시킵니다.
 * @returns {string} 어둡게 조절된 색상의 'rgb(x, y, z)' 또는 'rgba(x, y, z, a)' 형태의 문자열을 반환합니다. 모든 색상 값은 0 이상이어야 합니다.
 */
function shadeColor(baseColor: string, amount: number): string {
    const isRGBA = baseColor.startsWith('rgba');
    const baseColorRGB = baseColor.match(/\d+(\.\d+)?/g).map(Number);
    const alpha = isRGBA ? baseColorRGB.pop() : 1;
    const shadedColor = baseColorRGB.map((color) => Math.max(0, color - (color * (amount / 100))));

    return isRGBA ? `rgba(${shadedColor.join(',')},${alpha})` : `rgb(${shadedColor.join(',')})`;
}


/**
 * 주어진 기본 색상(baseColor)의 밝기를 주어진 퍼센트(amount)만큼 증가시켜 밝게 조절하여 RGB 또는 RGBA 문자열 형태로 반환합니다.
 * amount는 각 RGB 컴포넌트가 증가할 수 있는 최대값(255에서 현재 값까지의 차이)에 대한 퍼센트로 적용됩니다. RGBA 형식의 경우 알파 값은 변경되지 않습니다.
 *
 * @param {string} baseColor - 'rgb(x, y, z)' 또는 'rgba(x, y, z, a)' 형태의 색상 문자열입니다. 여기서 x, y, z는 각각 빨강, 초록, 파랑 색상의 밝기를, a는 알파(투명도) 값을 나타냅니다.
 * @param {number} amount - 기본 색상을 밝게 할 퍼센트입니다. 이 값은 각 RGB 컴포넌트 값을 기준으로 밝기를 증가시킵니다.
 * @returns {string} 밝게 조절된 색상의 'rgb(x, y, z)' 또는 'rgba(x, y, z, a)' 형태의 문자열을 반환합니다. 모든 색상 값은 255 이하이어야 합니다.
 */
function tintColor(baseColor: string, amount: number): string {
    const isRGBA = baseColor.startsWith('rgba');
    const baseColorRGB = baseColor.match(/\d+(\.\d+)?/g).map(Number);
    const alpha = isRGBA ? baseColorRGB.pop() : 1;
    const tintedColor = baseColorRGB.map((color) => Math.min(255, color + ((255 - color) * (amount / 100))));

    return isRGBA ? `rgba(${tintedColor.join(',')},${alpha})` : `rgb(${tintedColor.join(',')})`;
}

export default {shadeColor, tintColor};
