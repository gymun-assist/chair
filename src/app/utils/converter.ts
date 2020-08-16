export class Converter {
  public static toHyphenNotation(str: string): string {
    return str.replace(/ /g, '-').toLowerCase().trim();
  }
}
