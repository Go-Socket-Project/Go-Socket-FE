export interface RegexsDataType {
  EMAIL: RegExp;
  PASSWORD: RegExp;
}

export const RegexsData: RegexsDataType = {
  EMAIL: /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  PASSWORD: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/,
};
