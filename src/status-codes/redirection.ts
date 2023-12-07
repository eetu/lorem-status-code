import { StatusCode } from ".";

const redirection: StatusCode[] = [
  { code: 300, name: "MultipleChoices" },
  { code: 301, name: "MovedPermanently" },
  { code: 302, name: "Found" },
  { code: 303, name: "SeeOther" },
  { code: 304, name: "NotModified" },
  { code: 305, name: "UseProxy" },
  { code: 306, name: "SwitchProxy" },
  { code: 307, name: "TemporaryRedirect" },
  { code: 308, name: "PermanentRedirect" },
];

export default redirection;
