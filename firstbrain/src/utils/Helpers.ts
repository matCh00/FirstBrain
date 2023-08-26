import {PriorityEnum2} from "./Priority";

export abstract class Helpers {

  static getDeadline = (date: Date) => {
    return date.toLocaleDateString("pl-PL", {year: 'numeric', month: '2-digit', day: '2-digit'});
  }

  static getRemains = (date: Date) => {
    const timeDiff = Math.abs(new Date().getTime() - date.getTime());
    const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
    return daysDiff >= 0 ? daysDiff + ' days' : Math.abs(daysDiff) + ' late';
  }

  static getSeverity = (key: string): string => {
    return PriorityEnum2[key.toUpperCase() as keyof typeof PriorityEnum2];
  }

  static shortenString = (input: string, maxLength: number): string => {
    if (input.length === 0) {
      return '-';
    }
    if (input.length <= maxLength) {
      return input;
    } else {
      const shortened = input.substring(0, maxLength);
      if (shortened.length < input.length) {
        return shortened + '...';
      }
      return shortened;
    }
  }

}