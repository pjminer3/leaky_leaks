/**
 * Write a function that reverses a string. The input string is given as an array of characters s.
 * You must do this by modifying the input array in-place with O(1) extra memory.
 */

function reverseString(s: string[]): void {
    let left = '';
    let right = '';

    let i = 0, j = s.length - 1;

    while (i < j) {
        left = s[i];
        right = s[j];
        s[i] = right;
        s[j] = left;
        i++;
        j--;
    }
};
