module.exports = {
    printWidth: 120, // 한줄 최대 너비
    tabWidth: 4, // 들여쓰기 너비
    useTabs: false, // 탭 대신 스페이스 사용
    semi: true, // 세미콜론 사용
    trailingComma: 'es5', // 후행 쉼표 사용 함
    singleQuote: true, // 작은따옴표 사용
    jsxSingleQuote: true, // JSX에서 작은따옴표 사용
    bracketSpacing: false, // 객체 리터럴의 중괄호 사이에 공백 제거
    bracketSameLine: false, // JSX의 닫는 태그를 같은 줄에
    endOfLine: 'auto', // 줄바꿈 문자
    jsxBracketSameLine: false, // JSX의 닫는 태그를 같은 줄에 두지 않기
    quoteProps: 'as-needed', // 객체 속성의 따옴표 사용 방식
    proseWrap: 'preserve', // 마크다운 텍스트 줄바꿈
    htmlWhitespaceSensitivity: 'css', // HTML 공백 민감도
    embeddedLanguageFormatting: 'auto', // 임베디드 코드 포맷팅
    arrowParens: 'always', // Arrow function 매개변수에 괄호 생략 금지
    objectWrap: 'preserve',
    singleAttributePerLine: false,
    insertPragma: false,
    requirePragma: false,

    overrides: [
        {
            files: '*.{json,yml,yaml}',
            options: {
                singleQuote: false, // JSON, YAML 파일은 큰따옴표 사용
            },
        },
    ],
};
