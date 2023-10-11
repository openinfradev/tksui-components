
function shadeColor(baseColor, amount): string {

    const baseColorRGB = baseColor.match(/\d+(\.\d+)?/g);
    const shadedColor = [
        Math.max(0, parseInt(baseColorRGB[0], 10) - amount),
        Math.max(0, parseInt(baseColorRGB[1], 10) - amount),
        Math.max(0, parseInt(baseColorRGB[2], 10) - amount),
    ];

    return `rgb(${shadedColor.join(',')})`;
}

function tintColor(baseColor, amount) {
    const baseColorRGB = baseColor.match(/\d+(\.\d+)?/g);
    const tintedColor = [
        Math.min(255, parseInt(baseColorRGB[0], 10) + amount),
        Math.min(255, parseInt(baseColorRGB[1], 10) + amount),
        Math.min(255, parseInt(baseColorRGB[2], 10) + amount),
    ];
    return `rgb(${tintedColor.join(',')})`;
}


export default {shadeColor, tintColor};
