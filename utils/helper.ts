export class Helper {
  public static delay(milliseconds: any) {
    return new Promise((resolve) => {
      setTimeout(resolve, milliseconds);
    });
  }

  public static formatEndpoint(endpoint: string, replacements: { [key: string]: string }): string {
    let result = endpoint;
    for (const key in replacements) {
      const placeholder = `{${key}}`;
      const value = replacements[key];
      result = result.replace(placeholder, value);
    }
    return result;
  }

  public static equalsIgnoreCase(str1: string, str2: string): boolean {
    return str1.toLowerCase() === str2.toLowerCase();
  }

  public static capitalizeFirstLetter(inputString: string): string {
    if (inputString.length === 0) {
      return inputString;
    }

    return inputString.charAt(0).toUpperCase() + inputString.slice(1);
  }

  public static getDateAfter(days: number) {
    const today = new Date();
    const afterDays = new Date(today);
    afterDays.setDate(today.getDate() + days);

    // Set the time to the last millisecond of the day
    afterDays.setHours(23, 59, 59, 999);

    // Format the date to ISO string
    return afterDays.toISOString();
  }

  public static getRandomEnumValue(anEnum: any): string {
    const enumKeys = Object.keys(anEnum);
    const randomKey = enumKeys[Math.floor(Math.random() * enumKeys.length)];
    return anEnum[randomKey];
  }

  public static extractNumberFromString = (inputString: string): number | null => {
    if (!inputString) return null;

    const matches = inputString.match(/\d+/); // Regular expression to match numbers
    if (matches && matches.length > 0) {
      return parseInt(matches[0], 10);
    }
    return null;
  };

  public static extractFrequencyFromString = (inputString: string): string | null => {
    if (!inputString) return null;

    const matches = inputString.toLowerCase().match(/\b(monthly|fortnightly|weekly)\b/i);
    if (matches && matches.length > 0) {
      return matches[0];
    }
    return null;
  };
}
