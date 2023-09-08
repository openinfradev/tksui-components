export default {

    requiredArr(errorMessage?: string) {
        return (v: any[]) => (v.length > 0 || errorMessage) ?? '1개 이상 선택해 주세요';
    },
    required(errorMessage?: string) {
        return (v: string | number) => (!!v || errorMessage) ?? '값을 입력해 주세요';
    },
    lengthMin(min: number, errorMessage?: string) {
        return (v: string) => (v.length >= min || errorMessage) ?? `${min}자 이상 입력해 주세요`;
    },
    lengthMax(max: number, errorMessage?: string) {
        return (v: string) => (v.length <= max || errorMessage) ?? `${max}자 이내로 입력해 주세요`;
    },
    lengthBetween(min: number, max: number, errorMessage?: string) {
        return (v: string) => ((v.length >= min && v.length <= max) || errorMessage) ?? `${min}-${max}자 사이로 입력해 주세요`;
    },
    valueMin(min: number, errorMessage?: string) {
        return (v: string) => (Number.parseInt(v, 10) >= min || errorMessage) ?? `${min} 이상으로 입력해 주세요`;
    },
    valueMax(max: number, errorMessage?: string) {
        return (v: string) => (Number.parseInt(v, 10) <= max || errorMessage) ?? `${max} 이하로 입력해 주세요`;
    },
    valueBetween(min: number, max: number, errorMessage?: string) {
        return (v: string) => ((Number.parseInt(v, 10) >= min && Number.parseInt(v, 10) <= max) || errorMessage)
            ?? `${min}-${max} 사이로 입력해 주세요`;
    },
    valueSpecified(values: number[], errorMessage?: string) {
        return (v: string) => (values.some((value) => value === Number.parseInt(v, 10)) || errorMessage)
            ?? `[${values.join(', ')}] 중 선택해 주세요`;
    },
    equal(value: any, errorMessage?: string) {
        return (v: string) => (v === value || errorMessage) ?? '올바른 값을 입력해 주세요';
    },
    email(errorMessage?: string) {
        const regexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return (v: string) => (regexp.test(v) || errorMessage) ?? '올바른 형태의 이메일을 입력해 주세요';
    },
    regexp(regexp: RegExp, errorMessage?: string) {
        return (v: string) => (regexp.test(v) || errorMessage) ?? '값을 규칙에 맞게 입력해 주세요';
    },
};
