const successGenerate = (t: string): string => `${t}_SUCCESS`;
const requestGenerate = (t: string): string => `${t}_REQUEST`;
const failureGenerate = (t: string): string => `${t}_FAILURE`;

export { requestGenerate, successGenerate, failureGenerate };
