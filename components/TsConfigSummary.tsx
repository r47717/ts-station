import React from "react";
import styled from "styled-components";

interface IParam {
  param: string;
  info: string;
  default: string;
}

const data: IParam[] = [
  {
    param: "target",
    info: "The version of JS typescript will transpile to",
    default: "ES3"
  },
  {
    param: "module",
    info: `Module system the generated code will use: "None", "CommonJS", "AMD", "System", "UMD", "ES6", "ES2015" or "ESNext"`,
    default: `target === "ES3" or "ES5" ? "CommonJS" : "ES6"`
  },
  {
    param: "moduleResolution",
    info: `Strategy on how TS looks for imported modules - NodeJS style lookup or Classic simplified lookup`,
    default: `module === "AMD" or "System" or "ES6" ? "Classic" : "Node"`
  },
  {
    param: "lib",
    info: `List of library files to be included in the compilation.`,
    default:
      "For target ES5: DOM, ES5, ScriptHost. For target ES6: DOM, ES6, DOM.Iterable, ScriptHost"
  },
  {
    param: "strict",
    info: "Enable all strict type checking options",
    default: "false"
  },
  {
    param: "allowJs",
    info: "*.js files to be also compiled",
    default: "false"
  },
  {
    param: "resolveJsonModule",
    info: "Include modules imported with .json extension.",
    default: "false"
  },
  {
    param: "jsx",
    info:
      "How TS compiler deals with React JSX: preserve (keeps as is with jsx extension), react (transpiles to JS), react-native (same as preserve but extension)",
    default: "preserve"
  }
];

const Container = styled.div`
  padding: 20px;
`;

const Link = styled.a`
  display: block;
`;

function TsConfigSummary() {
  return (
    <Container>
      <table className="table table-striped table-bordered table-hover">
        <tbody>
          {data.map(item => (
            <tr>
              <td>{item.param}</td>
              <td>{item.info}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link
        href="https://www.typescriptlang.org/docs/handbook/compiler-options.html"
        target="_blank"
        title="Go to detailed info"
      >
        See details
      </Link>
    </Container>
  );
}

export default TsConfigSummary;
