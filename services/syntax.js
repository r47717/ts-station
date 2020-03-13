const TS_KEYWORDS = [
  "break",
  "case",
  "catch",
  "class",
  "const",
  "continue",
  "debugger",
  "default",
  "delete",
  "do",
  "else",
  "enum",
  "export",
  "extends",
  "false",
  "finally",
  "for",
  "function",
  "if",
  "import",
  "in",
  "instanceof",
  "new",
  "null",
  "return",
  "super",
  "switch",
  "this",
  "throw",
  "true",
  "try",
  "typeof",
  "var",
  "void",
  "while",
  "with",
  "as",
  "implements",
  "interface",
  "let",
  "package",
  "private",
  "protected",
  "public",
  "static",
  "yield",
  "any",
  "boolean",
  "constructor",
  "declare",
  "get",
  "module",
  "require",
  "number",
  "set",
  "string",
  "symbol",
  "type",
  "from",
  "of"
];

const map = {
  keywords: `<span style="color: #c7662e">DATA</span>`
};

function nl2br(str) {
  if (typeof str === "undefined" || str === null) {
    return "";
  }
  return (str + "").replace(
    /([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,
    "$1" + "<br>" + "$2"
  );
}

export function highlight(str) {
  return nl2br(
    str.replace(new RegExp("(" + TS_KEYWORDS.join("|") + ")", "gm"), str =>
      map.keywords.replace("DATA", str)
    )
  );
}
