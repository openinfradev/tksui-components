/**
 * 주어진 값을 클립보드에 쓰기 위해 클립보드에 텍스트를 복사합니다.
 * @param {string} value - 클립보드에 복사할 텍스트 값
 * @returns {Promise<void>} 클립보드에 텍스트를 복사하는 프로미스 객체
 */

function writeOnClipboard(value: string): Promise<void> {
    return window?.navigator?.clipboard.writeText(value);
}

export default {writeOnClipboard};
